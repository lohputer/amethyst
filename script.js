var images = ["redstone.webp", "amethyst.webp"];
function swap() {
    let choice = Math.floor(Math.random()*2);
    document.getElementById("img").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1024px-HD_transparent_picture.png";
    setTimeout(()=>{
        document.getElementById("img").src = images[choice];
        if (choice < 50) {
            document.body.style.backgroundColor = "#a25afa";
        } else {
            document.body.style.backgroundColor = "#fa5448";
        }
    }, 10);
}