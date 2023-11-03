var images = ["redstone.webp", "amethyst.webp"];
var randoms = ["^`$+", "⟴:]*]^*]", "⟴;;&<", "@=`!", "!;$%"];
function swap() {
    let choice = Math.floor(Math.random()*2.1);
    document.getElementById("img").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1024px-HD_transparent_picture.png";
    setTimeout(()=>{
        document.getElementById("img").src = images[choice];
        if (choice === 1) {
            document.body.style.backgroundColor = "#a25afa";
        } else if (choice === 0) {
            document.body.style.backgroundColor = "#fa5448";
        } else if (choice === 2) {
            document.getElementById("img").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1024px-HD_transparent_picture.png";
            document.body.style.backgroundColor = "white";
            document.getElementsByTagName("h1")[0].innerHTML = "ERROR ERROR ERROR";
            document.getElementsByTagName("button")[0].innerHTML = randoms[Math.floor(Math.random()*5)];
            setTimeout(()=>{
                document.getElementsByTagName("h1")[0].style.transform = "rotate(3600deg)";
                document.getElementsByTagName("h1")[0].style.transition = "4.5s linear";
                document.getElementsByTagName("img")[0].style.transform = "rotate(3600deg)";
                document.getElementsByTagName("img")[0].style.transition = "4.5s linear";
            }, 100);
            setTimeout(()=>{
                document.getElementsByTagName("button")[0].innerHTML = "ERROR";
            }, 1000)
            setTimeout(()=>{
                document.getElementsByTagName("h1")[0].innerHTML = "Redstone or Amethyst";
                document.getElementsByTagName("h1")[0].style.transition = "1s linear";
                document.getElementsByTagName("img")[0].style.transform = "";
                document.getElementsByTagName("img")[0].style.transition = "1s linear";   
                document.getElementById("img").src = "redstone.webp";       
                document.body.style.backgroundColor = "#fa5448";
            }, 5000);
        }
    }, 10);
}