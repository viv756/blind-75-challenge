var maxStarSum = function (vals, edges, k) {
  let maxSum = -Infinity;

  let adjList = new Map();

  for (let [a, b] of edges) {
      if (!adjList.has(a)) adjList.set(a, []);
      if (!adjList.has(b)) adjList.set(b, []);

      adjList.get(a).push(vals[b]);
      adjList.get(b).push(vals[a]);
  }

  for (let i = 0; i < vals.length; i++) {
      let neighbours = adjList.get(i) || [];

      neighbours.sort((a, b) => b - a);
      let sum = vals[i];

      for (let j = 0; j < Math.min(k, neighbours.length); j++) {
          if (neighbours[j] > 0) sum += neighbours[j];
      }

      maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
};