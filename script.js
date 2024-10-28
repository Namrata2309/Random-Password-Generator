const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]<>/-=";


const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    const charType = document.querySelector('input[name="password"]:checked'); 

    // Check which type of password to generate
    if (charType) {
        if (charType.value === "char") {
            // Only characters
            password += upperCase[Math.floor(Math.random() * upperCase.length)];
            password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        } else if (charType.value === "number") {
            // Only numbers
            password += number[Math.floor(Math.random() * number.length)];
        } else if (charType.value === "mix") {
            // Mix
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }

        while (length > password.length) {
            if (charType.value === "char") {
                password += upperCase[Math.floor(Math.random() * upperCase.length)];
                password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
            } else if (charType.value === "number") {
                password += number[Math.floor(Math.random() * number.length)];
            } else if (charType.value === "mix") {
                password += allChars[Math.floor(Math.random() * allChars.length)];
            }
        }

        
        
        passwordBox.value = password;
    } else {
        alert("Please select a password type.");
    }
}

// Function to copy password
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}
