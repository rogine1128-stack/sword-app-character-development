class Character{
    constructor(data){
        // console.log(data);
        
    }

    CharacterModel(position){
        this.MoveCharacter(position);
    }

    MoveCharacter(position){
        const chtr = this.GetElement('.character');
        chtr.style.left = `${position.clientX}px`;
        chtr.style.top = `${position.clientY}px`;
    }

    IsElementExist(el){
        let isExist = false;

        if (document.querySelector(el) != null) {
           isExist = true;
        }else{
            isExist = false;
        }

        return isExist;
    }

    GetElement(el){
        return document.querySelector(el);
    }

}

export default Character;