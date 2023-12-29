type QNode<T> = {
    value: T;
    next?: QNode<T>;
};

export default class Queue<T> {
    public length: number;
    private head: QNode<T> | undefined;
    private tail: QNode<T> | undefined;

    constructor() {
        this.length = 0;
    }

    enqueue(item: T): void {
        if (this.length === 0) {
            this.head = { value: item };
            this.tail = this.head;
        } else if (this.tail) {
            let temp_tail = this.tail;
            this.tail = { value: item };
            temp_tail.next = this.tail;
        }
        this.length++;
    }
    deque(): T | undefined {
        if (this.length == 0) {
            return undefined;
        }
        if (this.head?.next) {
            this.head = this.head.next;
        } else {
            this.head = undefined;
        }
        this.length--;
        return this.head?.value;
    }
    peek(): T | undefined {
        if (this.length == 0) {
            return undefined;
        }
        return this.head?.value;
    }
}
