import cssGridForTree from "./cssGridForTree";

test("grid for a tree of depth 4", () => {
  const gridHelper = cssGridForTree(3);
  expect(gridHelper).toEqual({
    columns: "repeat(1fr, 8)",
    rows: "repeat(1fr, 3)",
    areas:
      '"H H H H H H H H" "L L L L R R R R" "LL LL LR LR RL RL RR RR" "LLL LLR LRL LRR RLL RLR RRL RRR"',
  });
});
