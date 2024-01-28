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
    document.getElementById("championImage").src = data["champion"][index]["image"];
    document.getElementById("buildLine_0").innerHTML = "Runes: " + "<img src=" + data["rune"][data["champion"][index]["build"][6]]["image"] + "> " + data["rune"][data["champion"][index]["build"][6]]["name"];
    document.getElementById("buildLine_1").innerHTML = "1.Item: " + "<img src=" + data["item"][data["champion"][index]["build"][0]]["image"] + "> " + data["item"][data["champion"][index]["build"][0]]["name"];
    document.getElementById("buildLine_2").innerHTML = "2.Item: " + "<img src=" + data["item"][data["champion"][index]["build"][1]]["image"] + "> " + data["item"][data["champion"][index]["build"][1]]["name"];
    document.getElementById("buildLine_3").innerHTML = "3.Item: " + "<img src=" + data["item"][data["champion"][index]["build"][2]]["image"] + "> " + data["item"][data["champion"][index]["build"][2]]["name"];
    document.getElementById("buildLine_4").innerHTML = "4.Item: " + "<img src=" + data["item"][data["champion"][index]["build"][3]]["image"] + "> " + data["item"][data["champion"][index]["build"][3]]["name"]; 
    document.getElementById("buildLine_5").innerHTML = "5.Item: " + "<img src=" + data["item"][data["champion"][index]["build"][4]]["image"] + "> " + data["item"][data["champion"][index]["build"][4]]["name"];
    document.getElementById("buildLine_6").innerHTML = "6.Item: " + "<img src=" + data["item"][data["champion"][index]["build"][5]]["image"] + "> " + data["item"][data["champion"][index]["build"][5]]["name"];
}

function loadRandomChampion(index, build) {
    document.getElementById("erandomChampion").innerHTML = "Champion: " + data["champion"][index]["name"];
    document.getElementById("championImage").src = data["champion"][index]["image"];
    document.getElementById("buildLine_0").innerHTML = "Runes: " + "<img src=" + data["rune"][build[6]]["image"] + "> " + data["rune"][build[6]]["name"];
    document.getElementById("buildLine_1").innerHTML = "1.Item: " + "<img src=" + data["item"][build[0]]["image"] + "> " + data["item"][build[0]]["name"];
    document.getElementById("buildLine_2").innerHTML = "2.Item: " + "<img src=" + data["item"][build[1]]["image"] + "> " + data["item"][build[1]]["name"];
    document.getElementById("buildLine_3").innerHTML = "3.Item: " + "<img src=" + data["item"][build[2]]["image"] + "> " + data["item"][build[2]]["name"];
    document.getElementById("buildLine_4").innerHTML = "4.Item: " + "<img src=" + data["item"][build[3]]["image"] + "> " + data["item"][build[3]]["name"];
    document.getElementById("buildLine_5").innerHTML = "5.Item: " + "<img src=" + data["item"][build[4]]["image"] + "> " + data["item"][build[4]]["name"];
    document.getElementById("buildLine_6").innerHTML = "6.Item: " + "<img src=" + data["item"][build[5]]["image"] + "> " + data["item"][build[5]]["name"];
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
    
    itemBuild = [];
    allBoots = [];
    bootItem = "";

    for(let i = 0; i < itemKeys.length; i++)
    {
        if(data["item"][itemKeys[i]]["scaling"] == "*") {
            if(data["item"][itemKeys[i]]["sub scaling"] == scaling)
            {
                bootItem = itemKeys[i];
            }
            else if(data["item"][itemKeys[i]]["sub scaling"] == "*")
            {
                allBoots.push(itemKeys[i]);
            }
        }
        else if(data["item"][itemKeys[i]]["scaling"] == scaling || data["item"][itemKeys[i]]["sub scaling"] == scaling) {
            itemsOfScaling.push(itemKeys[i]);
        }
    }
    for (let n = 0; n < 6; n++) {
        itemIndex = Math.floor(Math.random() * itemsOfScaling.length);
        itemBuild.push(itemsOfScaling.splice(itemIndex, 1));
    }
    if(bootItem != "")
    {
        itemBuild[Math.floor(Math.random() * 3)] = bootItem;
    }
    else
    {
        itemBuild[Math.floor(Math.random() * 3)] = allBoots[Math.floor(Math.random() * allBoots.length)];
    }
    allKeyArray = Object.keys(data["rune"]);
    keyArray = [];
    for(let k = 0; k < allKeyArray.length; k++)
    {
        if(data["rune"][allKeyArray[k]]["scaling"].includes(scaling))
        {
            keyArray.push(allKeyArray[k]);
        }
    }
    randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
    itemBuild.push(randomKey);
    loadRandomChampion(index, itemBuild);
    champion = new champion_save(index, false);
    champion.set_build(itemBuild)
    backSaves.push(champion);
    if (backSaves.length >= 10) {
        backSaves.splice(0,1);
    }
}

function back() {
    if(backSaves.length > 1) {
        champ = backSaves[backSaves.length - 2];
        backSaves.splice(backSaves.length - 1,1);
        if(champ.isMeta == true) {
            loadChampion(champ.index);
        }
        else {
            loadRandomChampion(champ.index, champ.build);
        }
    }
}

function save() {
    oneTimeSave = backSaves[backSaves.length - 1];
    console.log(backSaves[backSaves.length - 1])
}

function load() {
    if(oneTimeSave.isMeta == true) {
        loadChampion(oneTimeSave.index);
    }
    else {
        loadRandomChampion(oneTimeSave.index, oneTimeSave.build)
    }
}