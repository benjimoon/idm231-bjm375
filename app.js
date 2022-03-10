const submitButton = document.querySelector(".js-submit-button");
const divElement = document.querySelector("[data-content-area]");
const closeButton = document.querySelector("close-card");
/*
submitButton.addEventListener("click", function () { 
    const submitButtonContent = document.querySelector(".jcole-card");
    submitButtonContent.classList.toggle("hidden");
  });
  */

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
    if (month >= 3 && month <= 4) { /*Aries*/
        if (month == 3 && day < 21) { /*starting date*/
            yourSign = "Pisces" /*month before*/
        }
        else if (month == 4 && day > 19) { /*month after*/
            yourSign = "Taurus"
        }
        else {
            yourSign = "Aries" /*month of*/
        }
    }

    else if (month >= 4 && month <= 5) { /* Taurus*/
        if (month == 4 && day < 20) { /*starting date*/
            yourSign = "Aries" /*month before*/
        }
        else if (month == 5 && day > 20) { /*month after*/
            yourSign = "Gemini"
        }
        else {
            yourSign = "Taurus" /*month of*/
        }
    }
    else if (month >= 5 && month <= 6) { /* Gemini*/
        if (month == 5 && day < 21) { /*starting date*/
            yourSign = "Taurus" /*month before*/
        }
        else if (month == 6 && day > 20) { /*month after*/
            yourSign = "Cancer"
        }
        else {
            yourSign = "Gemini" /*month of*/
        }
    }
    else if (month >= 6 && month <= 7) { /* Cancer*/
        if (month == 6 && day < 21) { /*starting date*/
            yourSign = "Gemini" /*month before*/
        }
        else if (month == 7 && day > 22) { /*month after*/
            yourSign = "Leo"
        }
        else {
            yourSign = "Cancer" /*month of*/
        }
    }
    else if (month >= 7 && month <= 8) { /* Leo*/
        if (month == 7 && day < 23) { /*starting date*/
            yourSign = "Cancer" /*month before*/
        }
        else if (month == 7 && day > 22) { /*month after*/
            yourSign = "Virgo"
        }
        else {
            yourSign = "Leo" /*month of*/
        }
    }
    else if (month >= 8 && month <= 9) { /* Virgo*/
        if (month == 8 && day < 23) { /*starting date*/
            yourSign = "Leo" /*month before*/
        }
        else if (month == 7 && day > 22) { /*month after*/
            yourSign = "Libra"
        }
        else {
            yourSign = "Virgo" /*month of*/
        }
    }
    else if (month >= 9 && month <= 10) { /* Libra*/
        if (month == 9 && day < 23) { /*starting date*/
            yourSign = "Virgo" /*month before*/
        }
        else if (month == 7 && day > 22) { /*month after*/
            yourSign = "Scorpio"
        }
        else {
            yourSign = "Libra" /*month of*/
        }
    }
    else if (month >= 10 && month <= 11) { /* Scorpio*/
        if (month == 10 && day < 23) { /*starting date*/
            yourSign = "Libra" /*month before*/
        }
        else if (month == 11 && day > 21) { /*month after*/
            yourSign = "Sagittarius"
        }
        else {
            yourSign = "Scorpio" /*month of*/
        }
    }
    else if (month >= 11 && month <= 12) { /* Sagittarius*/
        if (month == 11 && day < 22) { /*starting date*/
            yourSign = "Scorpio" /*month before*/
        }
        else if (month == 12 && day > 21) { /*month after*/
            yourSign = "Capricorn"
        }
        else {
            yourSign = "Sagittarius" /*month of*/
        }
    }
    else if (month >= 12 && month <= 1) { /* Capricorn*/
        if (month == 12 && day < 22) { /*starting date*/
            yourSign = "Sagittarius" /*month before*/
        }
        else if (month == 1 && day > 19) { /*month after*/
            yourSign = "Aquarius"
        }
        else {
            yourSign = "Capricorn" /*month of*/
        }
    }
    else if (month >= 1 && month <= 2) { /* Aquarius*/
        if (month == 1 && day < 20) { /*starting date*/
            yourSign = "Capricorn" /*month before*/
        }
        else if (month == 2 && day > 18) { /*month after*/
            yourSign = "Pisces"
        }
        else {
            yourSign = "Aquarius" /*month of*/
        }
    }
    else {
        yourSign = "Pisces"
    }

    let rapper;

    if (yourSign == "Aquarius") {
        rapper = document.getElementById("jcole");
    }
    else if (yourSign == "Pisces") {
        rapper = document.getElementById("tyler");
    }
    else if (yourSign == "Aries") {
        rapper = document.getElementById("chance");
    }
    else if (yourSign == "Taurus") {
        rapper = document.getElementById("travis");
    }
    else if (yourSign == "Gemini") {
        rapper = document.getElementById("kanye");
    }
    else if (yourSign == "Cancer") {
        rapper = document.getElementById("post");
    }
    else if (yourSign == "Leo") {
        rapper = document.getElementById("uzi");
    }
    else if (yourSign == "Virgo") {
        rapper = document.getElementById("carti");
    }
    else if (yourSign == "Libra") {
        rapper = document.getElementById("rocky");
    }
    else if (yourSign == "Scorpio") {
        rapper = document.getElementById("drake");
    }
    else if (yourSign == "Sagittarius") {
        rapper = document.getElementById("nicki");
    }
    else if (yourSign == "Capricorn") {
        rapper = document.getElementById("mac");
    }


    rapper.classList.remove("hidden");
    divElement.innerHTML = `Birthday: ${month}/${day}/${year} <br> Your Sign: ${yourSign}`;

    closeButton.addEventListener("click", function (event) {
        event.preventDefault();
        rapper.classList.toggle("hidden");

    });
    /*
    const currentYear = new Date().getFullYear();
    const year = inputYear;
    const age = currentYear - year;
    return age;
    */
}


