class Character{

    constructor(data){
       return data;
    }

    CharacterModel(position){
        const charModel = document.createElement("div");
        charModel.classList.add("character");
        charModel.style.left = `${position.clientX}px`;
        charModel.style.top = `${position.clientY}px`;
        document.getElementById("root").appendChild(charModel);

        if (localStorage.getItem("position") !== null) {

            console.log(localStorage.getItem('position'));
            
            if (position == localStorage.getItem('position')) {
                this.ValidateCharCount(position);

                console.log("hello world");
                
            }
        }
    }

    ValidateCharCount(position){
        const root = document.getElementById("root");
        const charCount = root.getElementsByClassName("character").length;

        if (charCount > 1) {
            // Remove the oldest character model
            const firstChar = root.getElementsByClassName("character")[0];
            if (firstChar) {
                firstChar.remove();
            }
        }
    }

    MoveCharacter(position){
       
    }

}

export default Character;