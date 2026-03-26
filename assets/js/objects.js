class MapObjects{
    Trees(){
        const randomPos = Math.random(10);
        const tree = document.createElement("div");
        tree.classList.add("tree");
        tree.style.left = `${randomPos}px`;
        tree.style.top = `${randomPos}px`;
        document.getElementById("root").appendChild(tree);
    }
}

export default MapObjects;