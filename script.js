function Node(data) {
    return {
        data: data,
        next: null
    };
}

function createLinkedList() {
    let head = null;
    let size = 0;

    return {
        // Add a new node at the end of the list
        append(data) {
            const node = Node(data);
            if (!head) {
                head = node;
            } else {
                let current = head;
                while (current.next) {
                    current = current.next;
                }
                current.next = node;
            }
            size++;
        },

        // Add a new node at the beginning of the list
        
        prepend(data) {
            const node = Node(data);
            if (!head) {
                head = node; 
            } else {
                node.next = head; 
                head = node;
            }
            size++;
        },

        // Get the size of the linked list
        getSize() {
            return size;
        },

        // Get the head node's data
        getHead() {
            return head ? head.data : null; 
        },

        // Get the tail node's data
        getTail() {
            if (!head) {
                return null;
            } else {
                let current = head;
                while (current.next) {
                    current = current.next;
                }
                return current.data;
            }
        },

        // Get the node at a specific index
        at(index) {
            if (index < 0 || index >= size) {
                return null;
            }
            let current = head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            return current.data;
        },

        // Get the index of a node with a specific value
        indexOf(data) {
            let current = head;
            let index = 0;
            while (current) {
                if (current.data === data) {
                    return index;
                }
                current = current.next;
                index++;
            }
            return -1;
        },

        // Remove a node at a specific index
        removeAt(index) {
            if (index < 0 || index >= size) {
                return null;
            }
            
            let current = head;
            if (index === 0) {
                head = head.next;
            } else {
                let previous;
                for (let i = 0; i < index; i++) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            size--;
            return current.data; 
        },

        // Print the linked list
        print() {
            let current = head;
            let result = '';
            while (current) {
                result += current.data + (current.next ? ' -> ' : '');
                current = current.next;
            }
            console.log(result);
        }
    };
}

// Example Usage
const list = createLinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.print();

// Output: 5 -> 10 -> 20

console.log("Size of the list:", list.getSize()); 
// Output: 3

console.log("Head of the list:", list.getHead());
// Output: 5

console.log("Tail of the list:", list.getTail());
// Output: 20

console.log("Element at index 1:", list.at(1));
// Output: 10

console.log("Index of 20:", list.indexOf(20));
// Output: 2

console.log("Removing element at index 1:", list.removeAt(1));
// Output: 10

list.print();
// Output: 5 -> 20

console.log("Size of the list after removal:", list.getSize());

// Output: 2
