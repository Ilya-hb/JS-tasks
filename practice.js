/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let curr = dummy;
  console.log(curr);

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      curr.next = list1;
      list1 = list1.next;
      curr = curr.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
      curr = curr.next;
    }
  }
  curr.next = list1 !== null ? list1 : list2;
  return dummy.next;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
// console.log(mergeTwoLists([], []));
