const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperLetters = letters.map(function (letter) { return letter.toUpperCase(); });
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+'];

// Password generation function
function generatePassword(length: number): string {
    let password = [];
    for (var i = 0; i < length; i++) {
        var charType = Math.floor(Math.random() * 4);
        switch (charType) {
            case 0:
                password.push(letters[Math.floor(Math.random() * letters.length)]);
                break;
            case 1:
                password.push(upperLetters[Math.floor(Math.random() * upperLetters.length)]);
                break;
            case 2:
                password.push(numbers[Math.floor(Math.random() * numbers.length)]);
                break;
            case 3:
                password.push(symbols[Math.floor(Math.random() * symbols.length)]);
                break;
        }
    }
    return password.join('');
};

// Initial password generation
let passwordDisplay = document.getElementById("password-display")!;
passwordDisplay.innerText = generatePassword(10);

// Update password on length input change
document.getElementById("length")?.addEventListener("input", function (event) {
    let target = event.target as HTMLInputElement;
    let length = parseInt(target.value);
    passwordDisplay!.innerText = generatePassword(length);
});
