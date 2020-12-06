// 5. Sorting a linked list using merge sort
// Given a Linked List, sort the linked list using merge sort. You will need your linked list class from previous lesson to create the list and use all of its supplemental functions to solve this problem.

let LinkedList = require('./linkedlist');


// This is a repeat exercise from the linked list checkpoint, exercise 9
let list3 = new LinkedList;
list3.insertFirst(18);
list3.insertFirst(2);
list3.insertFirst(4);
list3.insertFirst(5);
list3.insertFirst(3);
list3.insertFirst(1);

function findMiddleFromNode(node) {
    if (node === null) return null;
    let fast = node;
    let slow = node;
    while(fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    // If there are two middle values, this will return the second of them.
    return slow;
}

function sortList(list) {
    list.head =  sort(list.head);
    return list;
}

function sort(node) {
    // Get the middle and split into halves
    let middle = findMiddleFromNode(node);
    if (middle === null || middle.next === null) return middle;
    let lastHalf = sort(middle.next);
    middle.next = null;
    let firstHalf = sort(node);
    return mergeList(firstHalf, lastHalf);
}

function mergeList(node1, node2) {
    // Will only merge 2 sorted lists
    // Find the head (first value)
    let list = new LinkedList;
    if (node1.value < node2.value) {
        list.head = node1;
        node1 = node1.next
    } else {
        list.head = node2;
        node2 = node2.next;
    }

    let curr = list.head;
    // While both lists have items, pick the smallest to come next
    while(node1 !== null && node2 !== null) {
        if(node1.value < node2.value) {
            curr.next = node1;
            node1 = node1.next;
        } else if(node1.value > node2.value) {
            curr.next = node2;
            node2 = node2.next;
        }
        curr = curr.next;
    }
    
    // Add remaining items from the other list
    if (node1 !== null) curr.next = node1;
    if (node2 !== null) curr.next = node2;
    return list.head;
}

sortList(list3).print();