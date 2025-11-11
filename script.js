const green = document.getElementById("green")
const red = document.getElementById("red")
const blue = document.getElementById("blue")

// 1 - get button onclick
const body = document.getElementsByTagName("body")[0];
body.addEventListener("click", (color) => {
    color.preventDefault();
    clickedElement = color.target;
    console.log(clickedElement);
    switch (clickedElement.id) {
        case "green":
            body.style.backgroundColor = "green";
            console.log("green");
            break;
        case "red":
            body.style.backgroundColor = "red";
            console.log("red");
            break;
        case "blue":
            body.style.backgroundColor = "blue";
            console.log("blue");
            break;
        case "random":
            body.style.backgroundColor = randomColor();
            console.log("random");
            break;
        default:
            break;
    }
    function randomColor() {
    const arr = ["green", "red", "blue", "yellow", "pink", "purple"];
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
    }
});


