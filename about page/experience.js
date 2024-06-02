// typing text effect js code
document.addEventListener("DOMContentLoaded", function() {
    const text = "\"A year 1 future Creative Computing graduate, who dreams of one day to succeed in all things, with God as my guide. Also an amateur producer that makes music that makes you go.\"";
    const typedTextElement = document.getElementById("experience-text");
    let index = 0;

    function type() {
        if (index < text.length) {
            typedTextElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 50); 
        }
    }

    type();
});