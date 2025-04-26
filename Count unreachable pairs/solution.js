var countPairs = function(n, edges) {
  const graph = Array.from({ length: n }, () => []);
  
  // Build adjacency list
  for (const [a, b] of edges) {
      graph[a].push(b);
      graph[b].push(a);
  }
  
  const visited = new Array(n).fill(false);
  
  // DFS to count size of each connected component
  const dfs = (node) => {
      visited[node] = true;
      let size = 1;
      for (const neighbor of graph[node]) {
          if (!visited[neighbor]) {
              size += dfs(neighbor);
          }
      }
      return size;
  };

  let totalPairs = 0;
  let totalNodes = n;

  for (let i = 0; i < n; i++) {
      if (!visited[i]) {
          const componentSize = dfs(i);
          totalPairs += componentSize * (totalNodes - componentSize);
          totalNodes -= componentSize;
      }
  }

  return totalPairs;
};


// using unin find

var countPairs = function(n, edges) {
  // Step 1: Create Union Find
  const parent = Array.from({ length: n }, (_, i) => i);
  const size = Array(n).fill(1); // Size of each component

  const find = (x) => {
      if (parent[x] !== x) {
          parent[x] = find(parent[x]); // Path compression
      }
      return parent[x];
  };

  const union = (x, y) => {
      const rootX = find(x);
      const rootY = find(y);

      if (rootX === rootY) return; // Already connected

      // Union by size
      if (size[rootX] < size[rootY]) {
          parent[rootX] = rootY;
          size[rootY] += size[rootX];
      } else {
          parent[rootY] = rootX;
          size[rootX] += size[rootY];
      }
  };

  // Step 2: Connect nodes
  for (const [a, b] of edges) {
      union(a, b);
  }

  // Step 3: Count sizes of each connected component
  const count = new Map();
  for (let i = 0; i < n; i++) {
      const root = find(i);
      count.set(root, (count.get(root) || 0) + 1);
  }

  // Step 4: Calculate unreachable pairs
  let totalNodes = n;
  let result = 0;

  for (const sz of count.values()) {
      result += sz * (totalNodes - sz);
      totalNodes -= sz;
  }

  return result;
};
