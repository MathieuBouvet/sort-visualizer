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

  *dfs(): Generator<Node<T>, void> {
    yield this;
    if (this.left !== null) {
      yield* this.left.dfs();
    }
    if (this.right !== null) {
      yield* this.right.dfs();
    }
  }

  find(path: TreePath): Node<T> {
    return this;
  }
}
