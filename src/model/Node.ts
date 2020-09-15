type TreePath = ("L" | "R")[];

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
    const selectedChid = path === "L" ? this.left : this.right;
    if (selectedChid === null) {
      return undefined;
    }
    return selectedChid;
  }

  *dfs(): Generator<Node<T>, void> {
    yield this;
    if (this.left !== null) {
      yield* this.left.dfs();
    }
    if (this.right !== null) {
      yield* this.right.dfs();
    }
  }

  find(path: TreePath): Node<T> | undefined {
    if (path.length === 0) {
      return this;
    }
    const [childPath, ...subPath] = path;
    const currentChild = this.selectChild(childPath);
    if (path.length === 1) {
      return currentChild;
    }
    return currentChild?.find(subPath);
  }
}
