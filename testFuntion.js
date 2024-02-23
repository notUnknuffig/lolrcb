item_index = 0
data = JSON.parse(championData)

function onPageLoad() {
    index = Math.floor(Math.random() * data["champion"].length);
    servent = data["champion"][index];
    /*console.log(servent["name"])
    console.log(servent["scaling"])
    console.log(servent["sub scaling"])
    console.log(servent["image"])
    /*for(let i = 0; i < data.champion.length; i++)
    {
        console.log(data["champion"][i]["name"])
    }*/
}

function onEnter() {
    console.log("Start Submission...")
    let name = document.getElementById("text_field").textContent
    for(let i = 0; i < data.champion.length; i++)
    {
        if (name === data["champion"][i]["name"]) {
            console.log()
        }
    }
}