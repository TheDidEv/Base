//Queues work in a very similar way to stacks, but elements follow a 
//different pattern for add and removal. Queues allow only a FIFO pattern
//In queues, elements can't be added or removed out of order, they always have to follow the FIFO pattern.

class Queue {
    constructor() {
        this.items = [];
        this.frontIndex = 0;
        this.backIndex = 0;
    }

    //Add to queue
    enqueue(item) {
        this.items[this.backIndex] = item;
        this.backIndex++;
        return item + ' insert';
    }
    //remove from queue
    dequeue() {
        const item = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        return item + ' delet';
    }
    //show first item in queue
    peek() {
        return this.items[this.frontIndex];
    }
    //show all queues
    get printQueue() {
        return this.items;
    }
}

const queue = new Queue();

/*
    output:
    1insert
    2insert
    3insert
    4insert
*/
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));

let str1 = queue.printQueue;
console.log(str1);//output: 1 2 3 4

console.log(queue.dequeue());//output: 1 delet

console.log(queue.peek());//output: 2

let str2 = queue.printQueue;
console.log(str2);//output: 2 3 4