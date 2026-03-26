class Character{
    CharacterModel(position){
        const charExist = document.getElementsByClassName('character') ?? document.getElementsByClassName('character');
        const charModel = document.createElement("div");
        charModel.classList.add("character");
        charModel.style.left = `${position.clientX}px`;
        charModel.style.top = `${position.clientY}px`;
        
        if (document.getElementsByClassName('character').length == 0) {
            document.getElementById("root").appendChild(charModel);
        }else{
            console.log(charExist[0]);
            charExist[0].style.left = `${position.clientX}px`;
        charExist[0].style.top = `${position.clientY}px`;
            
        }

        this.ValidateCharCount(position);
    }

    ValidateCharCount(position){
        const root = document.getElementById("root");
        const charCount = root.getElementsByClassName("character").length;

        if (charCount > 1) {
            // Remove the oldest character model
            const firstChar = root.getElementsByClassName("character")[0];
            if (!firstChar) {
                // firstChar.remove();
                
            }
        }
    }

    MoveCharacter(position){
       
    }

}

export default Character;