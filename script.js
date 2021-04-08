const gameBoard = (() => {
    let selections = []
    return {
        selections
    }
})()

const displayController = (() => {
    let mark = gameBoard.selections
    const acceptableClicks = ['0','1','2','3','4','5','6','7','8']
    let diag1 = 0
    let diag2 = 0
    let row1 = 0
    let row2 = 0
    let row3 = 0
    let col1 = 0
    let col2 = 0
    let col3 = 0
    addEventListener('click', (e) => {
        let click = e.target.id
        if (mark.includes(click)) {
        } else  if (acceptableClicks.includes(click)) {
            mark.push(click)
            for (let i = 0; i < mark.length; i++) {
                let div = document.getElementById(click)            
                if (mark.length % 2 != 0) {
                    div.innerText = "X"
                } else {
                    div.innerText = "O"
                }
            }
            if (mark.length % 2 != 0) {
                if (click == '0') {
                    row1 += 1
                    col1++
                    diag1++
                } else if (click == '1') {
                    row1 += 1
                    col2++
                } else if (click == '2') {
                    row1 += 1
                    col3++
                    diag2++
                } else if (click == '3') {
                    row2++
                    col1++
                } else if (click == '4') {
                    row2++
                    col2++
                    diag1++
                    diag2++
                } else if (click == '5') {
                    row2++
                    col3++
                } else if (click == '6') {
                    row3++
                    col1++
                    diag2++
                } else if (click == '7') {
                    row3++
                    col2++
                } else if (click == '8') {
                    row3++
                    col3++
                    diag1++
                }
            } else {
                if (click == '0') {
                    row1--
                    col1--
                    diag1--
                } else if (click == '1') {
                    row1--
                    col2--
                } else if (click == '2') {
                    row1--
                    col3--
                    diag2--
                } else if (click == '3') {
                    row2--
                    col1--
                } else if (click == '4') {
                    row2--
                    col2--
                    diag1--
                    diag2--
                } else if (click == '5') {
                    row2--
                    col3--
                } else if (click == '6') {
                    row3--
                    col1--
                    diag2--
                } else if (click == '7') {
                    row3--
                    col2--
                } else if (click == '8') {
                    row3--
                    col3--
                    diag1--
                }
            }
            console.log(click)
            if ((row1 == 3) || (row2 == 3) || (row3 == 3) || (col1 == 3) || (col2 == 3) || (col3 == 3) || (diag1 == 3) || (diag2 == 3)) {
                alert("X wins")
            } else if ((row1 == -3) || (row2 == -3) || (row3 == -3) || (col1 == -3) || (col2 == -3) || (col3 == -3) || (diag1 == -3) || (diag2 == -3)) {
                alert("O wins")
            }
        }
        })
})()

const player = (marker) => {
    
    return {
        marker
    }
}

const player1 = player("X")
const player2 = player("0")
