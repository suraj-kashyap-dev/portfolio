"use client";

import { useMemo } from "react";

type Cell = { id: number; col: number; row: number; delay: number; duration: number; tone: 1 | 2 | 3 };

function generateCells(count: number, cols: number, rows: number, seed: number): Cell[] {
  const rng = (n: number) => {
    const x = Math.sin(seed + n) * 10000;
    return x - Math.floor(x);
  };

  const used = new Set<string>();
  const out: Cell[] = [];
  let i = 0;
  let safety = 0;

  while (out.length < count && safety < count * 6) {
    safety += 1;
    const col = Math.floor(rng(i * 1.31) * cols);
    const row = Math.floor(rng(i * 2.77) * rows);
    const key = `${col}:${row}`;
    i += 1;

    if (used.has(key)) continue;
    used.add(key);

    const toneRng = rng(i * 4.13);
    const tone: 1 | 2 | 3 = toneRng < 0.5 ? 1 : toneRng < 0.85 ? 2 : 3;

    out.push({
      id: out.length,
      col,
      row,
      delay: rng(i * 7.7) * 8,
      duration: 5 + rng(i * 9.3) * 6,
      tone
    });
  }

  return out;
}

const CELL_SIZE = 60;
const COLS = 32;
const ROWS = 22;

export function BackgroundFX() {
  const cells = useMemo(() => generateCells(54, COLS, ROWS, 4242), []);

  return (
    <div className="bgfx" aria-hidden="true">
      <div className="bgfx-base" />
      <div className="bgfx-grid" />
      <div
        className="bgfx-cells"
        style={{
          gridTemplateColumns: `repeat(${COLS}, ${CELL_SIZE}px)`,
          gridTemplateRows: `repeat(${ROWS}, ${CELL_SIZE}px)`
        }}
      >
        {cells.map((c) => (
          <span
            key={c.id}
            className={`bgfx-cell bgfx-cell-${c.tone}`}
            style={{
              gridColumnStart: c.col + 1,
              gridRowStart: c.row + 1,
              animationDelay: `${c.delay}s`,
              animationDuration: `${c.duration}s`
            }}
          />
        ))}
      </div>
      <div className="bgfx-aurora bgfx-aurora-1" />
      <div className="bgfx-aurora bgfx-aurora-2" />
      <div className="bgfx-noise" />
      <div className="bgfx-vignette" />
    </div>
  );
}
