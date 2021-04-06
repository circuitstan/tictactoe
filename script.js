const gameBoard = (() => {
    let selections = ["X", "0", "X", "0", "X", "0", "X", "0", "X"]
    //let selections = []
    return {
        selections
    }
})()

const displayController = (() => {
    let mark = gameBoard.selections
    for (let i = 0; i < mark.length; i++) {
        let div = document.getElementById(i)        
        div.innerText = mark[i]
    }
    addEventListener('click', (e) => {
        console.log(e)
        })
})()

const player = (marker) => {
    
    return {
        marker
    }
}

const player1 = player("X")
const player2 = player("0")
