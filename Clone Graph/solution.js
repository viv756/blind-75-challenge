var cloneGraph = function(node) {
  if (!node) return null;
  const visited = new Map();

  const dfs = (node) => {
      if (visited.has(node)) return visited.get(node);

      const clone = new Node(node.val);
      visited.set(node, clone);

      for (let neighbor of node.neighbors) {
          clone.neighbors.push(dfs(neighbor));
      }

      return clone;
  };

  return dfs(node);
};