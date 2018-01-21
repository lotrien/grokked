/**
 * Breadth-first search (BFS) is an algorithm for traversing or searching tree
 * or graph data structures. It starts at the tree root (or some arbitrary node
 * of a graph) and explores the neighbor nodes first, before moving to the next
 * level neighbours.
 * 
 * @param {*} startPoint - graph node to start search from
 * @param {function} predicate - checks whether current node is the target node
 * (@returns {boolean})
 */
function bfs(startPoint, predicate) {
  let queue = [...startPoint.refs];
  let searched = new Set();

  while (queue.length) {
    const node = queue.shift();

    if (!searched.has(node)) {
      if (predicate(node)) {
        return node;
      }

      queue = [...queue, ...node.refs];
      searched.add(node);
    }
  }

  return null;
}

module.exports = { bfs };
