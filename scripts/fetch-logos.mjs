#!/usr/bin/env node
// Downloads brand SVG logos from the public SimpleIcons CDN to /public/logos.
// Idempotent — skips files that already exist. Each tool also carries a
// brand colour so the page can render the logo monochromatically and reveal
// the brand colour on hover, or vice versa.

import { promises as fs } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = path.resolve(process.cwd());
const out = path.join(root, 'public/logos');

// `slug` is the SimpleIcons slug (https://simpleicons.org).
// `colour` is the official brand hex.
// `display` is the label shown on the page.
export const LOGOS = [
  // Languages & frameworks
  { id: 'python', display: 'Python', slug: 'python', colour: '#3776AB' },
  { id: 'typescript', display: 'TypeScript', slug: 'typescript', colour: '#3178C6' },
  { id: 'go', display: 'Go', slug: 'go', colour: '#00ADD8' },
  { id: 'pytorch', display: 'PyTorch', slug: 'pytorch', colour: '#EE4C2C' },
  { id: 'tensorflow', display: 'TensorFlow', slug: 'tensorflow', colour: '#FF6F00' },
  { id: 'huggingface', display: 'Hugging Face', slug: 'huggingface', colour: '#FFD21E' },
  { id: 'langchain', display: 'LangChain', slug: 'langchain', colour: '#1C3C3C' },
  { id: 'nvidia', display: 'NVIDIA', slug: 'nvidia', colour: '#76B900' },

  // Data & feature plane
  { id: 'apacheairflow', display: 'Apache Airflow', slug: 'apacheairflow', colour: '#017CEE' },
  { id: 'dbt', display: 'dbt', slug: 'dbt', colour: '#FF694A' },
  { id: 'apachekafka', display: 'Apache Kafka', slug: 'apachekafka', colour: '#231F20' },
  { id: 'snowflake', display: 'Snowflake', slug: 'snowflake', colour: '#29B5E8' },
  { id: 'databricks', display: 'Databricks', slug: 'databricks', colour: '#FF3621' },

  // ML platform
  { id: 'mlflow', display: 'MLflow', slug: 'mlflow', colour: '#0194E2' },
  { id: 'dvc', display: 'DVC', slug: 'dvc', colour: '#13ADC7' },
  { id: 'weightsandbiases', display: 'Weights & Biases', slug: 'weightsandbiases', colour: '#FFBE00' },

  // Serving & infrastructure
  { id: 'kubernetes', display: 'Kubernetes', slug: 'kubernetes', colour: '#326CE5' },
  { id: 'istio', display: 'Istio', slug: 'istio', colour: '#466BB0' },
  { id: 'argo', display: 'Argo CD', slug: 'argo', colour: '#EF7B4D' },
  { id: 'terraform', display: 'Terraform', slug: 'terraform', colour: '#7B42BC' },
  { id: 'vault', display: 'HashiCorp Vault', slug: 'vault', colour: '#FFEC6E' },
  { id: 'opentelemetry', display: 'OpenTelemetry', slug: 'opentelemetry', colour: '#000000' },
  { id: 'docker', display: 'Docker', slug: 'docker', colour: '#2496ED' },
  { id: 'helm', display: 'Helm', slug: 'helm', colour: '#0F1689' },

  // Vector & retrieval
  { id: 'postgresql', display: 'PostgreSQL', slug: 'postgresql', colour: '#4169E1' },
  { id: 'elasticsearch', display: 'Elasticsearch', slug: 'elasticsearch', colour: '#005571' },
  { id: 'redis', display: 'Redis', slug: 'redis', colour: '#DC382D' },

  // Cloud
  { id: 'amazonwebservices', display: 'AWS UAE', slug: 'amazonwebservices', colour: '#FF9900' },
  { id: 'microsoftazure', display: 'Azure UAE', slug: 'microsoftazure', colour: '#0078D4' },
  { id: 'googlecloud', display: 'Google Cloud', slug: 'googlecloud', colour: '#4285F4' },
  { id: 'oracle', display: 'OCI Abu Dhabi', slug: 'oracle', colour: '#F80000' },

  // AI providers / models
  { id: 'openai', display: 'OpenAI', slug: 'openai', colour: '#412991' },
  { id: 'anthropic', display: 'Anthropic', slug: 'anthropic', colour: '#191919' },
  { id: 'meta', display: 'Meta (Llama)', slug: 'meta', colour: '#0866FF' },
  { id: 'ollama', display: 'Ollama', slug: 'ollama', colour: '#000000' },

  // Frontend (used in our delivery work too)
  { id: 'nextdotjs', display: 'Next.js', slug: 'nextdotjs', colour: '#000000' },
  { id: 'react', display: 'React', slug: 'react', colour: '#61DAFB' },
  { id: 'tailwindcss', display: 'Tailwind CSS', slug: 'tailwindcss', colour: '#06B6D4' },

  // Ops
  { id: 'github', display: 'GitHub', slug: 'github', colour: '#181717' },
  { id: 'gitlab', display: 'GitLab', slug: 'gitlab', colour: '#FC6D26' },
  { id: 'linux', display: 'Linux', slug: 'linux', colour: '#000000' },
  { id: 'grafana', display: 'Grafana', slug: 'grafana', colour: '#F46800' },
  { id: 'prometheus', display: 'Prometheus', slug: 'prometheus', colour: '#E6522C' }
];

async function fetchOne(logo) {
  const dest = path.join(out, `${logo.id}.svg`);
  try {
    const stat = await fs.stat(dest);
    if (stat.size > 80) {
      console.log(`✓ skip   ${logo.id}`);
      return { ok: true, skipped: true };
    }
  } catch {
    /* not present, continue */
  }
  const url = `https://cdn.simpleicons.org/${logo.slug}/${logo.colour.replace('#', '')}`;
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 Brocode-AssetFetcher' }
    });
    if (!res.ok) {
      console.log(`✗ ${res.status}  ${logo.id} (${logo.slug})`);
      return { ok: false, status: res.status };
    }
    const text = await res.text();
    if (!text.includes('<svg')) {
      console.log(`✗ bad   ${logo.id} — not an SVG response`);
      return { ok: false };
    }
    await fs.writeFile(dest, text);
    console.log(`✓ ${logo.id.padEnd(20)} → /logos/${logo.id}.svg`);
    return { ok: true };
  } catch (err) {
    console.log(`✗ err   ${logo.id}  ${err.message}`);
    return { ok: false, error: err.message };
  }
}

(async () => {
  await fs.mkdir(out, { recursive: true });
  const queue = [...LOGOS];
  const failed = [];
  const CONCURRENCY = 6;
  async function worker() {
    while (queue.length) {
      const l = queue.shift();
      const r = await fetchOne(l);
      if (!r.ok) failed.push(l);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));
  if (failed.length) {
    console.log(`\nFailed: ${failed.length}/${LOGOS.length}`);
    for (const f of failed) console.log(`  · ${f.id} (${f.slug})`);
  } else {
    console.log(`\nFetched ${LOGOS.length} logos.`);
  }
})();
