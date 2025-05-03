var reorderList = function(head) {
  if (!head) return;

  // Step 1: Find the middle of the list
  let slow = head, fast = head;
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }

  // Step 2: Reverse the second half of the list
  let second = slow.next;
  slow.next = null;
  let node = null;

  while (second) {
      const temp = second.next;
      second.next = node;
      node = second;
      second = temp;
  }

  // Step 3: Merge the two halves
  let first = head;
  second = node;

  while (second) {
      const temp1 = first.next, temp2 = second.next;
      first.next = second;
      second.next = temp1;
      first = temp1;
      second = temp2;
  }    
};