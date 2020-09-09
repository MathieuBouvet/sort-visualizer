export class Node<T> {
  key: number;
  data: T | null;
  left: Node<T> | null;
  right: Node<T> | null;

  constructor(key: number, data?: T) {
    this.key = key;
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
}
