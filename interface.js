document.addEventListener('DOMContentLoaded', () => {
  let pieces = document.querySelectorAll('.piece')
  let player = document.querySelector('span#player')
  player.innerHTML = `Vez do jogador ${(symbols[playerTime]) == 'x' ? '🌑' : '🌕'}`

  pieces.forEach(element => {
    element.addEventListener('click', handleClick)
  })
})

// functions
function handleClick({target}) {
  console.log(symbols[playerTime])
  let position = target.id
  handleMove(position)
  updatePiece(position)
  verifyWinner()
}

function updatePiece(position) {
  let piece = document.getElementById(position.toString())
  let symbol = board[position]
  piece.innerHTML = `<div class='${symbol}'></div>`

  let player = document.querySelector('span#player')
  player.innerHTML = `Vez do jogador ${(symbols[playerTime]) == 'x' ? '🌑' : '🌕'}`
}

function verifyWinner() {
  let winner = ''

  const waysToWin = [
    // rows
    [board[0], board[1], board[2]],
    [board[3], board[4], board[5]],
    [board[6], board[7], board[8]],

    // columns
    [board[0], board[3], board[6]],
    [board[1], board[4], board[7]],
    [board[2], board[5], board[8]],

    // diagonals
    [board[0], board[4], board[8]],
    [board[2], board[4], board[6]]
  ]

  waysToWin.forEach(arr => {
    if (arr.every(n => n == 'x')) {
      winner = '🌑'
    }
    if (arr.every(n => n == 'o')) {
      winner = '🌕'
    }
  })

  if (winner) {
    let spanWinner = document.querySelector('span#winner')
    spanWinner.innerHTML = `${winner} ganhou!`
    gameOver = true

    resetDisplay()
  }

  checkTie()
}

function checkTie() {
  if (time == 9 && board.every(n => n != '')) {
    let spanWinner = document.querySelector('span#winner')
    spanWinner.innerHTML = 'Empate'
    gameOver = true

    resetDisplay()
  }
}

function updateAllGame() {
  let pieces = document.querySelectorAll('div.piece')
  pieces.forEach(element => {
    element.innerHTML = ''
  })

  defaultDisplay()
}

function resetDisplay() {
  let settings = document.querySelector('div#settings')
  settings.setAttribute('style', 'display: block')

  let pieces = document.querySelectorAll('div.piece')
  pieces.forEach(element => {
    element.style = 'cursor: not-allowed;'
  })
}

function defaultDisplay() {
  let settings = document.querySelector('div#settings')
  settings.setAttribute('style', 'display: none')

  let pieces = document.querySelectorAll('div.piece')
  pieces.forEach(element => {
    element.style = 'cursor: pointer'
  })

  let spanWinner = document.querySelector('span#winner')
  spanWinner.innerHTML = ''
}
