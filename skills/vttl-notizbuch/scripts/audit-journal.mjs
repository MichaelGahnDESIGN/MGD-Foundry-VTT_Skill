import { ClassicLevel } from "classic-level";
import { access } from "node:fs/promises";

// Read-only-Beispiel. Der konkrete Foundry-Datenpfad wird nur über Umgebungsvariablen gesetzt.
const dataRoot = process.env.FOUNDRY_WORLD_DATA;
const assetRoot = process.env.FOUNDRY_ASSET_ROOT;
const journalId = process.env.FOUNDRY_JOURNAL_ID;
if (!dataRoot || !assetRoot || !journalId) {
  throw new Error("FOUNDRY_WORLD_DATA, FOUNDRY_ASSET_ROOT und FOUNDRY_JOURNAL_ID müssen gesetzt sein.");
}

const db = new ClassicLevel(`${dataRoot}/journal`, { valueEncoding: "utf8" });
await db.open();
const journal = JSON.parse(await db.get(`!journal!${journalId}`));
const report = { journalId, name: journal.name, pageCount: journal.pages?.length || 0, pages: [], missingAssets: [] };
for (const pageId of journal.pages || []) {
  const page = JSON.parse(await db.get(`!journal.pages!${journalId}.${pageId}`));
  const content = page.text?.content || "";
  const assets = [...content.matchAll(/src=["']([^"']+)["']/g)].map((match) => match[1]);
  report.pages.push({ id: pageId, name: page.name, imageCount: assets.length });
  for (const asset of assets) {
    const relative = asset.replace(/^.*?\/assets\//, "");
    try { await access(`${assetRoot}/${relative}`); } catch { report.missingAssets.push({ pageId, asset }); }
  }
}
await db.close();
console.log(JSON.stringify(report, null, 2));
