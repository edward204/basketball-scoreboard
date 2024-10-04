let leadingHome = document.getElementById("leading-home");
let leadingGuest = document.getElementById("leading-guest");
let home = document.getElementById("home");
let guest = document.getElementById("guest");
let newGame = document.getElementById("new-game");
let homeScore = document.getElementById("left-score");
let guestScore = document.getElementById("right-score");

let hScore = 0;
let gScore = 0;


function homeAdd1() {
    hScore +=1;
    homeScore.textContent = hScore
    getLeading();
}

function homeAdd2() {
    hScore +=2;
    homeScore.textContent = hScore
    getLeading();
}

function homeAdd3() {
    hScore +=3;
    homeScore.textContent = hScore
    getLeading();
}

function guestAdd1() {
    gScore +=1;
    guestScore.textContent = gScore
    getLeading();
}

function guestAdd2() {
    gScore +=2;
    guestScore.textContent = gScore
    getLeading();
}

function guestAdd3() {
    gScore +=3;
    guestScore.textContent = gScore
    getLeading();
}

function resetGame() {
    hScore = 0;
    gScore = 0;
    homeScore.textContent = hScore;
    guestScore.textContent = gScore;
    
    leadingHome.style.color = "#f2e8db"
    home.style.color = "#f2e8db"
    
    leadingGuest.style.color = "#f2e8db"
    guest.style.color = "#f2e8db"
        
    leadingHome.textContent = "Leading/Losing"
    leadingGuest.textContent = "Leading/Losing"
}

function getLeading() {
    if (hScore > gScore) {
        leadingHome.textContent = "Leading"
        leadingGuest.textContent = "Losing"
        leadingHome.style.color = "#fe8a01"
        home.style.color = "#fe8a01"
        
        leadingGuest.style.color = "#f2e8db"
        guest.style.color = "#f2e8db"
    } else if (hScore < gScore) {
        leadingHome.textContent = "Losing"
        leadingGuest.textContent = "Leading"
        leadingGuest.style.color = "#fe8a01"
        guest.style.color = "#fe8a01"
        
        leadingHome.style.color = "#f2e8db"
        home.style.color = "#f2e8db"
    } else {
        leadingHome.textContent = "Draw"
        leadingGuest.textContent = "Draw"
        
        leadingGuest.style.color = "#0f5ef5"
        guest.style.color = "#0f5ef5"
        
        leadingHome.style.color = "#0f5ef5"
        home.style.color = "#0f5ef5"
    }
}
