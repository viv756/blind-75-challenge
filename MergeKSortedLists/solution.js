var mergeKLists = function(lists) {
  if (!lists || lists.length === 0) {
      return null;
  }

  while (lists.length > 1) {
      let temp = [];
      for (let i = 0; i < lists.length; i += 2) {
          let l1 = lists[i];
          let l2 = i + 1 < lists.length ? lists[i + 1] : null;
          temp.push(mergeLists(l1, l2));
      }
      lists = temp;
  }

  return lists[0];    
};

function mergeLists(l1, l2) {
  let node = new ListNode();
  let ans = node;

  while (l1 && l2) {
      if (l1.val > l2.val) {
          node.next = l2;
          l2 = l2.next;
      } else {
          node.next = l1;
          l1 = l1.next;
      }
      node = node.next;
  }

  node.next = l1 ? l1 : l2;
  return ans.next;
}