import Character from "./character.js";

class App {

    SavePosition(position){
        localStorage.setItem("position", JSON.stringify(position));
    }

    mouseRippleEffect(position){
        this.Character = new Character();

        const ripple = document.createElement("div");
        ripple.classList.add("ripple");
        ripple.style.left = `${position.clientX}px`;
        ripple.style.top = `${position.clientY}px`;
        document.getElementById("root").appendChild(ripple);
        this.SavePosition(position);
        this.Character.ValidateCharCount(position);

        setTimeout(() => {
            ripple.remove();
            this.Character.CharacterModel(position);
        }, 1000);
    }

    handleMouseClick(position){
        this.mouseRippleEffect(position);

        const clientX = position.clientX;
        const clientY = position.clientY;

        const pageX = position.pageX;
        const pageY = position.pageY;

        const offsetX = position.offsetX;
        const offsetY = position.offsetY;

    }   
}

new App();

window.addEventListener("contextmenu", function(event){
    event.preventDefault();
    new App().handleMouseClick(event);
})