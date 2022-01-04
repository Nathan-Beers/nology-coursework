// // Attached event listener to button
// document.querySelector('.translate-btn').addEventListener('click', () => {
//     const englishWord = document.querySelector('.input-box').value;
    
//     // If word matches, put translation into DOM
//     if(englishWord === "Hello" || englishWord === "hello"){
//         document.querySelector('.translate-result').innerHTML = "Bonjour";
//     } else if (englishWord === "Goodbye" || englishWord === "goodbye") {
//         document.querySelector('.translate-result').innerHTML = "Au revoir";
//     } else {
//         document.querySelector('.translate-result').innerHTML = "Translation unavailable";
//     }
// });

// Make the code more testable
// Decouple logic
// 1. Function that translates english to french
// 2. Some dom interatction in an even listener

// Accept inputs => return outputs
const translateEnglishToFrench = (englishWord) => {
    if(englishWord === "hello") {
        return "bonjour";
    } else if(englishWord === "goodbye"){
        return "au revoir";
    } else {
        return "unavailable";
    }
};

document.querySelector(".translate-btn").addEventListener("click", () => {
    const englishWord = document.querySelector(".input-box").value;
    const frenchWord = translateEnglishToFrench(englishWord);

    document.querySelector(".translate-result").innerHTML = frenchWord;
});