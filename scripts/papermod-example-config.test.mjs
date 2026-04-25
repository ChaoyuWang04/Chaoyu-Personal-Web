import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const config = readFileSync("hugo-blog/config.yaml", "utf8");

test("uses PaperMod example-site presentation settings", () => {
  for (const expected of [
    "pygmentsUseClasses: true",
    "mainsections: [\"posts\", \"papermod\"]",
    "pagerSize: 3",
    "ShowShareButtons: true",
    "displayFullLangName: true",
    "ShowRssButtonInSectionTermList: true",
    "ShowAllPagesInArchive: true",
    "ShowPageNums: true",
    "socialIcons:",
  ]) {
    assert.match(config, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("keeps portfolio navigation in PaperMod's native menu", () => {
  for (const expected of [
    "name: Home",
    'url: "https://chaoyuwang.vercel.app/"',
    "name: Blog",
    "url: /posts/",
    "name: CV",
    'url: "https://chaoyuwang.vercel.app/resume.pdf"',
    "name: EN/中",
    'url: "https://chaoyuwang.vercel.app/zh"',
  ]) {
    assert.match(config, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("does not override PaperMod's native header partial", () => {
  assert.equal(existsSync("hugo-blog/layouts/partials/header.html"), false);
});
