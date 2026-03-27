class MapObjects{
    constructor(data){
        this.data = data;
        this.rootEl = document.getElementById("root");
    }
    
    async Trees(){
        const treePos = await this.GetDataFromJson('./assets/json/trees.json')

        for (let i = 0; i <= treePos.length; i++) {
            const tree = document.createElement("div");
            const center = document.createElement('span');
            center.classList.add('center');
            tree.append(center);
            tree.classList.add("tree");
            tree.style.left = `${treePos[i].x}px`;
            tree.style.top = `${treePos[i].y}px`;
            tree.setAttribute('id', `tree-${i}`);
            this.rootEl.appendChild(tree);
        } 
        
    }

    isCloseByHundred(num1, num2) {
        // Calculate the absolute difference between the two numbers.
        const difference = Math.abs(num1 - num2);
        
        // Check if the difference is less than or equal to 20.
        return difference <= 10;
    }

    async IsCharacterInFront(charX, charY){
        const treePos = await this.GetDataFromJson('./assets/json/trees.json')

        for (let i = 0; i < treePos.length; i++) {
            if (charY > treePos[i].y) {
                console.log(`Front of tree: ${document.getElementById(`tree-${i}`).style.zIndex = '0'}`);
            }else{
                console.log(document.getElementById(`tree-${i}`));
                
                console.log(`Back of tree: ${document.getElementById(`tree-${i}`).style.zIndex = '3'}`);
            }
        }

        
    }

    IsCharacterInBack(){

    }

    async GetDataFromJson(url){
        try {
            const response = await fetch(url);
            if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error.message);
        }
    }
}

export default MapObjects;