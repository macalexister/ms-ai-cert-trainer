const pptxgen = require("pptxgenjs");

/* Farbwelt: dunkles Anthrazit mit dem Crimson der App als Leitfarbe */
const BG      = "1B1A1C";
const PANEL   = "252428";
const PANEL_2 = "2E2D32";
const ACCENT  = "FF6B8A";
const ACCENT_D= "B11F4B";
const TXT     = "F2F0EE";
const TXT_M   = "C6C2C0";
const TXT_S   = "9C9896";
const GREEN   = "5FD08A";

const H_FONT = "Trebuchet MS";
const B_FONT = "Calibri";

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Alex Singer";
pres.title = "AI Cert Trainer - AB-730 & AB-731";

const s = pres.addSlide();
s.background = { color: BG };

/* ---------- Kopfbereich ---------- */
s.addShape(pres.shapes.OVAL, {
  x: 0.55, y: 0.44, w: 0.32, h: 0.32,
  fill: { color: ACCENT_D }, line: { color: ACCENT_D }
});
s.addText("✦", {
  x: 0.55, y: 0.44, w: 0.32, h: 0.32,
  fontSize: 14, color: TXT, align: "center", valign: "middle", margin: 0
});
s.addText("AI CERT TRAINER", {
  x: 0.98, y: 0.44, w: 4, h: 0.32,
  fontSize: 10.5, bold: true, color: ACCENT, fontFace: B_FONT,
  charSpacing: 2.4, valign: "middle", margin: 0
});

s.addText([
  { text: "Prüfungstraining für", options: { breakLine: true } },
  { text: "AB-730 & AB-731" }
], {
  x: 0.55, y: 0.84, w: 6.1, h: 0.94,
  fontSize: 28, bold: true, color: TXT, fontFace: H_FONT,
  valign: "top", margin: 0, lineSpacingMultiple: 1.02
});
s.addText("Microsoft Certified: AI Business Professional  ·  AI Transformation Leader", {
  x: 0.55, y: 1.8, w: 6.1, h: 0.26,
  fontSize: 11.5, color: TXT_M, fontFace: B_FONT, valign: "middle", margin: 0
});

/* ---------- Kennzahlen ---------- */
const stats = [
  { v: "192", l: "Fragen mit Erklärung" },
  { v: "5", l: "Lernmodi" },
  { v: "45", l: "Min. Simulation" },
  { v: "0 €", l: "Kosten, kein Login" }
];
stats.forEach((st, i) => {
  const x = 0.55 + i * 1.55;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x, y: 2.16, w: 1.37, h: 0.94,
    fill: { color: PANEL }, line: { color: PANEL }, rectRadius: 0.1
  });
  s.addText(st.v, {
    x, y: 2.25, w: 1.37, h: 0.4,
    fontSize: 23, bold: true, color: ACCENT, fontFace: H_FONT,
    align: "center", valign: "middle", margin: 0
  });
  s.addText(st.l, {
    x: x + 0.04, y: 2.65, w: 1.29, h: 0.34,
    fontSize: 8, color: TXT_S, fontFace: B_FONT,
    align: "center", valign: "top", margin: 0
  });
});

/* ---------- Lernmodi ---------- */
s.addText("DIE FÜNF MODI", {
  x: 0.55, y: 3.18, w: 3, h: 0.2,
  fontSize: 9, bold: true, color: TXT_S, fontFace: B_FONT,
  charSpacing: 1.8, valign: "middle", margin: 0
});

const modes = [
  ["Quick Drill", "10 Fragen, gewichtet auf deine Schwächen"],
  ["Prüfungssimulation", "Blueprint-Gewichtung, Timer, Score /1000"],
  ["Domain-Training", "Gezielt einen Wissensbereich üben"],
  ["Wiederholung", "Spaced Repetition der Fehler"],
  ["Lernkarten", "Durchblättern ohne Bewertung"]
];
modes.forEach((m, i) => {
  const col = i % 2, row = Math.floor(i / 2);
  const x = 0.55 + col * 3.24;
  const y = 3.42 + row * 0.40;
  s.addShape(pres.shapes.OVAL, {
    x, y: y + 0.05, w: 0.15, h: 0.15,
    fill: { color: ACCENT_D }, line: { color: ACCENT_D }
  });
  s.addText(m[0], {
    x: x + 0.24, y, w: 2.85, h: 0.21,
    fontSize: 10.5, bold: true, color: TXT, fontFace: B_FONT, valign: "middle", margin: 0
  });
  s.addText(m[1], {
    x: x + 0.24, y: y + 0.19, w: 2.85, h: 0.2,
    fontSize: 8.5, color: TXT_S, fontFace: B_FONT, valign: "middle", margin: 0
  });
});

/* ---------- Qualitätsmerkmal (fuellt die freie Rasterzelle) ---------- */
s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 3.79, y: 4.18, w: 2.81, h: 0.42,
  fill: { color: PANEL }, line: { color: PANEL }, rectRadius: 0.08
});
s.addText([
  { text: "Auf Verzerrungen geprüft: ", options: { bold: true, color: TXT } },
  { text: "Antworten werden jedes Mal neu gemischt, Positionen sind nicht lernbar.", options: { color: TXT_S } }
], {
  x: 3.93, y: 4.18, w: 2.55, h: 0.42,
  fontSize: 7.5, fontFace: B_FONT, valign: "middle", margin: 0, lineSpacingMultiple: 1.05
});

/* ---------- Rechte Spalte: Zugang ---------- */
s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 7.02, y: 2.16, w: 2.43, h: 3.1,
  fill: { color: PANEL }, line: { color: PANEL_2, width: 1 }, rectRadius: 0.12
});

/* Reifegrad-Ring als visuelles Motiv */
s.addShape(pres.shapes.OVAL, {
  x: 7.94, y: 2.38, w: 0.6, h: 0.6,
  fill: { color: ACCENT_D }, line: { color: ACCENT_D }
});
s.addShape(pres.shapes.OVAL, {
  x: 8.04, y: 2.48, w: 0.4, h: 0.4,
  fill: { color: PANEL }, line: { color: PANEL }
});
s.addText("700", {
  x: 7.94, y: 2.38, w: 0.6, h: 0.6,
  fontSize: 10.5, bold: true, color: TXT, fontFace: H_FONT,
  align: "center", valign: "middle", margin: 0
});
s.addText("Die App rechnet deine Prüfungsreife auf die Bestehensgrenze hoch", {
  x: 7.18, y: 3.06, w: 2.11, h: 0.4,
  fontSize: 8, color: TXT_S, fontFace: B_FONT,
  align: "center", valign: "top", margin: 0, lineSpacingMultiple: 1.08
});

s.addText("SO KOMMST DU REIN", {
  x: 7.18, y: 3.62, w: 2.11, h: 0.2,
  fontSize: 8, bold: true, color: TXT_S, fontFace: B_FONT,
  charSpacing: 1.4, align: "center", valign: "middle", margin: 0
});

s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 7.18, y: 3.88, w: 2.11, h: 0.36,
  fill: { color: ACCENT_D }, line: { color: ACCENT_D }, rectRadius: 0.07
});
s.addText("tinyurl.com/aicert730", {
  x: 7.18, y: 3.88, w: 2.11, h: 0.36,
  fontSize: 11, bold: true, color: TXT, fontFace: B_FONT,
  align: "center", valign: "middle", margin: 0
});

s.addText([
  { text: "Safari  ›  Teilen  ›  Zum Home-Bildschirm", options: { breakLine: true } },
  { text: "Danach Vollbild und offline nutzbar." }
], {
  x: 7.18, y: 4.30, w: 2.11, h: 0.46,
  fontSize: 8, color: TXT_M, fontFace: B_FONT,
  align: "center", valign: "top", margin: 0, lineSpacingMultiple: 1.15
});

/* ---------- Datenschutz ---------- */
s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.55, y: 4.82, w: 6.05, h: 0.44,
  fill: { color: PANEL_2 }, line: { color: PANEL_2 }, rectRadius: 0.08
});
s.addShape(pres.shapes.OVAL, {
  x: 0.72, y: 4.94, w: 0.19, h: 0.19,
  fill: { color: GREEN }, line: { color: GREEN }
});
s.addText([
  { text: "Kein Server, kein Konto, kein Tracking.  ", options: { bold: true, color: TXT } },
  { text: "Der Fortschritt liegt nur lokal im Browser. Jeder hat seinen eigenen, niemand sieht die Ergebnisse anderer.", options: { color: TXT_M } }
], {
  x: 1.0, y: 4.82, w: 5.48, h: 0.44,
  fontSize: 8.5, fontFace: B_FONT, valign: "middle", margin: 0, lineSpacingMultiple: 1.05
});

/* ---------- Fußnote in der Zugangskarte ---------- */
s.addShape(pres.shapes.RECTANGLE, {
  x: 7.18, y: 4.78, w: 2.11, h: 0.008,
  fill: { color: PANEL_2 }, line: { color: PANEL_2 }
});
s.addText("Inoffiziell, kein Microsoft-Produkt. Keine echten Prüfungsfragen. Quelle: Study Guides vom 22.07.2026.", {
  x: 7.18, y: 4.85, w: 2.11, h: 0.36,
  fontSize: 7, color: TXT_S, fontFace: B_FONT,
  align: "center", valign: "top", margin: 0, lineSpacingMultiple: 1.05
});

pres.writeFile({ fileName: process.argv[2] || "AI-Cert-Trainer.pptx" })
  .then(f => console.log("erstellt:", f));
