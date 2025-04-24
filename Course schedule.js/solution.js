function canFinish(numCourses, prerequisites) {
  const graph = new Map();
  const inDegree = new Array(numCourses).fill(0);

  // Build graph and in-degree array
  for (const [course, prereq] of prerequisites) {
    if (!graph.has(prereq)) graph.set(prereq, []);
    graph.get(prereq).push(course);
    inDegree[course]++;
  }

  // Queue for courses with no prerequisites
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  let finishedCourses = 0;

  while (queue.length > 0) {
    const current = queue.shift();
    finishedCourses++;

    const neighbors = graph.get(current) || [];
    for (const neighbor of neighbors) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  return finishedCourses === numCourses;
}
