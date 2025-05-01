class Solution {
  /**
   * @param {Interval[]} intervals
   * @returns {number}
   */
  minMeetingRooms(intervals) {
    intervals.sort((a, b) => a.start - b.start);
    const minHeap = new MinPriorityQueue();
    for (const interval of intervals) {
      if (!minHeap.isEmpty() && minHeap.front() <= interval.start) {
        minHeap.pop();
      }
      minHeap.push(interval.end);
    }
    return minHeap.size();
  }
}
