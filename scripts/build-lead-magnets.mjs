#!/usr/bin/env node
// Generates a 4-page placeholder PDF for every lead magnet defined in lead-magnets.mjs.
// Output: /public/downloads/<file>.pdf

import { LEAD_MAGNETS } from './lead-magnets.mjs';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { promises as fs } from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const out = path.join(root, 'public/downloads');
const BRAND = rgb(0, 112 / 255, 242 / 255);
const INK = rgb(10 / 255, 14 / 255, 26 / 255);
const MUTED = rgb(85 / 255, 95 / 255, 115 / 255);

async function buildPdf({ title, subtitle, sections }) {
  const pdf = await PDFDocument.create();
  pdf.setTitle(title);
  pdf.setAuthor('Brocode Solutions — AI Software Development');
  pdf.setSubject('Lead magnet — Brocode AI');
  pdf.setKeywords(['brocode', 'enterprise ai', 'uae', 'gcc']);
  pdf.setCreator('Brocode AI website');
  pdf.setProducer('pdf-lib');
  const inter = await pdf.embedFont(StandardFonts.Helvetica);
  const interBold = await pdf.embedFont(StandardFonts.HelveticaBold);

  const A4 = { w: 595.28, h: 841.89 };
  const margin = 56;

  // ── Cover page ──
  const cover = pdf.addPage([A4.w, A4.h]);
  cover.drawRectangle({ x: 0, y: A4.h - 220, width: A4.w, height: 220, color: BRAND });
  cover.drawText('BROCODE SOLUTIONS', { x: margin, y: A4.h - 80, size: 11, font: interBold, color: rgb(1, 1, 1) });
  cover.drawText('AI SOFTWARE DEVELOPMENT', { x: margin, y: A4.h - 96, size: 9, font: inter, color: rgb(1, 1, 1) });
  cover.drawText('Abu Dhabi · United Arab Emirates', { x: margin, y: A4.h - 116, size: 8, font: inter, color: rgb(1, 1, 1) });

  cover.drawText('A Brocode AI Insights publication', { x: margin, y: A4.h - 250, size: 9, font: inter, color: MUTED });
  drawWrappedText(cover, title, { x: margin, y: A4.h - 290, size: 30, font: interBold, color: INK, maxWidth: A4.w - margin * 2, lineHeight: 36 });
  drawWrappedText(cover, subtitle, { x: margin, y: A4.h - 460, size: 14, font: inter, color: MUTED, maxWidth: A4.w - margin * 2, lineHeight: 20 });

  cover.drawLine({ start: { x: margin, y: 160 }, end: { x: A4.w - margin, y: 160 }, thickness: 0.5, color: MUTED });
  cover.drawText('Inside this report', { x: margin, y: 140, size: 11, font: interBold, color: INK });
  sections.slice(0, 6).forEach((s, i) => {
    cover.drawText(`${String(i + 1).padStart(2, '0')}   ${s}`, { x: margin, y: 120 - i * 16, size: 10, font: inter, color: INK });
  });

  cover.drawText('brocode.ae · hello@brocode.ae · +971 50 761 2213', { x: margin, y: 32, size: 9, font: inter, color: MUTED });

  // ── Body pages: one per section ──
  for (const [i, heading] of sections.entries()) {
    const page = pdf.addPage([A4.w, A4.h]);
    page.drawRectangle({ x: 0, y: A4.h - 4, width: A4.w, height: 4, color: BRAND });
    page.drawText(`SECTION ${String(i + 1).padStart(2, '0')}`, { x: margin, y: A4.h - 56, size: 9, font: interBold, color: BRAND });
    drawWrappedText(page, heading, { x: margin, y: A4.h - 90, size: 22, font: interBold, color: INK, maxWidth: A4.w - margin * 2, lineHeight: 28 });

    const body = `This is a preview of the "${heading}" section of the report. The final published version of this report contains in-depth analysis, benchmark data, reference architectures, and recommendations specific to enterprises operating in the UAE and the wider GCC.\n\nIf you would like the full version before it is released, please request a copy from the Brocode AI team and we will share an embargoed draft under NDA. We can also arrange a 30-minute briefing with the engineer who authored this section.\n\nThis preview is intentionally short so that the reader of the gated download can scan the structure of the full report. The body sections of the final publication run between 6 and 12 pages each, with a mix of prose, tables, and figures.`;
    drawWrappedText(page, body, { x: margin, y: A4.h - 180, size: 11, font: inter, color: INK, maxWidth: A4.w - margin * 2, lineHeight: 17 });

    page.drawText(`Brocode Solutions · ${title}`, { x: margin, y: 32, size: 8, font: inter, color: MUTED });
    page.drawText(`${i + 2}`, { x: A4.w - margin, y: 32, size: 8, font: inter, color: MUTED });
  }

  // ── Closing page ──
  const close = pdf.addPage([A4.w, A4.h]);
  close.drawRectangle({ x: 0, y: 0, width: A4.w, height: A4.h, color: rgb(0.96, 0.97, 0.99) });
  close.drawText('Talk to our team', { x: margin, y: A4.h - 100, size: 24, font: interBold, color: INK });
  drawWrappedText(close, 'If this report sparked questions, we are happy to walk you through the underlying analysis, share the full benchmark dataset under NDA, or design a tailored architecture review for your specific environment. Reach us in whichever channel works.', { x: margin, y: A4.h - 150, size: 12, font: inter, color: INK, maxWidth: A4.w - margin * 2, lineHeight: 18 });

  close.drawText('hello@brocode.ae', { x: margin, y: A4.h - 320, size: 12, font: interBold, color: BRAND });
  close.drawText('+971 50 761 2213  (WhatsApp)', { x: margin, y: A4.h - 340, size: 12, font: inter, color: INK });
  close.drawText('Al Maryah Island, Abu Dhabi Global Market, UAE', { x: margin, y: A4.h - 360, size: 12, font: inter, color: INK });
  close.drawText('https://www.brocode.ae', { x: margin, y: A4.h - 380, size: 12, font: inter, color: INK });

  close.drawText('© Brocode Solutions. All rights reserved.', { x: margin, y: 40, size: 9, font: inter, color: MUTED });

  return pdf.save();
}

/** Wraps text using simple word-width estimation. */
function drawWrappedText(page, text, { x, y, size, font, color, maxWidth, lineHeight }) {
  if (!text) return;
  const words = text.split(/\s+/);
  let line = '';
  let cursorY = y;
  for (const word of words) {
    if (word === '\n') {
      page.drawText(line.trimEnd(), { x, y: cursorY, size, font, color });
      line = '';
      cursorY -= lineHeight;
      continue;
    }
    const candidate = line ? `${line} ${word}` : word;
    const width = font.widthOfTextAtSize(candidate, size);
    if (width <= maxWidth) {
      line = candidate;
    } else {
      page.drawText(line, { x, y: cursorY, size, font, color });
      cursorY -= lineHeight;
      line = word;
    }
  }
  if (line) {
    page.drawText(line, { x, y: cursorY, size, font, color });
  }
}

(async () => {
  await fs.mkdir(out, { recursive: true });
  let ok = 0;
  for (const m of LEAD_MAGNETS) {
    const dest = path.join(out, m.file);
    const bytes = await buildPdf(m);
    await fs.writeFile(dest, bytes);
    console.log(`✓ ${m.slug.padEnd(34)} → /downloads/${m.file}`);
    ok += 1;
  }
  console.log(`\nGenerated ${ok} placeholder PDFs in ${out}`);
})();
