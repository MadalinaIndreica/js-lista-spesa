const itemsList = ["uova", "marmellata","pane","latte","pasta"];
let listString = "";
let i = 0;
while (i < itemsList.length){
    const curItem = itemsList[i];
    listString += `<li>${curItem}</li>`;
    i++;
}
document.querySelector("ul").innerHTML = listString;
