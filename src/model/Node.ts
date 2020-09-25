export type TreePath = ("L" | "R")[];

export class Node<T> {
  data: T | null;
  left: Node<T> | null;
  right: Node<T> | null;

  constructor(data?: T) {
    this.data = data ?? null;
    this.left = null;
    this.right = null;
  }

  private selectChild(path: "L" | "R"): Node<T> | undefined {
    const selectedChild = path === "L" ? this.left : this.right;
    return selectedChild ?? undefined;
  }

  private *dfsWithPath(path: TreePath): Generator<[Node<T>, TreePath], void> {
    yield [this, path];
    if (this.left !== null) {
      yield* this.left.dfsWithPath([...path, "L"]);
    }
    if (this.right !== null) {
      yield* this.right.dfsWithPath([...path, "R"]);
    }
  }

  *dfs(): Generator<[Node<T>, TreePath], void> {
    yield* this.dfsWithPath([]);
  }

  get(path: TreePath): Node<T> | undefined {
    if (path.length === 0) {
      return this;
    }
    const [childPath, ...subPath] = path;
    const currentChild = this.selectChild(childPath);
    return currentChild?.get(subPath);
  }
}

function createTree<T>(depth: number, initWith?: T): Node<T> {
  const initData =
    typeof initWith === "object" && initWith != null
      ? { ...initWith }
      : initWith;
  const newNode = new Node(initData);
  if (depth > 0) {
    newNode.left = createTree(depth - 1, initWith);
    newNode.right = createTree(depth - 1, initWith);
  }
  return newNode;
}

export { createTree };
