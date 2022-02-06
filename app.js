
function getRows() {
    // create empty 2d array to hold our rows
    let rows = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]

    // save the rows of the table as tableRows
    let tableRows = $('#board').find('tbody').children()

    //initialize variable to track the y-index (the row number as displayed) 
    let y = 0;

    // iterate through each row in tableRows
    for(row of tableRows){
        // console.log(row)

        // save the individual td's as a variable cols
        let cols = row.children
        // console.log(cols)

        //initialize a variable to track the x-index (the column number as displayed)
        let x =0;

        // iterate through each column in cols
        for(col of cols){
            // console.log(col)

            // if(!col.innerHTML){
            //     rows[y][x] = null;
            //     continue;
            // }
            // save the column's inner html as data in rows[row number][column number]
            rows[y][x] = Number(col.innerHTML)

            // increment x value each time we iterate through one column
            x++;
        }

        // increment y value each time we iterate through one row
        y++
    }

    return rows;
}

function getCols() {
    let cols = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]

    let tableRows = $('#board').find('tbody').children()
    let x = 0;
    for(row of tableRows){
        // console.log(row)
        let tableCols = row.children
        // console.log(cols)
        let y = 0;
        for(col of tableCols){
            // console.log(col)
            cols[y][x] = Number(col.innerHTML)
            // console.log(cols[y][x])
            y++;
        }

        // console.log(cols[x])
        x++
    }

    return cols;
}

function getSquares() {
    /*create variable squares to store squares as vector values
        since they work the same as rows and columns, there is no need to represent their visual two dimensionality in the data structure itself
    */
    let boxes = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]
    // console.log(boxes)

    let tableRows = getRows();
    let it = 0;
    // console.log(tableRows)
    for(row of tableRows){
        let itLower = Math.floor(it/3);
        let itHigher = it%3;
        // console.log(row)
        let firstThree = row.slice(0,3);
        let nextThree = row.slice(3,6);
        let lastThree = row.slice(6);
        for(num of firstThree){
            boxes[itLower*3].push(num)
        }
        for(num of nextThree){
        boxes[itLower*3+1].push(num)
        }

        for(num of lastThree){
        boxes[itLower*3+2].push(num)
        }

        

        it++;
    }

    return boxes;
}

function getPossibilities() {
    let possibilites = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]

    let tableRows = getRows();
    let tableCols = getCols();
    let tableSquares = getSquares();
    console.log(tableRows)
    let y = 0;
    for(row of tableRows){
        let x = 0;
        for(col of row){
            if(col){
                possibilites[y][x] = col;
            }
            else {
                // TODO: check for all the possible numbers that could occupy this cell
                for(let i = 1; i<10; i++){
                    let tempRows = tableRows;
                    let tempCols = tableCols;
                    tempRows[y][x] = i;
                    tempCols[y][x] = i;
                    if(!checkForRepeats(tempRows) && !checkForRepeats(tempCols)){
                        if(possibilites[y][x]){
                            possibilites[y][x].push(i);
                        }
                    }
                }

            }
            x++;
        }
    y++;
    }

    return possibilites;
}

/* checks a grouping for a repeat value
    if one is found, returns true
    else returns false
    @param inp the two-dimensional array input to check
*/
function checkForRepeats(inp) {

    // iterates through one dimension of the parameter inp
    for(dimension of inp){
        let tracker = []
        for(cell of dimension){
            /* checks to see if the row already contains this value
                if yes, returns true
                if no, adds cell to tracker for next iteration through this dimension
            */
            if(!cell){
                continue;
            }
            else if(tracker.includes(cell)){
                return true;
            } else if(cell !== undefined && cell !== null) {
                tracker.push(cell);
            }
        }
    }

    return false;
}


$(document).ready(function() {

    $('#checkTable').click(function(e) {
        e.preventDefault();


        let rows = getRows();
        let cols = getCols();
        let squares = getSquares();
        console.log(rows);
        console.log(cols);
        console.log(squares);
        console.log(checkForRepeats(rows));
        console.log(checkForRepeats(cols));
        console.log(checkForRepeats(squares));
        
    })

    $('#getPossibilities').click(function(e) {
        e.preventDefault();

        console.log(getPossibilities())
    })
})