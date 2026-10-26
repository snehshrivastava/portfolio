// Builds an ATS-friendly resume PDF from src/data/resume.js.
//
//   npm run resume                 -> src/Assets/Snehresume.pdf
//   npm run resume -- out/cv.pdf   -> custom output path
//
// Needs a Chromium-based browser for printing. Set CHROME_PATH to override detection.

import { existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { chromium } from "playwright-core";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const { profile, skills, experience, education, projects } = await import(
  pathToFileURL(join(root, "src/data/resume.js")).href
);

const BROWSERS = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

const escape = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const rich = (s) => escape(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

const bare = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const link = (href, text) => `<a href="${escape(href)}">${escape(text)}</a>`;

function render() {
  const contact = [
    escape(profile.phone),
    link(`mailto:${profile.email}`, profile.email),
    link(profile.linkedin, bare(profile.linkedin)),
    link(profile.github, bare(profile.github)),
    link(profile.website, bare(profile.website)),
  ].join(" | ");

  const skillRows = skills
    .map((s) => {
      const items = [...(s.technologies || []), ...(s.concepts || [])];
      return `<li><strong>${escape(s.category)}:</strong> ${items.map(escape).join(", ")}</li>`;
    })
    .join("\n");

  const jobs = experience
    .map(
      (job) => `
    <div class="entry">
      <div class="entry-head">
        <h3>${escape(job.role)}, ${escape(job.company)}</h3>
        <span class="dates">${escape(job.period)}</span>
      </div>
      <div class="entry-sub">${escape(job.location)}, India</div>
      <ul>${job.points.map((p) => `<li>${rich(p)}</li>`).join("")}</ul>
    </div>`
    )
    .join("\n");

  const projectRows = projects
    .map(
      (p) => `
    <div class="entry">
      <div class="entry-head"><h3>${escape(p.title)}</h3></div>
      <div class="entry-sub">${p.stack.map(escape).join(", ")}</div>
      <ul><li>${rich(p.description)}</li></ul>
    </div>`
    )
    .join("\n");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${escape(profile.name)} - ${escape(profile.title)} Resume</title>
<meta name="author" content="${escape(profile.name)}">
<style>
  @page { size: A4; margin: 12mm 14mm; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 9.8pt;
    line-height: 1.3;
    color: #000;
    font-variant-ligatures: none;
  }
  a { color: #000; text-decoration: none; }
  h1 { font-size: 20pt; margin: 0; text-align: center; letter-spacing: 0.5pt; }
  .headline { text-align: center; font-size: 11pt; margin: 2pt 0 3pt; }
  .contact { text-align: center; font-size: 8.7pt; margin-bottom: 4pt; }
  h2 {
    font-size: 11pt;
    text-transform: uppercase;
    border-bottom: 1px solid #000;
    margin: 8pt 0 3pt;
    padding-bottom: 1pt;
  }
  h3 { font-size: 10pt; margin: 0; }
  p { margin: 0; }
  ul { margin: 2pt 0 0; padding-left: 14pt; }
  li { margin-bottom: 1pt; }
  .skills { list-style: none; padding-left: 0; }
  .entry { margin-bottom: 5pt; }
  .entry-head, .entry-sub { break-after: avoid; }
  li { break-inside: avoid; }
  .entry-head { display: flex; justify-content: space-between; align-items: baseline; gap: 8pt; }
  .dates { white-space: nowrap; font-weight: bold; }
  .entry-sub { font-style: italic; }
</style>
</head>
<body>
  <h1>${escape(profile.name.toUpperCase())}</h1>
  <div class="headline">${escape(profile.title)} | ${escape(profile.location)}</div>
  <div class="contact">${contact}</div>

  <h2>Summary</h2>
  <p>${rich(profile.summary)}</p>

  <h2>Skills</h2>
  <ul class="skills">${skillRows}</ul>

  <h2>Experience</h2>
  ${jobs}

  <h2>Projects</h2>
  ${projectRows}

  <h2>Education</h2>
  <div class="entry">
    <div class="entry-head">
      <h3>${escape(education.degree)}</h3>
      <span class="dates">${escape(education.period)}</span>
    </div>
    <div class="entry-sub">${escape(education.school)}</div>
  </div>
</body>
</html>`;
}

const browser = BROWSERS.find((p) => existsSync(p));
if (!browser) {
  console.error("No Chromium-based browser found. Set CHROME_PATH to one.");
  process.exit(1);
}

const out = resolve(process.argv[2] || join(root, "src/Assets/Snehresume.pdf"));
mkdirSync(dirname(out), { recursive: true });

const instance = await chromium.launch({ executablePath: browser, headless: true });
try {
  const page = await instance.newPage();
  await page.setContent(render(), { waitUntil: "load" });
  await page.pdf({ path: out, preferCSSPageSize: true, printBackground: true });
} finally {
  await instance.close();
}

console.log(`Resume written to ${out}`);
