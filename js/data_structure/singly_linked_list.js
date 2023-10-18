class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(val) {
        let node = new Node(val);
        let current;

        if (this.head === null) {
            this.head = node;
        }
        else {
            current = this.head;

            //iteration to end of the list 
            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    insertAt(elem, index) {
        if (index < 0 || index > this.size) {
            return console.log("Not valid index");
        }
        else {
            let node = new Node(elem);
            let curr, prev;

            curr = this.head;

            //add elem to the first index
            if (index === 0) {
                node.next = this.head;
                this.head = node;
            }
            else {
                curr = this.head;
                let it = 0;

                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    deleteElem(elem) {
        let curr = this.head;
        let prev = null;

        while (curr != null) {
            if (curr.val === elem) {
                if (prev === null) {
                    this.head = curr.next;
                }
                else {
                    prev.next = curr.next;
                }
                this.size--;
                return curr.val;
            }
            prev = curr;
            curr = curr.next;
        }
        return -1;
    }

    printList() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.val + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}


const sll = new SinglyLinkedList();
sll.add(1121);
sll.add(1);
sll.add(2);
sll.add(3);

sll.printList();

sll.insertAt(54, 2);
sll.printList();

sll.deleteElem(54);
sll.printList();