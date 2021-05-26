

export const rows = (rowsNumber = 0, draw = []) => rowsNumber
  ? rows(rowsNumber - 1, [...draw, buildRow(draw[draw.length - 1])])
  : draw;

const buildRow = (last = []) => Array.from(
  Array(last.length + 1),
  (_, i) => last[i - 1] + last[i] || 1
);

