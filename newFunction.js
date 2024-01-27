class champion_save {
    constructor(index, isMeta) {
        this.index = index;
        this.isMeta = isMeta;
    }
    set_build(build)
    {
        //build = ["item_name","item_name","item_name","item_name","item_name","item_name","rune_name"]
        this.build = build;
    }
}

backSaves = [new champion_save(0, true), new champion_save(0, true)];
backSaves.push(new champion_save(0, true));
let oneTimeSave = new champion_save(0, true);
data = JSON.parse(championData);

function loadChampion(index) {
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

function loadRandomChampion(index, build) {
    document.getElementById("erandomChampion").innerHTML = "Champion: " + data["champion"][index]["name"];
    document.getElementById("image").src = data["champion"][index]["image"];
    document.getElementById("erandomBuild").innerHTML = "Runes: " + "<img src=" + data["rune"][build[6]]["image"] +" width=\"30\" height=\"30\">" + data["rune"][build[6]]["name"]
                                                        + "<br>1.Item: "+ "<img src=" + data["item"][build[0]]["image"] +" width=\"20\" height=\"20\">" + data["item"][build[0]]["name"]
                                                        +"<br>2.Item: " + "<img src=" + data["item"][build[1]]["image"] +" width=\"20\" height=\"20\">" + data["item"][build[1]]["name"]
                                                        +"<br>3.Item: " + "<img src=" + data["item"][build[2]]["image"] +" width=\"20\" height=\"20\">" + data["item"][build[2]]["name"]
                                                        + "<br>4.Item: " + "<img src=" + data["item"][build[3]]["image"] +" width=\"20\" height=\"20\">" + data["item"][build[3]]["name"] 
                                                        + "<br>5.Item: " + "<img src=" + data["item"][build[4]]["image"] +" width=\"20\" height=\"20\">" + data["item"][build[4]]["name"]
                                                        + "<br>6.Item: " + "<img src=" + data["item"][build[5]]["image"] +" width=\"20\" height=\"20\">" + data["item"][build[5]]["name"];
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

function rerollRandomChampion() {
    index = Math.floor(Math.random() * data["champion"].length);
    if(Math.floor(Math.random()) == 0) {
        scaling = data["champion"][index]["scaling"];
    }
    else {
        scaling = data["champion"][index]["sub scaling"];
    }
    itemsOfScaling = [];
    itemKeys = Object.keys(data["item"]);
    
    for(let i = 0; i < itemKeys.length; i++)
    {
        if(data["item"][itemKeys[i]]["scaling"] == scaling || data["item"][itemKeys[i]]["sub scaling"] == scaling) {
            itemsOfScaling.push(itemKeys[i]);
        }
        if(data["item"][itemKeys[i]]["scaling"] == "*") {
            itemsOfScaling.push(itemKeys[i]);
        }
    }
    itemBuild = [];
    for (let n = 0; n < 6; n++) {
        itemIndex = Math.floor(Math.random() * itemsOfScaling.length);
        itemBuild.push(itemsOfScaling.splice(itemIndex, 1));
    }
    keyArray = Object.keys(data["rune"]);
    randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
    itemBuild.push(randomKey);
    loadRandomChampion(index, itemBuild);
    champion = new champion_save(index, false);
    champion.set_build(itemBuild)
    backSaves.push(champion);
    if (backSaves.length >= 10) {
        backSaves.pop();
    }
}

function back() {
    if(backSaves.length > 0) {
        champ = backSaves.shift();
        if(champ.isMeta == true) {
            loadChampion(champ.index);
        }
        else {
            loadRandomChampion(champ.index, champ.build)
        }
    }
}

function save() {
    oneTimeSave = backSaves[0];
}

function load() {
    if(champ.isMeta == true) {
        loadChampion(oneTimeSave.index);
    }
    else {
        loadRandomChampion(oneTimeSave.index, oneTimeSave.build)
    }
}