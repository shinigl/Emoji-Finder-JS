let selectEmoji = document.querySelectorAll("#select"); // Fixed the typo
let search = document.querySelector("#search");
let emojiContainer = document.querySelector("#emoji-container");


window.addEventListener("load", function() {
    displayEmoji("");
});

function displayEmoji(searchQuery) {
    let filteremoji = emojiList.filter((emoji) => {
        if (searchQuery === "") {
            return true;
        }
        return emoji.description.includes(searchQuery);
    });

    emojiContainer.innerHTML = "";
    filteremoji.forEach((emoji) => {
        let emojiBox = document.createElement("div");
        let emojiBoxEl = document.createElement("p");
        emojiBox.classList.add("emoji-Box");
        emojiBox.innerHTML = emoji.emoji;


        emojiBox.addEventListener("click", function() {
            navigator.clipboard.writeText(emoji.emoji).then(() => {
                let copy =document.createElement("p");
                copy.classList.add("copy-success");
                copy.textContent = "Copied!";
                
                
                emojiBox.appendChild(copy);
        
               
                setTimeout(() => {
                    copy.remove();
                }, 500); 
            }).catch((error) => {
                console.error("Failed to copy emoji: ", error);
            });
        });
        

        emojiContainer.appendChild(emojiBox);
    });
}


search.addEventListener('keyup', function() {
    let searchvalue = search.value.toLowerCase();
    displayEmoji(searchvalue); 
});

for (let e of selectEmoji) {  
    e.addEventListener('click', function() {
       
        let searchvalue = e.innerHTML.toLowerCase();
        console.log(searchvalue);
        if (searchvalue === 'all') {
            searchvalue = ""; 
        } 
        displayEmoji(searchvalue);
    });
}