class champion_save {
    constructor(index, isMeta) {
        this.index = index;
        this.isMeta = isMeta;
    }
}

data = JSON.parse(championData);
backSaves = [new champion_save(0, true), new champion_save(0, true)];
backSaves.push(new champion_save(0, true));
console.log(backSaves);
let oneTimeSave = new champion_save(0, true);

function loadChampion(index, isMeta) {
    document.getElementById("erandomChampion").innerHTML = "Champion: " + data[0]["name"];
    document.getElementById("image").src = data[0]["image"];
}

function rerollChampion() {
    index = Math.floor(Math.random() * data.length);
    loadChampion(index, true);
    champion = new champion_save(index, true);
    backSaves.push(champion);
    if (backSaves.length >= 10) {
        backSaves.pop();
    }
}

function back() {
    loadChampion(backSaves.shift()[0].index, backSaves.shift()[0].isMeta);
}

function save() {
    oneTimeSave = backSaves[0];
}

function load() {
    loadChampion(oneTimeSave.index, oneTimeSave.isMeta)
}