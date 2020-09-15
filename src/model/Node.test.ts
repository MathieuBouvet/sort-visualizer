import { Node } from "./Node";

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
    { left: node1, right: node2, data: { name: "root" } },
    { left: null, right: null, data: { name: "node 1" } },
    { left: null, right: node3, data: { name: "node 2" } },
    { left: null, right: null, data: { name: "node 3" } },
  ]);
});

test.each<[string, ("L" | "R")[], string]>([
  ["find a node from a path", ["L", "L"], "node4"],
  ["find the root", [], "root"],
])("%s", (_, path, expectedNodeName) => {
  const testTree = getTestTree();
  const searchedNode = testTree.find(path);
  expect(searchedNode?.data?.name).toBe(expectedNodeName);
});
