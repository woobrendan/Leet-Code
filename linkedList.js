class ListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }
}

const node1 = new ListNode(2);
const node2 = new ListNode(5);
node1.next = node2

let list = new LinkedList(node1)

console.log(list)

function LinkedList2() {
  let length = 0;
  let head = null;

  const Node = function(data) {
    this.data = data;
    this.next = null;
  }

  this.size = function() {
    return length;
  }

  this.head = function() {
    return head;
  }

  this.add = function(data) {
    let node = new Node(data);
    //if theres no nodes, then make head this node
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;

      //until next node is null, traverse through list
      while(currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  }
}