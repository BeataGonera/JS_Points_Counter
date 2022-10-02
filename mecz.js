const displayerLeft = document.querySelector('.wyswietlacz-lewy')
const displayerRight = document.querySelector('.wyswietlacz-prawy')
const buttonTwoPointsRight = document.querySelector('.rzut-za-2-prawy')
const buttonThreePointsLeft = document.querySelector('.rzut-za-3-lewy')
const buttonTwoPointsLeft = document.querySelector('.rzut-za-2-lewy')
const buttonThreePointsRight = document.querySelector('.rzut-za-3-prawy')
const buttonDisplayScore = document.querySelector('.wyswietl-wynik')
const displayerScore = document.querySelector('.wyswietlacz-obok')
const addCommentTextArea = document.querySelector('#kom')
const addedCommentsTextArea = document.querySelector('.lista-komentarzy')
const buttonSaveComment = document.querySelector('.zapisz')
const buttonAddTeam = document.querySelector('.add-team-button')
const teamTable = document.querySelector('.team-table')

let generateAddPointsFunction = function(displayer, numberOfPoints){
    let addPointsFunction = function(){
        displayer.innerText = Number(displayer.innerText) + numberOfPoints
    }
    return addPointsFunction
}
let wynikFunkcji = generateAddPointsFunction(displayerRight, 2)

buttonTwoPointsRight.addEventListener('click', wynikFunkcji)

buttonThreePointsLeft.addEventListener('click', generateAddPointsFunction(displayerLeft, 3))

buttonTwoPointsLeft.addEventListener('click', generateAddPointsFunction(displayerLeft, 2))

buttonThreePointsRight.addEventListener('click', generateAddPointsFunction(displayerRight, 3))

let displayScore = function(){
    displayerScore.innerText = `${displayerLeft.innerText} : ${displayerRight.innerText}`
}

buttonDisplayScore.addEventListener('click', displayScore)

 let comments = []

const addComment = function(){
    comments.push(addCommentTextArea.value)
    let comments2 = comments.reverse().join('\n')
    localStorage.setItem('comments', comments2)
    addedCommentsTextArea.value = localStorage.getItem('comments')
}


buttonSaveComment.addEventListener('click', addComment)

let i = 0;
let teams = ['Easy', 'Medium', 'Hard']

let addTeam = function(){
    let newRow = teamTable.insertRow(i);
    let newCell = newRow.insertCell(0)
    let newCell2 = newRow.insertCell(1)
    teamTable.appendChild(newRow)
    newCell.innerHTML = i + 1
    newCell2.innerHTML = teams[Math.floor(Math.random() * teams.length)]
    i++
    return i
}

buttonAddTeam.addEventListener('click', addTeam)





