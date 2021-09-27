// inicar variáveis
let board = new Array(9).fill('')
let playerTime = firstPlayer()
let time = 0
let gameOver = false
// 0 / x = 🌑; 1 / o = 🌕; 
let symbols = ['x', 'o']


// functions
function firstPlayer() {
  const player = Math.floor(Math.random() * 2)
  return player
}

function handleMove(position) {
  if (gameOver) return null


  if (board[position] == '') {
    board[position] = symbols[playerTime]

    if (!gameOver) {
      playerTime == 0 ? playerTime = 1 : playerTime = 0
      time++
    }
  }
}

function resetGame() {
  board = new Array(9).fill('')
  playerTime = firstPlayer()
  time = 0
  gameOver = false

  updateAllGame()
}
