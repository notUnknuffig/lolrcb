class champion_save {
    constructor(index, isMeta) {
        this.index = index;
        this.isMeta = isMeta;
    }
    set_build(build)
    {
        this.build = build;
    }
}

backSaves = [new champion_save(0, true), new champion_save(0, true)];
backSaves.push(new champion_save(0, true));
let oneTimeSave = new champion_save(0, true);
data = JSON.parse(championData);

function loadChampion(index, isMeta) {
    document.getElementById("erandomChampion").innerHTML = "Champion: " + data["champion"][index]["name"];
    document.getElementById("image").src = data["champion"][index]["image"];
    document.getElementById("erandomBuild").innerHTML = "Runes: " + "<img src=" + data["rune"][data["champion"][index]["build"][6]]["image"] +" width=\"30\" height=\"30\">" + data["rune"][data["champion"][index]["build"][6]]["name"]
                                                        + "<br>1.Item: "+ "<img src=" + data["item"][data["champion"][index]["build"][0]]["image"] +" width=\"20\" height=\"20\">" + data["item"][data["champion"][index]["build"][0]]["name"]
                                                        +"<br>2.Item: " + "<img src=" + data["item"][data["champion"][index]["build"][1]]["image"] +" width=\"20\" height=\"20\">" + data["item"][data["champion"][index]["build"][1]]["name"]
                                                        +"<br>3.Item: " + "<img src=" + data["item"][data["champion"][index]["build"][2]]["image"] +" width=\"20\" height=\"20\">" + data["item"][data["champion"][index]["build"][2]]["name"]
                                                        + "<br>4.Item: " + "<img src=" + data["item"][data["champion"][index]["build"][3]]["image"] +" width=\"20\" height=\"20\">" + data["item"][data["champion"][index]["build"][3]]["name"] 
                                                        + "<br>5.Item: " + "<img src=" + data["item"][data["champion"][index]["build"][4]]["image"] +" width=\"20\" height=\"20\">" + data["item"][data["champion"][index]["build"][4]]["name"]
                                                        + "<br>6.Item: " + "<img src=" + data["item"][data["champion"][index]["build"][5]]["image"] +" width=\"20\" height=\"20\">" + data["item"][data["champion"][index]["build"][5]]["name"];
}

function rerollChampion() {
    index = Math.floor(Math.random() * data["champion"].length);
    loadChampion(index, true);
    champion = new champion_save(index, true);
    backSaves.push(champion);
    if (backSaves.length >= 10) {
        backSaves.pop();
    }
}

function back() {
    if(backSaves.length > 0) {
        champ = backSaves.shift();
        loadChampion(champ.index, champ.isMeta);
    }
}

function save() {
    oneTimeSave = backSaves[0];
}

function load() {
    loadChampion(oneTimeSave.index, oneTimeSave.isMeta)
}