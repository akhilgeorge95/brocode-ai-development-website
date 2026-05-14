#!/usr/bin/env node
// Downloads every image + video listed in asset-manifest.mjs into /public.
// Idempotent — skips files that already exist with non-zero size.

import { IMAGE_ASSETS, VIDEO_ASSETS } from './asset-manifest.mjs';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = path.resolve(process.cwd());
const CONCURRENCY = 5;

async function exists(p) {
  try {
    const s = await fs.stat(p);
    return s.size > 1024;
  } catch {
    return false;
  }
}

async function fetchOne(asset, kind) {
  const dest = path.join(root, asset.dest);
  if (await exists(dest)) {
    console.log(`✓ skip   ${asset.dest}`);
    return { ok: true, skipped: true };
  }
  await fs.mkdir(path.dirname(dest), { recursive: true });

  try {
    const res = await fetch(asset.src, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36',
        Accept: kind === 'image' ? 'image/*,*/*' : 'video/mp4,video/*,*/*'
      },
      redirect: 'follow'
    });
    if (!res.ok) {
      console.log(`✗ ${res.status}  ${asset.dest}`);
      return { ok: false, status: res.status, asset };
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await fs.writeFile(dest, buf);
    console.log(`✓ ${kind === 'image' ? 'img' : 'vid'}    ${asset.dest} (${(buf.length / 1024).toFixed(0)} KB)`);
    return { ok: true };
  } catch (err) {
    console.log(`✗ err   ${asset.dest}  ${err.message}`);
    return { ok: false, error: err.message, asset };
  }
}

async function runPool(items, kind) {
  const queue = [...items];
  const failed = [];
  async function worker() {
    while (queue.length) {
      const item = queue.shift();
      const r = await fetchOne(item, kind);
      if (!r.ok) failed.push(item);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));
  return failed;
}

(async () => {
  console.log(`\n— Images (${IMAGE_ASSETS.length}) —`);
  const failImg = await runPool(IMAGE_ASSETS, 'image');
  console.log(`\n— Videos (${VIDEO_ASSETS.length}) —`);
  const failVid = await runPool(VIDEO_ASSETS, 'video');

  if (failImg.length || failVid.length) {
    console.log(`\nFailed: ${failImg.length} images, ${failVid.length} videos`);
  } else {
    console.log('\nAll assets fetched.');
  }
})();
