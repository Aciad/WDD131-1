


const caracter = {
    name: "Johan",
    class: "Warlock",
    Level: 1,
    health: 100,
    attacked: function() {
        this.health -= 20;
        if (this.health < 0) {
            window.alert(this.name + " has died.");
        }
    },
    levelUp: function() {
        this.Level++;
    }
}

function updateCard() {
    console.log(caracter);
    document.getElementById("name").textContent = caracter.name;
    document.getElementById("stats").innerHTML = `
        <p>Class: ${caracter.class}</p>
        <p>Level: ${caracter.Level}</p>
        <p>Health: ${caracter.health}</p>
    `;
}

document.querySelector(".attacked").addEventListener("click", () => {
    caracter.attacked();
    updateCard();
});

document.querySelector(".levelUp").addEventListener("click", () => {
    caracter.levelUp();
    updateCard();
});

updateCard();