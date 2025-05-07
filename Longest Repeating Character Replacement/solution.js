
var characterReplacement = function (s, k) {
  let left = 0;
  let maxFreq = 0;
  let maxLength = 0;
  let freqMap = {}; // hashtable

  for (let right = 0; right < s.length; right++) {
      freqMap[s[right]] = (freqMap[s[right]] || 0) + 1;

      maxFreq = Math.max(maxFreq, freqMap[s[right]]);

      if ((right - left) + 1 - maxFreq > k) { // more than k changes scenario
          freqMap[s[left]]--;
          left++;
      }

      maxLength = Math.max(maxLength, (right - left) + 1);
  }
  return maxLength;
}