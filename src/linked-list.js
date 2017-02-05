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
        count = 0;

        if (length === 0 || index < 0 || index > length) {
            throw new Error();
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
            count = 1;
        if (length === 0 || index < 0 || index > length) {
            throw new Error();
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
            count = 1;
        if (length === 0 || index < 0 || index > length) {
            throw new Error();
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

swap(){

}

    reverse() {
        var Node=this._head, temp;
        for(var i=0; i<this.length;i++)
        {
          temp=Node.next;
          Node.next=Node.prev;
          Node.prev=temp;

          Node=Node.prev;
        }

        temp=this._head;
        this._head=this._tail;
        this._tail=temp;

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
