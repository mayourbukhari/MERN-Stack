let root = document.getElementById("root");

let message = document.createElement("span");
message.textContent = "Please login ";
root.appendChild(message);

let button = document.createElement("button");
button.textContent = "Login";
root.appendChild(button);

button.style.backgroundColor = "green";
button.style.color = "white";
let isLogged = false;

button.onclick = function() {
    isLogged = !isLogged;
    button.textContent = isLogged ? "Logout" : "Login";
    button.style.backgroundColor = isLogged ? "red" : "green";
};
