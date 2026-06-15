/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let queue=[]
    let m=grid.length
    let n=grid[0].length
    // first add all rotten oranges in queue
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if (grid[i][j] === 2) {
                queue.push([i, j, 0]);
            }
        }
    }

    // mard adj nodes as rotten oranges and push it in queue till its not empty
    let maxMinutes = 0;
    while (queue.length) {
        let [x, y, level] = queue.shift();

        if (x > 0 && grid[x - 1][y] === 1) {
            grid[x - 1][y] = 2;
            queue.push([x - 1, y, level + 1]);
        }
        if (x < m - 1 && grid[x + 1][y] === 1) {
            grid[x + 1][y] = 2;
            queue.push([x + 1, y, level + 1]);
        }
        if (y < n - 1 && grid[x][y + 1] === 1) {
            grid[x][y + 1] = 2;
            queue.push([x, y + 1, level + 1]);
        }
        if (y > 0 && grid[x][y - 1] === 1) {
            grid[x][y - 1] = 2;
            queue.push([x, y - 1, level + 1]);
        }
        maxMinutes = Math.max(level, maxMinutes);
    }

    // finally run over each element in check if any fresh is remaning  
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                return -1;
            }
        }
    }
    return maxMinutes;
};
// time complexity: O(m*n)
// space complexity: O(m*n) in worst case when all oranges are rotten and we have to push all of them in queue