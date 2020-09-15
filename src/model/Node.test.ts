import { Node } from "./Node";

test("Node instantiation", () => {
  let node = new Node();
  expect(node).toEqual({
    left: null,
    right: null,
    data: null,
  });

  const node2 = new Node({ test: 42 });
  expect(node2).toEqual({
    left: null,
    right: null,
    data: { test: 42 },
  });
});

test("Depth first search", () => {
  const root = new Node({ name: "root" });
  const node1 = new Node({ name: "node 1" });
  const node2 = new Node({ name: "node 2" });
  const node3 = new Node({ name: "node 3" });

  root.left = node1;
  root.right = node2;
  node2.right = node3;

  const depthArray = [...root.dfs()];

  expect(depthArray).toEqual([
    { left: node1, right: node2, data: { name: "root" } },
    { left: null, right: null, data: { name: "node 1" } },
    { left: null, right: node3, data: { name: "node 2" } },
    { left: null, right: null, data: { name: "node 3" } },
  ]);
});
