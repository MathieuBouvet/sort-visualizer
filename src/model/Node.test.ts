import { Node } from "./Node";

test("Node instantiation", () => {
  let node = new Node(0);
  expect(node).toEqual({
    key: 0,
    left: null,
    right: null,
    data: null,
  });

  const node2 = new Node(0, { test: 42 });
  expect(node2).toEqual({
    key: 0,
    left: null,
    right: null,
    data: { test: 42 },
  });
});

test("Depth first search", () => {
  const root = new Node(0, { name: "root" });
  const node1 = new Node(1, { name: "node 1" });
  const node2 = new Node(2, { name: "node 2" });
  const node3 = new Node(3, { name: "node 3" });

  root.left = node1;
  root.right = node2;
  node2.right = node3;

  const depthArray = [...root.dfs()];

  expect(depthArray).toEqual([
    { key: 0, left: node1, right: node2, data: { name: "root" } },
    { key: 1, left: null, right: null, data: { name: "node 1" } },
    { key: 2, left: null, right: node3, data: { name: "node 2" } },
    { key: 3, left: null, right: null, data: { name: "node 3" } },
  ]);
});
