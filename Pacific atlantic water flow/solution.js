function pacificAtlantic(heights) {
  const rows = heights.length;
  const cols = heights[0].length;

  const pacific = Array.from({ length: rows }, () => new Array(cols).fill(false));
  const atlantic = Array.from({ length: rows }, () => new Array(cols).fill(false));

  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  function dfs(r, c, visited, prevHeight) {
      // boundary + already visited + can't flow uphill
      if (
          r < 0 || c < 0 || r >= rows || c >= cols ||
          visited[r][c] || heights[r][c] < prevHeight
      ) return;

      visited[r][c] = true;

      for (const [dr, dc] of directions) {
          dfs(r + dr, c + dc, visited, heights[r][c]);
      }
  }

  // Start DFS from Pacific Ocean (top row and left column)
  for (let c = 0; c < cols; c++) {
      dfs(0, c, pacific, heights[0][c]);         // top edge
      dfs(rows - 1, c, atlantic, heights[rows - 1][c]); // bottom edge
  }

  for (let r = 0; r < rows; r++) {
      dfs(r, 0, pacific, heights[r][0]);         // left edge
      dfs(r, cols - 1, atlantic, heights[r][cols - 1]); // right edge
  }

  const result = [];

  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          if (pacific[r][c] && atlantic[r][c]) {
              result.push([r, c]);
          }
      }
  }

  return result;
}