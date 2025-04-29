function canAttendMeetings(intervals) {
  intervals.sort((a, b) => a.start - b.start);

  for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] < intervals[i - 1][1]) {
          return false;
      }
  }

  return true;
}