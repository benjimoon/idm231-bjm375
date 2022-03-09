const submitButton = document.querySelector(".js-submit-button");
const divElement = document.querySelector("[data-content-area]");

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const dateInput = document.querySelector(".js-date-input");
    let birthDate = new Date(dateInput.value);
    let month = birthDate.getMonth() + 1;
    let day = birthDate.getDate() + 1;
    let year = birthDate.getFullYear();

    getYourSign(month, day, year);
});

function getYourSign(month, day, year) {
    let yourSign;
    if (month >= 3 && month <= 4) { /*Chance The Rapper (Aries)*/
        if (month == 3 && day < 21) { /*starting date*/
            yourSign = "Tyler, the Creator (Pisces)" /*month before*/
        }
        else if (month == 4 && day > 19) { /*month after*/
            yourSign = "Travis Scott (Taurus)"
        }
        else {
            yourSign = "Chance The Rapper (Aries)" /*month of*/
        }
    }

    else if (month >= 4 && month <= 5) { /* Travis Scott (Taurus)*/
        if (month == 4 && day < 20) { /*starting date*/
            yourSign= "Chance The Rapper (Aries)" /*month before*/
        }
        else if (month == 5 && day > 20) { /*month after*/
            yourSign = "Kanye West (Kanye West (Gemini))"
        }
        else {
            yourSign = "Travis Scott (Taurus)" /*month of*/
        }
    }
    else if (month >= 5 && month <= 6) { /* Kanye West (Gemini)*/
        if (month == 5 && day < 21) { /*starting date*/
            yourSign = "Travis Scott (Taurus)" /*month before*/
        }
        else if (month == 6 && day > 20) { /*month after*/
            yourSign = "Post Malone (Cancer)"
        }
        else {
            yourSign = "Kanye West (Gemini)" /*month of*/
        }
    }
    else if (month >= 6 && month <= 7) { /* Post Malone (Cancer)*/
        if (month == 6 && day < 21) { /*starting date*/
            yourSign = "Kanye West (Gemini)" /*month before*/
        }
        else if (month == 7 && day > 22) { /*month after*/
            yourSign = "Lil Uzi Vert (Leo)"
        }
        else {
            yourSign = "Post Malone (Cancer)" /*month of*/
        }
    }
    else if (month >= 7 && month <= 8) { /* Lil Uzi Vert (Leo)*/
        if (month == 7 && day < 23) { /*starting date*/
            yourSign = "Post Malone (Cancer)" /*month before*/
        }
        else if (month == 7 && day > 22) { /*month after*/
            yourSign = "Playboi Carti (Virgo)"
        }
        else {
            yourSign = "Lil Uzi Vert (Leo)" /*month of*/
        }
    }
    else if (month >= 8 && month <= 9) { /* Playboi Carti (Virgo)*/
        if (month == 8 && day < 23) { /*starting date*/
            yourSign = "Lil Uzi Vert (Leo)" /*month before*/
        }
        else if (month == 7 && day > 22) { /*month after*/
            yourSign = "A$AP Rocky (Libra)"
        }
        else {
            yourSign = "Playboi Carti (Virgo)" /*month of*/
        }
    }
    else if (month >= 9 && month <= 10) { /* A$AP Rocky (Libra)*/
        if (month == 9 && day < 23) { /*starting date*/
            yourSign = "Playboi Carti (Virgo)" /*month before*/
        }
        else if (month == 7 && day > 22) { /*month after*/
            yourSign = "Drake (Scorpio)"
        }
        else {
            yourSign = "A$AP Rocky (Libra)" /*month of*/
        }
    }
    else if (month >= 10 && month <= 11) { /* Drake (Scorpio)*/
        if (month == 10 && day < 23) { /*starting date*/
            yourSign = "A$AP Rocky (Libra)" /*month before*/
        }
        else if (month == 11 && day > 21) { /*month after*/
            yourSign = "Nicki Minaj (Sagittarius)"
        }
        else {
            yourSign = "Drake (Scorpio)" /*month of*/
        }
    }
    else if (month >= 11 && month <= 12) { /* Nicki Minaj (Sagittarius)*/
        if (month == 11 && day < 22) { /*starting date*/
            yourSign = "Drake (Scorpio)" /*month before*/
        }
        else if (month == 12 && day > 21) { /*month after*/
            yourSign = "Mac Miller (Capricorn)"
        }
        else {
            yourSign = "Nicki Minaj (Sagittarius)" /*month of*/
        }
    }
    else if (month >= 12 && month <= 1) { /* Mac Miller (Capricorn)*/
        if (month == 12 && day < 22) { /*starting date*/
            yourSign = "Nicki Minaj (Sagittarius)" /*month before*/
        }
        else if (month == 1 && day > 19) { /*month after*/
            yourSign = "J. Cole (Aquarius)"
        }
        else {
            yourSign = "Mac Miller (Capricorn)" /*month of*/
        }
    }
    else if (month >= 1 && month <= 2) { /* Aquarius*/
        if (month == 1 && day < 20) { /*starting date*/
            yourSign = "Mac Miller (Capricorn)" /*month before*/
        }
        else if (month == 2 && day > 18) { /*month after*/
            yourSign = "Tyler, the Creator (Pisces)"
        }
        else {
            yourSign = "J. Cole (Aquarius)" /*month of*/
        }
    }
    else {
        yourSign = "Tyler, the Creator (Pisces)"
    }
divElement.innerHTML = `Birthday: ${month}/${day}/${year} <br> Your Sign: ${yourSign}`; 

    /*
    const currentYear = new Date().getFullYear();
    const year = inputYear;
    const age = currentYear - year;
    return age;
    */
}