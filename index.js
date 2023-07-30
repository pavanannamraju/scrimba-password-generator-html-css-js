const alphaArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbolsArray = [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
];

const noOfChars = document.getElementById("no-of-chrs");
const numberSelected = document.getElementById("numbers-selected");
const symbolSelected = document.getElementById("symbols-selected");
const generateBtn = document.getElementById("generate-password");

const password1 = document.getElementById("password-1");
const password2 = document.getElementById("password-2");
const message = document.getElementById("message");

generateBtn.addEventListener("click", function () {
    console.log(
        noOfChars.value,
        numberSelected.checked,
        symbolSelected.checked
    );

    let finalArray = alphaArray;
    if (numberSelected.checked) {
        finalArray = finalArray.concat(numbersArray);
    }
    if (symbolSelected.checked) {
        finalArray = finalArray.concat(symbolsArray);
    }
    console.log(finalArray);

    let p1 = generatePassword(finalArray, noOfChars.value);
    let p2 = generatePassword(finalArray, noOfChars.value);
    password1.textContent = p1;
    password2.textContent = p2;
});

password1.addEventListener("click", function () {
    if (password1.textContent !== "") {
        navigator.clipboard.writeText(password1.textContent);
        message.textContent = "Password1 Copied!!";
        setTimeout(() => {
            message.textContent = "";
        }, 2000);
    }
});
password2.addEventListener("click", function () {
    if (password2.textContent !== "") {
        navigator.clipboard.writeText(password2.textContent);
        message.textContent = "Password2 Copied!!";
        setTimeout(() => {
            message.textContent = "";
        }, 2000);
    }
});

function generatePassword(array, length) {
    let finalPassword = "";
    for (let i = 0; i < length; i++) {
        let ind = Math.floor(Math.random() * array.length);
        finalPassword += array[ind];
    }
    return finalPassword;
}
