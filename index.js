let homePointCount = document.getElementById("home-point-count")
//console.log(homePointCount)
let guestPointCount = document.getElementById("guest-point-count")
//console.log(guestPointCount)


let homeCount = 0
let guestCount = 0
//console.log(count)

function oneHomePoint() {
    homeCount += 1
    homePointCount.textContent = homeCount
}

function twoHomePoint() {
    homeCount += 2
    homePointCount.textContent = homeCount
}

function threeHomePoint() {
    homeCount += 3
    homePointCount.textContent = homeCount
}

function oneGuestPoint(){
    guestCount += 1
    guestPointCount.textContent = guestCount
}

function twoGuestPoint(){
    guestCount += 2
    guestPointCount.textContent = guestCount
}

function threeGuestPoint(){
    guestCount += 3
    guestPointCount.textContent = guestCount
}

function gameReset() {
    homePointCount.textContent = 0
    guestPointCount.textContent = 0
    homeCount = 0
    guestCount = 0
    periodCount.textContent = 0
    periodPointCount = 0  
}

let periodCount = document.getElementById("period-count")
//console.log(periodCount)
let periodPointCount = 0

function currentPeriod() {
    periodPointCount += 1
    periodCount.textContent = periodPointCount
}