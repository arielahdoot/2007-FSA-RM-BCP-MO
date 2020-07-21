
let grid = [
    [11, 12, 13],
    [21, 22, 23],
    [31, 32, 33],
  ];
  console.log(grid);
  // row
  // console.log(grid[1])
  // columns -> the second index doesn't change
  // console.log([grid[0][2], grid[1][2], grid[2][2]])
  
  // const firstColumn = [];
  // for (let rowNumber = 0; rowNumber < grid.length; rowNumber++){
  //   const elem = grid[rowNumber][0];
  //   firstColumn.push(elem)
  // }
  // console.log(firstColumn);
  
  function giveMeColumn(twoDimArr, columnIdx) {
    const column = [];
  
    for (let i = 0; i < twoDimArr.length; i++){
      const row = twoDimArr[i];
      const elem = row[columnIdx];
      column.push(elem);
    }
  
    return column;
  }
  
  const thirdColumn = giveMeColumn(grid, 2);
  console.log("third columns", thirdColumn);
  
