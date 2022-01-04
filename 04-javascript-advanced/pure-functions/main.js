// Attached event listener to button
document.querySelector('.translate-btn').addEventListener('click', () => {
    const englishWord = document.querySelector('.input-box').value;
    
    // If word matches, put translation into DOM
    if(englishWord === "Hello" || englishWord === "hello"){
        document.querySelector('.translate-result').innerHTML = "Bonjour";
    } else if (englishWord === "Goodbye" || englishWord === "goodbye") {
        document.querySelector('.translate-result').innerHTML = "Au revoir";
    } else {
        document.querySelector('.translate-result').innerHTML = "Translation unavailable";
    }
});