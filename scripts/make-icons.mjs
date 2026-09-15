// One-off script to generate placeholder square PNG icons (no external deps).
// Run: node scripts/make-icons.mjs
import { writeFileSync } from "node:fs";
import { deflateSync } from "node:zlib";

function crc32(buf) {
  let table = crc32.table;
  if (!table) {
    table = crc32.table = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      table[n] = c >>> 0;
    }
  }
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type, "ascii");
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function makePng(size, { bg, fg, mark }) {
  const raw = Buffer.alloc(size * (1 + size * 3));
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.22;
  for (let y = 0; y < size; y++) {
    const rowStart = y * (1 + size * 3);
    raw[rowStart] = 0; // filter type: none
    for (let x = 0; x < size; x++) {
      const dx = x - cx;
      const dy = y - cy;
      const inCircle = dx * dx + dy * dy <= r * r;
      const [r8, g8, b8] = inCircle && mark ? fg : bg;
      const off = rowStart + 1 + x * 3;
      raw[off] = r8;
      raw[off + 1] = g8;
      raw[off + 2] = b8;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type: truecolor
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const idat = deflateSync(raw);
  return Buffer.concat([
    sig,
    chunk("IHDR", ihdr),
    chunk("IDAT", idat),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

const bg = [79, 70, 229]; // indigo-600
const fg = [199, 210, 254]; // indigo-200

const sizes = [
  ["public/icons/icon-192.png", 192],
  ["public/icons/icon-512.png", 512],
  ["public/icons/apple-touch-icon.png", 180],
];

import { mkdirSync } from "node:fs";
mkdirSync("public/icons", { recursive: true });

for (const [path, size] of sizes) {
  writeFileSync(path, makePng(size, { bg, fg, mark: true }));
  console.log("wrote", path);
}
