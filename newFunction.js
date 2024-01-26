class save {
    constructor(index, isMeta) {
        this.index = index;
        this.isMeta = isMeta;
    }
}

var data = JSON.parse(championData);
var backSaves = [save(0, true)];
var oneTimeSave = save(0, true);

function loadChampion(index, isMeta) {
    document.getElementById("erandomChampion").innerHTML = "Champion: " + data[0]["name"];
    document.getElementById("image").src = data[0]["image"];
}

function rerollChampion() {
    index = Math.floor(Math.random() * data.length);
    loadChampion(index, true);
    backSaves.push(save(index, true));
    if (backSaves.length >= 10) {
        backSaves.pop();
    }
    console.log(backSaves)
    console.log(oneTimeSave)
}

function save() {
    oneTimeSave = backSaves[0];
}