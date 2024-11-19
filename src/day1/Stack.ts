export default class Stack<T> {
	public length: number;

	push(item: T): void {}
	pop(): T | undefined {}
	peek(): T | undefined {}
}
