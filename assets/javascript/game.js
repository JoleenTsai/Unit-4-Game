let total = 0
$('.total').text(total)
let goal = Math.floor(Math.random() * 100) + 30
$('.goal').text(goal)
let win = 0
$('.win').text(win)

const winScore = document.querySelector(".win")

function displayValues() {
    winScore.innerHTML = win;
}

for (let i = 1; i < 5; i++) {
    $('.crystalRow').append(`
    <div class="col-md-3">
        <img class= "crystal" id = "crystal${i}" data-crystal=${Math.floor(Math.random() * 20) + 1} src="./assets/images/crystal${i}.jpg" alt="crystal${i}">
    </div>
    `)
}
$('.crystal').on('click', function () {
    let crystalValue = $(this).attr('data-crystal')
    total += parseInt(crystalValue)
    $('.total').text(total)
    gameStatus()
})
function gameStatus() {
    if (goal === total) {
        win++
        $('#message').text(`Congratulations! You Win!`)
        setTimeout(function () {
            $('#message').text('Click on a Crystal to try and reach the total')
            reset()
        }, 1000)
    } else if (total > goal) {
        $('#message').text(`Dang! You Lost!`)
        setTimeout(function () {
            $('#message').text('Click on a Crystal to try and reach the total')
            reset()
        }, 1000)
    }
}
function reset() {
    $('#crystal1').attr('data-crystal', Math.floor(Math.random() * 20) + 1)
    $('#crystal2').attr('data-crystal', Math.floor(Math.random() * 20) + 1)
    $('#crystal3').attr('data-crystal', Math.floor(Math.random() * 20) + 1)
    $('#crystal4').attr('data-crystal', Math.floor(Math.random() * 20) + 1)
    total = 0
    $('.total').text(total)
    goal = Math.floor(Math.random() * 100) + 30
    $('.goal').text(goal)
    win = 0
    $('.win').text(win)
}