/**
 * 双向链表
 */
function DoubleLinkedList() {
    function Node(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
    let head = new Node('head');
    let length = 0;
    return {
        init() {
            this.append('first');
            this.append('second');
            this.append('third');
        },
        append(data) {
            let node = new Node(data);
            let current = head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = node;
            node.prev = current;
            length++;
        },
        insert(prev, data) {
            let node = new Node(data);
            let current = head;
            while(current.data !== prev) {
                current = current.next;
            }
            node.next = current.next;
            current.next.prev = node
            node.prev = current;
            current.next = node;
            length++;
        },
        findByIndex(pos) {
            if(pos > length) {
                throw new Error('Error!Out of range');
            }
            let current = head;
            while(pos !== 0) {
                current = current.next;
                pos--;
            }
            return current;
        },
        find(data) {
            let current = head;
            while(current !== null) {
                if(current.data === data) {
                    return current;
                }else {
                    current = current.next;
                }
            }
            throw new Error('Error!Data not found');
        },
        delete(pos) {
            if(pos > length) {
                throw new Error('Error!Out of range');
            }
            let current = head;
            while(pos !== 1) {
                current = current.next;
                pos--;
            }
            current.next = current.next.next;
            length--;
        },
        size() {
            return length;
        },
        toString() {
            let current = head;
            let arr = [];
            while(current) {
                arr.push(current.data);
                current = current.next;
            }
            return arr;
        }
    }
}
