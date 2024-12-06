


const refreshBtn = document.querySelector('.re-generate-btn');
const copyBtn = document.querySelector('.copy-btn');

function generatePassword() {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersstring = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:',.<>?";

    // Dynamically check the state of checkboxes
    const smallLetter = document.querySelector('.small-letter').checked;
    const capital_letter = document.querySelector('.capital-letter').checked;
    const Numbers = document.querySelector('.numbers').checked;
    const symbolster = document.querySelector('.symbols').checked;

    let charWords = "";
    if (smallLetter) charWords += lowerCase;
    if (capital_letter) charWords += uppercase;
    if (Numbers) charWords += numbersstring;
    if (symbolster) charWords += symbols;

    // Check if charWords is empty
    if (charWords.length === 0) {
        document.querySelector('.password-js').innerHTML = "select at least one option!";
        return;
    }

    // Generate the password
    let password = "";
    for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * charWords.length);
        password += charWords[randomIndex];
    }

    // Display the generated password
    document.querySelector('.password-js').innerHTML = password;
}

// Function to copy the password to clipboard

copyBtn.addEventListener('click', () => {
    const textToCopy = document.querySelector('.password-js').innerHTML; // Get the text from the p tag

    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy) // Copy text to clipboard
            .then(() => {
                alert(`Copied:  ${textToCopy}`); // Show alert when copied successfully
            })
            .catch(err => {
                console.error('Error copying text: ', err); // Handle errors
            });
    } else {
        alert('No text to copy!'); // If no text is present
    }
});

// Event Listeners
refreshBtn.addEventListener('click', generatePassword);
// copyBtn.addEventListener('click', copyPassword);