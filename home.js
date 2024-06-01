
/*js code for the typing text effect*/ 
document.addEventListener("DOMContentLoaded", function() {
    //const variable to declare the text var and its content
    const text = "\"A year 1 future Creative Computing graduate, who dreams of one day to succeed in all things, with God as my guide. Also an amateur producer that makes music that makes you go.\"";
    // const variable to declare to attain data from the id
    const typedTextElement = document.getElementById("typed-text");
    let index = 0;
    //function declaration for the typing text effect
    function type() {
        if (index < text.length) {
            typedTextElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 50); // adjustments for the amount of ms for the typing effect to occur
        }
    }

    type();
});
