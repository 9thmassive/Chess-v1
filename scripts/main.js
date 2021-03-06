let boardColors = document.querySelectorAll('.step')
let eventStep = boardColors
boardColors = Array.from(boardColors)
let matrixBackGround = []
for (let i = 0; i <= 8; i++) {
    matrixBackGround.push(boardColors.splice(0, 8))
}

matrixBackGround.forEach((el, j) => {
    el.forEach((it, i) => {
        it.setAttribute('index', `${+j + 1}-${+i + 1}`)
        if (j % 2 == 0 && i % 2 != 0) {
            it.setAttribute('type', 'black')
            it.style.backgroundColor = '#0d9aa3'
        } else if (j % 2 !== 0 && i % 2 == 0) {
            it.setAttribute('type', 'black')
            it.style.backgroundColor = '#0d9aa3'
        } else {
            it.setAttribute('type', 'white')
        }

        let img = document.createElement('img')
        if (+j == 0) {
            if (+i == 0 || +i == 7) {
                it.appendChild(img)
                it.setAttribute('infugure', 'black_rook')
                img.src = 'img/black/black_rook.png'
            } else if (+i == 1 || +i == 6) {
                it.appendChild(img)
                it.setAttribute('infugure', 'black_knight')
                img.src = 'img/black/black_knight.png'
            } else if (+i == 2 || +i == 5) {
                it.appendChild(img)
                it.setAttribute('infugure', 'black_bishop')
                img.src = 'img/black/black_bishop.png'
            } else if (+i == 3) {
                it.appendChild(img)
                it.setAttribute('infugure', 'black_bishop')
                img.src = 'img/black/black_king.png'
            } else {
                it.appendChild(img)
                it.setAttribute('infugure', 'black_bishop')
                img.src = 'img/black/black_queen.png'
            }
        } else if (+j == 7) {
            if (+i == 0 || +i == 7) {
                it.appendChild(img)
                it.setAttribute('infugure', 'white_rook')
                img.src = 'img/white/white_rook.png'
            } else if (+i == 1 || +i == 6) {
                it.appendChild(img)
                it.setAttribute('infugure', 'white_knight')
                img.src = 'img/white/white_knight.png'
            } else if (+i == 2 || +i == 5) {
                it.appendChild(img)
                it.setAttribute('infugure', 'white_bishop')
                img.src = 'img/white/white_bishop.png'
            } else if (+i == 3) {
                it.appendChild(img)
                it.setAttribute('infugure', 'white_bishop')
                img.src = 'img/white/white_king.png'
            } else {
                it.appendChild(img)
                it.setAttribute('infugure', 'white_bishop')
                img.src = 'img/white/white_queen.png'
            }
        }
        if (+j == 1) {
            it.appendChild(img)
            it.setAttribute('infugure', 'black_pawn')
            img.src = 'img/black/black_pawn.png'
        } else if (+j == 6) {
            it.setAttribute('infugure', 'white_pawn')
            it.appendChild(img)
            img.src = 'img/white/white_pawn.png'
        }
    })
})

let selectedFigure
let moveFigure
eventStep.forEach((el, K) => {
    el.addEventListener('click', (e) => {
        if (el.innerHTML.includes('img')) {
            el.style.opacity = '0.9'
            el.setAttribute('selected', 'true')
            moveFigure = el.innerHTML
            el.innerHTML = 'test'
            console.log(el.innerHTML)
        }
        if (!el.innerHTML.includes('img')) {
            el.innerHTML = moveFigure
        }
    })
})

class Figure {
    constructor(color) {
        this.color = color
    }
    king = false
    castling = false
    allFigurs = [
        { bishop: 2 },
        { king: 1 },
        { knight: 2 },
        { pawn: 8 },
        { queen: 1 },
        { rook: 2 },
    ]
    winnFigurs = []
    lossFigure = []
}
let blackFigure = new Figure('black')
let whiteFigure = new Figure('white')
