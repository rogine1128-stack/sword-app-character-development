import Character from "./character.js";
import MapObjects from './objects.js';

class App {

    constructor(){
        this.charEl = document.querySelector('.character .center');
        this.rootEl = document.getElementById("root");
    }

    renderObjects(){
        this.MapObjects = new MapObjects();
        this.MapObjects.Trees();
    }

    mouseRippleEffect(position){
        this.Character = new Character();
        const ripple = document.createElement("div");
        this.clickedPos = position;

        ripple.classList.add("ripple");
        ripple.style.left = `${position.clientX}px`;
        ripple.style.top = `${position.clientY}px`;
        this.rootEl.appendChild(ripple);

        this.Character.CharacterModel(position);
        this.isReachedCharDestination(this.charEl);

        setTimeout(() => {
            ripple.remove();
        }, 2000);
    }

    handleMouseClick(position){
        this.mouseRippleEffect(position);
    }   

    isCloseByHundred(num1, num2) {
        // Calculate the absolute difference between the two numbers.
        const difference = Math.abs(num1 - num2);
        
        // Check if the difference is less than or equal to 20.
        return difference <= 20;
    }

    isReachedCharDestination(char){  
        this.MapObjects = new MapObjects();
       
        const interval = setInterval(() => {
            const rec = this.charEl.getBoundingClientRect();
            const xPos = rec.x;
            const yPos = Math.abs(rec.y);            

            // validate the position of the destination and the character
            if (this.isCloseByHundred(xPos, this.clickedPos.clientX)) {
                console.log("destination reached") 
                // removed the interval when the destination is reached
                this.MapObjects.IsCharacterInFront(xPos, yPos);
                clearInterval(interval);
            }
            
        }, 500)
        
    }

    
}

const appModel = new App();

appModel.renderObjects();

window.addEventListener("contextmenu", function(event){
    event.preventDefault();
    new App().handleMouseClick(event);
})