const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;}

    append(data) {
        var node = new Node(data);

        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }

        this.length++;

        return this;
    }

    head() {
        if (this._head === null) {
            return null;
        }
        return this._head.data
    }

    tail() {
        if (this._tail === null) {
            return null;
        }
        return this._tail.data
    }

    at(index) {
        var list = this._head,
        length = this.length,
        count = 0,
        message = {failure: 'Failure: non-existent node in this list.'};

        if (length === 0 || index < 0 || index > length) {
            throw new Error(message.failure);
        }

        while (count < index) {
            list = list.next;
            count++;
        }

        return list.data;
    }

    insertAt(index, data) {
        if (index === 0) {
            this.append(data);
            return this;
        }
        var node = new Node(data);
        var list = this._head,
            length = this.length,
            count = 1,
            message = {failure: 'Failure: non-existent node in this list.'};
        if (length === 0 || index < 0 || index > length) {
            throw new Error(message.failure);
        }
        while (count < index) {
            list = list.next;
            count++;
        }

           node.next=list.next;
           list.next=node;
           this.length++;
        return this;
    }

    isEmpty() {
        if (this.length===0) return true;
        else return false;
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        return this;
    }

    deleteAt(index) {
        if (index === 0 && this.length===1) {
            this.length = 0;
            this._head = null;
            this._tail = null;
            return this;
        }
        var list = this._head,
            length = this.length,
            count = 1,
            message = {failure: 'Failure: non-existent node in this list.'};
        if (length === 0 || index < 0 || index > length) {
            throw new Error(message.failure);
        }
        while (count < index) {
            list = list.next;
            count++;
        }
        var del = list;
        list=del.prev;
        list.next=del.next;
        this.length--;
        return this;
    }

    reverse() {
        var node = new Node(),
           temp = new Node();

        this._tail = node = this._head;

        while (node) {
            temp = node.prev;
            node.prev = node.next;
            node.next = temp;
            node = node.prev;
        }

        if (temp)
            this._head = temp.prev;

        return this;
    }

    indexOf(data) {
        var Node = this._head;

        for (var i = 0; i < this.length; i++) {
            if (Node.data === data)
                return i;
            Node = Node.next;
        }
        return -1;
    }
}
module.exports = LinkedList;