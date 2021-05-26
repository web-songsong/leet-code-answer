

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2, num = 0) {
  if (!l1 && !l2) {
    if (num) return new ListNode(num)
    else return null
  }
  let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + num
  return new ListNode(sum % 10, addTwoNumbers(l1?l1.next:null, l2?l2.next:null, ~~(sum / 10)))
};



let l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
let l2 = new ListNode(9, new ListNode(9, new ListNode(9)))

console.log(l1, l2);

console.log(
  '--------------\n',
  JSON.stringify(addTwoNumbers(l1, l2)), '\n',
  '--------------'
);


// 链表相加递归传值
