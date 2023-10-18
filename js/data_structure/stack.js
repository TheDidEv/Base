//Stacks are useful when we need to make sure elements follow the LIFO

//The big O of stack methods is the following:
//Insertion - O(1)
//Removal - O(1)
//Searching - O(n)

class Stack {
    constructor() {
        this.items = [];
    }
    //add elem to stack
    push(elem) {
        this.items.push(elem);
    }
    //remuv element from stack
    pop() {
        if (this.items.length == 0) {
            return "Stask is empty";
        }
        return this.items.pop();
    }
    //return the top elem from stack
    peek() {
        return this.items[this.items.length - 1];
    }
    //print all data from stack
    printStack() {
        var str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

let stack = new Stack();

console.log(stack.pop());//output: Stask is empty

stack.push(1);
stack.push(2);
stack.push(31);
stack.push(4);

console.log(stack.printStack());//output: 1 2 31 4
stack.pop();
console.log(stack.printStack());//output: 1 2 31

console.log(stack.peek());//output: 31
