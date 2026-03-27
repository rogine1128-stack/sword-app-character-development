import Character from "./character.js";
import MapObjects from './objects.js';

class App {

    constructor(){
        this.rootEl = document.getElementById("root");
         this.pathEl = document.getElementById('path');
    }

    renderObjects(){
        this.MapObjects = new MapObjects();
        // this.MapObjects.Trees();
        this.MapObjects.Towers();
    }

    isCloseByHundred(num1, num2) {
        // Calculate the absolute difference between the two numbers.
        const difference = Math.abs(num1 - num2);
        
        // Check if the difference is less than or equal to 20.
        return difference <= 20;
    }
    
}

const appModel = new App();

appModel.renderObjects();

// window.addEventListener("contextmenu", function(event){
//     event.preventDefault();
    
// })