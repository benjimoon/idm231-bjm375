const submitButton = document.querySelector(".js-submit-button");
const divElement = document.querySelector("[data-content-area]");
const closeButton = document.querySelectorAll(".close-card");
const questionButton = document.querySelector(".question-button");
const learnButton1 = document.querySelector(".learn-more1");
const learnButton2 = document.querySelector(".learn-more2");
const learnButton3 = document.querySelector(".learn-more3");
const learnButton4 = document.querySelector(".learn-more4");
const learnButton5 = document.querySelector(".learn-more5");
const learnButton6 = document.querySelector(".learn-more6");
const learnButton7 = document.querySelector(".learn-more7");
const learnButton8 = document.querySelector(".learn-more8");
const learnButton9 = document.querySelector(".learn-more9");
const learnButton10 = document.querySelector(".learn-more10");
const learnButton11 = document.querySelector(".learn-more11");
const learnButton12 = document.querySelector(".learn-more12");
/*
submitButton.addEventListener("click", function () { 
    const submitButtonContent = document.querySelector(".jcole-card");
    submitButtonContent.classList.toggle("hidden");
  });
  */

  closeButton.forEach(element => {
    element.addEventListener("click", function (event) {
        event.preventDefault();
const questionButton = document.querySelector(".question-card");
questionButton.classList.add("hidden");
});
});

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const dateInput = document.querySelector(".js-date-input");
    let birthDate = new Date(dateInput.value);
    let month = birthDate.getMonth() + 1;
    let day = birthDate.getDate() + 1;
    let year = birthDate.getFullYear();

    getYourSign(month, day, year);
});

questionButton.addEventListener("click", function () {
    const questionButton = document.querySelector(".question-card");
    questionButton.classList.toggle("hidden");
});

/* gallery learn more */
learnButton1.addEventListener("click", function () {
    const learnButton1 = document.querySelector(".jcole-card");
    learnButton1.classList.toggle("hidden");

    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
    const questionButton = document.querySelector(".jcole-card");
    questionButton.classList.add("hidden");
    });
    });
});
learnButton2.addEventListener("click", function () {
    const learnButton1 = document.querySelector(".tyler-card");
    learnButton1.classList.toggle("hidden");

    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
    const questionButton = document.querySelector(".tyler-card");
    questionButton.classList.add("hidden");
    });
    });
});
learnButton3.addEventListener("click", function () {
    const learnButton1 = document.querySelector(".chance-card");
    learnButton1.classList.toggle("hidden");

    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
    const questionButton = document.querySelector(".chance-card");
    questionButton.classList.add("hidden");
    });
    });
});
learnButton4.addEventListener("click", function () {
    const learnButton1 = document.querySelector(".travis-card");
    learnButton1.classList.toggle("hidden");

    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
    const questionButton = document.querySelector(".travis-card");
    questionButton.classList.add("hidden");
    });
    });
});
learnButton5.addEventListener("click", function () {
    const learnButton1 = document.querySelector(".kanye-card");
    learnButton1.classList.toggle("hidden");

    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
    const questionButton = document.querySelector(".kanye-card");
    questionButton.classList.add("hidden");
    });
    });
});
learnButton6.addEventListener("click", function () {
    const learnButton1 = document.querySelector(".post-card");
    learnButton1.classList.toggle("hidden");

    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
    const questionButton = document.querySelector(".post-card");
    questionButton.classList.add("hidden");
    });
    });
});
learnButton7.addEventListener("click", function () {
    const learnButton1 = document.querySelector(".uzi-card");
    learnButton1.classList.toggle("hidden");

    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
    const questionButton = document.querySelector(".uzi-card");
    questionButton.classList.add("hidden");
    });
    });
});
learnButton8.addEventListener("click", function () {
    const learnButton1 = document.querySelector(".carti-card");
    learnButton1.classList.toggle("hidden");

    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
    const questionButton = document.querySelector(".carti-card");
    questionButton.classList.add("hidden");
    });
    });
});
learnButton9.addEventListener("click", function () {
    const learnButton1 = document.querySelector(".rocky-card");
    learnButton1.classList.toggle("hidden");

    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
    const questionButton = document.querySelector(".rocky-card");
    questionButton.classList.add("hidden");
    });
    });
});
learnButton10.addEventListener("click", function () {
    const learnButton1 = document.querySelector(".drake-card");
    learnButton1.classList.toggle("hidden");

    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
    const questionButton = document.querySelector(".drake-card");
    questionButton.classList.add("hidden");
    });
    });
});
learnButton11.addEventListener("click", function () {
    const learnButton1 = document.querySelector(".nicki-card");
    learnButton1.classList.toggle("hidden");

    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
    const questionButton = document.querySelector(".nicki-card");
    questionButton.classList.add("hidden");
    });
    });
});
learnButton12.addEventListener("click", function () {
    const learnButton1 = document.querySelector(".mac-card");
    learnButton1.classList.toggle("hidden");

    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
    const questionButton = document.querySelector(".mac-card");
    questionButton.classList.add("hidden");
    });
    });
});
/*end of gallery learn more */

/* birthday function*/
function getYourSign(month, day, year) {
    let yourSign;
    if (month >= 3 && month <= 4) { /*Aries*/
        if (month == 3 && day < 21) { /*starting date*/
            yourSign = "Pisces"; /*month before*/
        }
        else if (month == 4 && day > 19) { /*month after*/
            yourSign = "Taurus";
        }
        else {
            yourSign = "Aries"; /*month of*/
        }
    }

    else if (month >= 4 && month <= 5) { /* Taurus*/
        if (month == 4 && day < 20) { /*starting date*/
            yourSign = "Aries"; /*month before*/
        }
        else if (month == 5 && day > 20) { /*month after*/
            yourSign = "Gemini";
        }
        else {
            yourSign = "Taurus"; /*month of*/
        }
    }
    else if (month >= 5 && month <= 6) { /* Gemini*/
        if (month == 5 && day < 21) { /*starting date*/
            yourSign = "Taurus"; /*month before*/
        }
        else if (month == 6 && day > 20) { /*month after*/
            yourSign = "Cancer";
        }
        else {
            yourSign = "Gemini"; /*month of*/
        }
    }
    else if (month >= 6 && month <= 7) { /* Cancer*/
        if (month == 6 && day < 21) { /*starting date*/
            yourSign = "Gemini"; /*month before*/
        }
        else if (month == 7 && day > 22) { /*month after*/
            yourSign = "Leo";
        }
        else {
            yourSign = "Cancer";/*month of*/
        }
    }
    else if (month >= 7 && month <= 8) { /* Leo*/
        if (month == 7 && day < 23) { /*starting date*/
            yourSign = "Cancer"; /*month before*/
        }
        else if (month == 7 && day > 22) { /*month after*/
            yourSign = "Virgo";
        }
        else {
            yourSign = "Leo";/*month of*/
        }
    }
    else if (month >= 8 && month <= 9) { /* Virgo*/
        if (month == 8 && day < 23) { /*starting date*/
            yourSign = "Leo"; /*month before*/
        }
        else if (month == 7 && day > 22) { /*month after*/
            yourSign = "Libra";
        }
        else {
            yourSign = "Virgo"; /*month of*/
        }
    }
    else if (month >= 9 && month <= 10) { /* Libra*/
        if (month == 9 && day < 23) { /*starting date*/
            yourSign = "Virgo"; /*month before*/
        }
        else if (month == 7 && day > 22) { /*month after*/
            yourSign = "Scorpio";
        }
        else {
            yourSign = "Libra"; /*month of*/
        }
    }
    else if (month >= 10 && month <= 11) { /* Scorpio*/
        if (month == 10 && day < 23) { /*starting date*/
            yourSign = "Libra"; /*month before*/
        }
        else if (month == 11 && day > 21) { /*month after*/
            yourSign = "Sagittarius";
        }
        else {
            yourSign = "Scorpio"; /*month of*/
        }
    }
    else if (month >= 11 && month <= 12) { /* Sagittarius*/
        if (month == 11 && day < 22) { /*starting date*/
            yourSign = "Scorpio"; /*month before*/
        }
        else if (month == 12 && day > 21) { /*month after*/
            yourSign = "Capricorn";
        }
        else {
            yourSign = "Sagittarius"; /*month of*/
        }
    }
    else if (month >= 12 && month <= 1) { /* Capricorn*/
        if (month == 12 && day < 22) { /*starting date*/
            yourSign = "Sagittarius";/*month before*/
        }
        else if (month == 1 && day > 19) { /*month after*/
            yourSign = "Aquarius";
        }
        else {
            yourSign = "Capricorn";/*month of*/
        }
    }
    else if (month >= 1 && month <= 2) { /* Aquarius*/
        if (month == 1 && day < 20) { /*starting date*/
            yourSign = "Capricorn"; /*month before*/
        }
        else if (month == 2 && day > 18) { /*month after*/
            yourSign = "Pisces";
        }
        else {
            yourSign = "Aquarius"; /*month of*/
        }
    }
    else {
        yourSign = "Pisces";
    }
/*rapper function*/
    let rapper;

    if (yourSign == "Aquarius") {
        audio = document.getElementById("audio-jcole");
        rapper = document.getElementById("jcole");
    }
    else if (yourSign == "Pisces") {
        audio = document.getElementById("audio-tyler");
        rapper = document.getElementById("tyler");
    }
    else if (yourSign == "Aries") {
        audio = document.getElementById("audio-chance");
        rapper = document.getElementById("chance");
    }
    else if (yourSign == "Taurus") {
        audio = document.getElementById("audio-travis");
        rapper = document.getElementById("travis");
    }
    else if (yourSign == "Gemini") {
        audio = document.getElementById("audio-kanye");
        rapper = document.getElementById("kanye");
    }
    else if (yourSign == "Cancer") {
        audio = document.getElementById("audio-post");
        rapper = document.getElementById("post");
    }
    else if (yourSign == "Leo") {
        audio = document.getElementById("audio-uzi");
        rapper = document.getElementById("uzi");
    }
    else if (yourSign == "Virgo") {
        audio = document.getElementById("audio-carti");
        rapper = document.getElementById("carti");
    }
    else if (yourSign == "Libra") {
        audio = document.getElementById("audio-rocky");
        rapper = document.getElementById("rocky");
    }
    else if (yourSign == "Scorpio") {
        audio = document.getElementById("audio-drake");
        rapper = document.getElementById("drake");
    }
    else if (yourSign == "Sagittarius") {
        audio = document.getElementById("audio-nicki");
        rapper = document.getElementById("nicki");
    }
    else if (yourSign == "Capricorn") {
        audio = document.getElementById("audio-mac");
        rapper = document.getElementById("mac");
    }

    rapper.classList.remove("hidden");
    audio.play();
    console.log(closeButton);
    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
            rapper.classList.add("hidden");
            audio.pause();
        });
    });


    /*
    const currentYear = new Date().getFullYear();
    const year = inputYear;
    const age = currentYear - year;
    return age;
    */
}


