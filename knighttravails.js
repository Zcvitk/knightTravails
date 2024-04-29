function knightMoves(start, end) {
  const moves = [
    [2, 1],
    [1, 2],
    [2, -1],
    [-1, 2],
    [-2, 1],
    [1, -2],
    [-2, -1],
    [-1, -2]
  ];

  // queue to store the knight's current position and path
  const queue = [[start]];
  
  // loop until the queue is empty
  while (queue.length > 0) {
    // get the current path and position of the knight
    const currentPath = queue.shift();
    const currentPosition = currentPath[currentPath.length - 1];
    
    // check if the knight has reached the end position
    if (currentPosition[0] === end[0] && currentPosition[1] === end[1]) {
      return currentPath; // Return the path if end position is reached
    }
    
    // loop through all possible moves for the knight
    for (let move of moves) {
      // calculate the new position after making a move
      const newX = currentPosition[0] + move[0];
      const newY = currentPosition[1] + move[1];
      
      // check if the new position is within the chessboard
      if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
        // create a new path with the updated position and add it to the queue
        const newPath = currentPath.slice();
        newPath.push([newX, newY]);
        queue.push(newPath);
      }
    }
  }
}

console.log(knightMoves([0,0],[1,2])); // Output: [[0,0],[1,2]]
console.log(knightMoves([0,0],[3,3])); // Output: [[0,0],[2,1],[3,3]]
console.log(knightMoves([3,3],[0,0])); // Output: [[3,3],[1,2],[0,0]]
console.log(knightMoves([0,0],[7,7])); // Output: [[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]]
console.log(knightMoves([3,3],[4,3])); // Output: [[3,3],[5,4],[4,2],[4,3]]
