#!/usr/bin/env python3
"""Erzeugt die App-Icons (crimson Sparkle) ohne externe Abhaengigkeiten."""
import zlib, struct, math, os

OUT = os.path.dirname(os.path.abspath(__file__))
SS = 3  # Supersampling


def write_png(path, w, h, rows):
    raw = b"".join(b"\x00" + r for r in rows)
    comp = zlib.compress(raw, 9)

    def chunk(tag, data):
        return (struct.pack(">I", len(data)) + tag + data +
                struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF))

    hdr = struct.pack(">IIBBBBB", w, h, 8, 6, 0, 0, 0)
    with open(path, "wb") as f:
        f.write(b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", hdr) +
                chunk(b"IDAT", comp) + chunk(b"IEND", b""))


def astroid(px, py, cx, cy, r):
    """Vierzackiger Stern (Astroide) - die klassische AI-Sparkle-Form."""
    dx, dy = abs(px - cx) / r, abs(py - cy) / r
    if dx > 1 or dy > 1:
        return False
    return dx ** (2.0 / 3.0) + dy ** (2.0 / 3.0) <= 1.0


def rounded(px, py, size, rad):
    if rad <= 0:
        return True
    for cx, cy in ((rad, rad), (size - rad, rad), (rad, size - rad), (size - rad, size - rad)):
        inx = (px < rad) if cx == rad else (px > size - rad)
        iny = (py < rad) if cy == rad else (py > size - rad)
        if inx and iny:
            return (px - cx) ** 2 + (py - cy) ** 2 <= rad * rad
    return True


def build(size, radius_frac):
    rad = size * radius_frac
    rows = []
    big_r = size * 0.335
    sm_r = size * 0.115
    sm_cx, sm_cy = size * 0.745, size * 0.255
    for y in range(size):
        row = bytearray()
        for x in range(size):
            acc_bg = acc_fg = 0
            for sy in range(SS):
                for sx in range(SS):
                    px = x + (sx + 0.5) / SS
                    py = y + (sy + 0.5) / SS
                    if not rounded(px, py, size, rad):
                        continue
                    acc_bg += 1
                    if astroid(px, py, size * 0.455, size * 0.545, big_r) or \
                       astroid(px, py, sm_cx, sm_cy, sm_r):
                        acc_fg += 1
            n = SS * SS
            if acc_bg == 0:
                row += bytes((0, 0, 0, 0))
                continue
            t = y / max(1, size - 1)
            br = int(177 - 36 * t)
            bg = int(31 - 9 * t)
            bb = int(75 - 15 * t)
            fg = acc_fg / n
            a = int(255 * (acc_bg / n))
            r = int(br + (255 - br) * fg)
            g = int(bg + (255 - bg) * fg)
            b = int(bb + (255 - bb) * fg)
            row += bytes((r, g, b, a))
        rows.append(bytes(row))
    return rows


for size, frac, name in ((180, 0.0, "icon-180.png"),
                         (192, 0.22, "icon-192.png"),
                         (512, 0.22, "icon-512.png")):
    write_png(os.path.join(OUT, name), size, size, build(size, frac))
    print("wrote", name)
