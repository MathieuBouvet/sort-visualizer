import { Node, createTree } from "./Node";

function getTestTree(): Node<{ name: string }> {
  const root = new Node({ name: "root" });
  const node1 = new Node({ name: "node1" });
  const node2 = new Node({ name: "node2" });
  const node3 = new Node({ name: "node3" });
  const node4 = new Node({ name: "node4" });
  const node5 = new Node({ name: "node5" });
  const node6 = new Node({ name: "node6" });

  root.left = node1;
  root.right = node2;
  node1.left = node4;
  node2.left = node5;
  node2.right = node3;
  node4.right = node6;

  return root;
  /*
                        root
              node1              node2
        node4               node5     node3
            node6

  */
}

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
    [{ left: node1, right: node2, data: { name: "root" } }, []],
    [{ left: null, right: null, data: { name: "node 1" } }, ["L"]],
    [{ left: null, right: node3, data: { name: "node 2" } }, ["R"]],
    [{ left: null, right: null, data: { name: "node 3" } }, ["R", "R"]],
  ]);
});

test.each<[string, ("L" | "R")[], string]>([
  ["get a node from a path", ["L", "L"], "node4"],
  ["get a node from a path", ["R", "L"], "node5"],
  ["get a node from a path", ["R"], "node2"],
  ["get a node from a path", ["L", "L", "R"], "node6"],
  ["get the root", [], "root"],
])("%s", (_, path, expectedNodeName) => {
  const testTree = getTestTree();
  const searchedNode = testTree.get(path);
  expect(searchedNode?.data?.name).toBe(expectedNodeName);
});

test("find a non-existing path", () => {
  const testTree = getTestTree();
  expect(testTree.get(["R", "R", "R"])).toBeUndefined();
});

test.each([
  [
    "a tree of depth 2 initialized with 42",
    2,
    42,
    [42, 42, 42, 42, 42, 42, 42],
  ],
  ["a tree of depth 0 initialized with 42", 0, 42, [42]],
  ["a tree of depth 1 initialized with 42", 1, 42, [42, 42, 42]],
  ["a tree with a depth less than 0", -54, 42, [42]],
  [
    "a tree of depth 3 not initialized",
    3,
    null,
    [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
  ],
])("creation of %s", (_, depth, initWith, expected) => {
  const tree = createTree(depth, initWith);
  const dfsArray = Array.from(tree.dfs(), ([node]) => node.data);
  expect(dfsArray).toEqual(expected);
});
