// Matrix - Multi Dimesional Array

// Table - Grid - Co ordinates - Graphs

// Rows - X
// Columns - Y

// const table = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let row = 0; row < table.length; row++){
//     // console.log(table[row]);

//     for (let column = 0; column < table.length; column++){
//         // console.log(table[row][column]); // each row
//         console.log(table[column][row])
//     };
// };

const grid = [
    ["x", "0", "x"],
    ["x", "0", "x"],
    ["0", "x", "x"]
];

for (let row = 0; row < grid.length; row++){
    const rowString = grid[row].join(""); // "x0x"
    let columnString = "";
    for(let column = 0; column < grid.length; column++){
        columnString += grid[column][row] // "xx0"
    };
    console.log(row, rowString, columnString)
    if (rowString === "xxx" || columnString === "xxx"){
        console.log("x wins!");
        break;
    };
};


