document.addEventListener('DOMContentLoaded', (event) => {
    const texts = ["This is my Portfolio/about me page", "have a look around", "Uhhhh i dont know what else to say"];
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    const typingTextElement = document.getElementById('typing-text');
    const cursorChar = '█'; 

    function typeText() {
        if (currentCharIndex < texts[currentTextIndex].length) {
            typingTextElement.innerHTML = texts[currentTextIndex].substring(0, currentCharIndex) + cursorChar;
            currentCharIndex++;
            setTimeout(typeText, 70);
        } else {
            typingTextElement.innerHTML = texts[currentTextIndex] + cursorChar;
            setTimeout(deleteText, 1000);
        }
    }

    function deleteText() {
        if (currentCharIndex > 0) {
            typingTextElement.innerHTML = texts[currentTextIndex].substring(0, currentCharIndex - 1) + cursorChar;
            currentCharIndex--;
            setTimeout(deleteText, 50);
        } else {
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            setTimeout(typeText, 500);
        }
    }

    
    setInterval(() => {
        if (typingTextElement.innerHTML.endsWith(cursorChar)) {
            typingTextElement.innerHTML = typingTextElement.innerHTML.slice(0, -1);
        } else {
            typingTextElement.innerHTML += cursorChar;
        }
    }, 500);

    typeText();
});
