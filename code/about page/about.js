// typing text effect js code
document.addEventListener("DOMContentLoaded", function() {
    const text = "A Filipino born and raised, I was picked up by my parents and they took me to Dubai in 2013. I basically grew up half of my life in this wonderful place. \n\nMy hobbies are primarily both listening and making music. I personally like all, but more into Hip-hop. I also like to eat good food and enjoy time with friends.";
    const typedTextElement = document.getElementById("bg-text");
    let index = 0;

    function type() {
        if (index < text.length) {
            typedTextElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust typing speed here (50ms)
        }
    }

    type();
});