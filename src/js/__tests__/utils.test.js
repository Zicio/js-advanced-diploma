import calcTileType from '../utils';

test.each([
  ['top-left', 0],
  ['top', 1],
  ['top-right', 2],
  ['left', 3],
  ['center', 4],
  ['right', 5],
  ['bottom-left', 6],
  ['bottom', 7],
  ['bottom-right', 8],
])(
  ('should draw the field correctly'),
  (coordinates, index) => {
    expect(calcTileType(index, 3)).toBe(coordinates);
  },
);
