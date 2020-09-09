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
