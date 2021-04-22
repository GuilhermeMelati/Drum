numberOfDrumButtons = document.querySelectorAll(".drum").length
alert("E++11++ -> 🎮...")
console.log("NOME... AMOR... LETRA... OLHA PRA BAIXO...")


function makeSound (sound) {
    switch (sound) {
        case "w":
            tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break
        case "a":
            tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break
        case "s":
            tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break
        case "d":
            tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break
        case "j":
            snare = new Audio("sounds/snare.mp3")
            snare.play()
            break
        case "k":
            crash = new Audio("sounds/crash.mp3")
            crash.play()
            break
        case "l":
            kick = new Audio("sounds/kick.mp3")
            kick.play()
            break
        case "m":
            senha = prompt("Huum... Você é curiosa né? Então me diga, qual é o nome da minha primeira cachorrinha na vida?").toLowerCase().trim()
            if (senha == "neguinha") {
                senha1 = prompt("Raiz quadrada de 4761?")
                if (senha1 == 69) {
                    alert("Ok...Ok.. Você ganhou... Como recompensa vou tocar essa musica legal! :D")
                    document.title = "VOCÊ CONSEGUIU! 🎉"
                    arcade = new Audio("sounds/arcade.mp3")
                    arcade.play()
                }
                else {
                    alert("VOLTA TUDO...")
                }
            }
            else {
                alert("NOP...")
            }
            break
        default:
            console.log(this.innerHTML)
            break
    }
}

for(i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML)
        buttonAnimation(this.innerHTML)
    })
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key)
    buttonAnimation(event.key)
})

function buttonAnimation(currentKey) {
    activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add("pressed")

    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100)
}
