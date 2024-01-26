
function clarefiyName(name)
{
    var p_name = ""
    for (var i = 0; i < name.length; i++) {
        if(name.charAt(i) === "'" || name.charAt(i) === "&" || name.charAt(i) === "." || name.charAt(i) === " ")
        {

        }
        else
        {
            p_name = p_name + name.charAt(i);
        }
    }
    if(p_name === 'RenataGlasc')
    {  
        p_name = 'Renata';
    }
    else if(p_name === 'Wukong')
    {
        p_name = 'MonkeyKing';
    }
    else if(p_name === 'NunuWillump')
    {
        p_name = 'Nunu'
    }
    else if(p_name === 'JarvanIv')
    {
        p_name = 'JarvanIV'
    }
    else if(p_name === 'KhaZix')
    {
        p_name = 'Khazix'
    }
    else if(p_name === 'ChoGath')
    {
        p_name = 'Chogath'
    }
    else if(p_name === 'KaiSa')
    {
        p_name = 'Kaisa'
    }
    else if(p_name === 'BelVeth')
    {
        p_name = 'Belveth'
    }
    return p_name
}
function capitalizeName(name)
{
    var p_name = "";
    if(name.includes("'"))
    {
        tp_name = name.split("'");
        for(var i = 0; i < tp_name.length; i++)
        {
            p_name = p_name +"'"+ tp_name[i].charAt(0).toUpperCase() + tp_name[i].slice(1).toLocaleLowerCase();
        }
    }
    else
    {
        var tp_name = name.split(" ");
        for(var i = 0; i < tp_name.length; i++)
        {
            p_name = p_name +" "+ tp_name[i].charAt(0).toUpperCase() + tp_name[i].slice(1).toLocaleLowerCase();
        }
    }
    if(p_name === 'Jarvan Iv')
    {
        p_name = 'Jarvan IV'
    }
    return p_name.slice(1);
}
var lastChampion = [];
var savedChampion = [];
var thisChampion = [];
function addUniqueLegendary(array,maxNumber) {
    while (array.length < 4) {
        var randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        if (array.indexOf(randomNumber) === -1) {
            array.push(randomNumber);
        }
    }
}
function getItemIcon(item) {
    string_array = item.split(" ")
    result_string = ""
    for (str of string_array)
    {
        result_string = result_string + "_" + str;
    }
    if(result_string.includes("'"))
    {
        tp_string = result_string.split("'");
        p_string = "";
        for(var i = 0; i < tp_string.length; i++)
        {
            p_string = p_string +"_"+ tp_string[i];
        }
        result_string = p_string.slice(1);
    }
    if(result_string.includes(","))
    {
        tp_string = result_string.split(",");
        p_string = "";
        for(var i = 0; i < tp_string.length; i++)
        {
            p_string = p_string + tp_string[i];
        }
        result_string = p_string;
    }
    return "image/" + result_string.slice(1) + ".png";
}
function generateRandomBuild(isRandom) {
    var getExactBuild = isRandom;
    var image = document.getElementById("image");
    var champions = ["AATROX","AHRI","AKALI","AKSHAN","ALISTAR","AMUMU","ANIVIA","ANNIE","APHELIOS","ASHE","AURELION SOL","AZIR","BARD","BEL'VETH","BLITZCRANK","BRAND","BRAUM","CAITLYN","CAMILLE","CASSIOPEIA","CHO'GATH","CORKI","DARIUS","DIANA","DR. MUNDO","DRAVEN","EKKO","ELISE","EVELYNN","EZREAL","FIDDLESTICKS","FIORA","FIZZ","GALIO","GANGPLANK","GAREN","GNAR","GRAGAS","GRAVES","GWEN","HECARIM","HEIMERDINGER","ILLAOI","IRELIA","IVERN","JANNA","JARVAN IV","JAX","JAYCE","JHIN","JINX","K'SANTE","KAI'SA","KALISTA","KARMA","KARTHUS","KASSADIN","KATARINA","KAYLE","KAYN","KENNEN","KHA'ZIX","KINDRED","KLED","KOG'MAW","LEBLANC","LEE SIN","LEONA","LILLIA","LISSANDRA","LUCIAN","LULU","LUX","MALPHITE","MALZAHAR","MAOKAI","MASTER YI","MISS FORTUNE","MORDEKAISER","MORGANA","NAMI","NASUS","NAUTILUS","NEEKO","NIDALEE","NILAH","NOCTURNE","NUNU & WILLUMP","OLAF","ORIANNA","ORNN","PANTHEON","POPPY","PYKE","QIYANA","QUINN","RAKAN","RAMMUS","REK'SAI","RELL","RENATA GLASC","RENEKTON","RENGAR","RIVEN","RUMBLE","RYZE","SAMIRA","SEJUANI","SENNA","SERAPHINE","SETT","SHACO","SHEN","SHYVANA","SINGED","SION","SIVIR","SKARNER","SONA","SORAKA","SWAIN","SYLAS","SYNDRA","TAHM KENCH","TALIYAH","TALON","TARIC","TEEMO","THRESH","TRISTANA","TRUNDLE","TRYNDAMERE","TWISTED FATE","TWITCH","UDYR","URGOT","VARUS","VAYNE","VEIGAR","VEL'KOZ","VEX","VI","VIEGO","VIKTOR","VLADIMIR","VOLIBEAR","WARWICK","WUKONG","XAYAH","XERATH","XIN ZHAO","YASUO","YONE","YORICK","YUUMI","ZAC","ZED","ZERI","ZIGGS","ZILEAN","ZOE","ZYRA"];
    var lanes = ["Top","Jungle","Middle","Bottom","Support"];
    var lanes_icon_name = ["top","jung","mid","supp"];
    var atksBuild = [["Hail of Blades","Lethal Tempo"],["Guinsoo's Rageblade"],["Berserker's Greaves"],["Phantom Dancer","Nashor's Tooth","Blade of the Ruined King","Wit's End","Runaan's Hurricane","Rapid Firecannon","Statikk Shiv"]]; //atk speed on hit
    var tankBuild = [["Aftershock","Grasp of the Undying"],["Jak'Sho, The Protean","Iceborn Gauntlet","Evenshroud","Locket of the Iron Solari","Heartsteel","Radiant Virtue"],["Mercury's Treads","Plated Steelcaps"],["Thornmail","Randuin's Omen","Warmog's Armor","Titanic Hydra","Gargoyle Stoneplate","Spirit Visage","Turbo Chemtank","Force of Nature","Frozen Heart","Sunfire Aegis","Winter's Approach","Anathema's Chains","Abyssal Mask","Zeke's Convergence","Knight's Vow"]]; //tank
    var mageBuild = [["Dark Harvest","Electrocute","Arcane Comet","Summon Aery","Phase Rush","First Strike"],["Luden's Tempest","Crown of the Shattered Queen","Liandry's Anguish","Hextech Rocketbelt","Riftmaker","Rod of Ages","Everfrost","Night Harvester"],["Sorcerer's Shoes"],["Shadowflame","Cosmic Drive","Rabadon's Deathcap","Demonic Embrace","Banshee's Veil","Horizon Focus","Morellonomicon","Zhonya's Hourglass","Lich Bane","Archangel's Staff","Void Staff","Rylai's Crystal Scepter","Mejai's Soulstealer"]]; //mage
    var lethBuild = [["Dark Harvest","Electrocute","Predator","Hail of Blades","First Strike"],["Duskblade of Draktharr","Eclipse","Youmuu's Ghostblade"],["Ionian Boots of Lucidity","Mobility Boots","Boots of Swiftness"],["Serylda's Grugde","Axiom Arc","Prowler's Claw","The Collector","Edge of Night","Serpent's Fang","Umbral Glaive"]]; //Lethality
    var critBuild = [["Press the Attack","Fleet Footwork","Lethal Tempo"],["Infinity Edge","Galeforce","Navori Quickblades"],["Berserker's Greaves"],["Bloodthirster","Mercurial Scimitar","Kraken Slayer","The Collector","Stormrazor","Rapid Firecannon","Statikk Shiv","Lord Dominik's Regards","Mortal Reminder","Essence Reaver","Runaan's Hurricane","Phantom Dancer","Immortal Shieldbow"]]; //crit
    var suppBuild = [["Summon Aery","Guardian"],["Moonstone Renewer","Echoes of Helia","Shurelya's Battlesong"],["Ionian Boots of Lucidity"],["Ardent Censer","Mikael's Blessing","Chemtech Putrifier","Staff of Flowing Water","Redemption","Imperial Mandate"]]; //enchanter
    var hateBuild = [["Conqueror","Press the Attack","Grasp of the Undying"],["Trinity Force","Stridebreaker","Divine Sunderer","Goredrinker"],["Mercury's Treads","Plated Steelcaps"],["Spear Of Shojin","Ravenous Hydra","Death's Dance","Black Cleaver","Sterak's Gage","Guardian Angel","Dead Man's Plate","Chempunk Chainsword","Manamune","Silvermere Dawn","Wit's End","Maw of Malmortius"]]; //Bruiser
    var build = [atksBuild,tankBuild,mageBuild,lethBuild,critBuild,suppBuild,hateBuild];
    var championBuild = [[tankBuild,lethBuild,suppBuild,hateBuild,critBuild],[mageBuild,atksBuild],[hateBuild,mageBuild],[atksBuild,critBuild],[tankBuild,suppBuild,mageBuild],[tankBuild,mageBuild],[mageBuild,tankBuild],[mageBuild,suppBuild],[critBuild,atksBuild,lethBuild],[critBuild,atksBuild,mageBuild],[mageBuild],[mageBuild,atksBuild],[suppBuild,mageBuild,atksBuild],[atksBuild,hateBuild,mageBuild],[atksBuild,tankBuild,mageBuild],[mageBuild,atksBuild],[atksBuild,tankBuild,hateBuild],[critBuild,atksBuild,lethBuild],[hateBuild,critBuild,lethBuild],[mageBuild,atksBuild],[tankBuild,mageBuild],[critBuild,mageBuild,hateBuild],[hateBuild,tankBuild,lethBuild,critBuild],[atksBuild,mageBuild],[tankBuild,suppBuild],[atksBuild,critBuild,lethBuild],[mageBuild,tankBuild],[mageBuild],[mageBuild,tankBuild],[lethBuild,critBuild,atksBuild,hateBuild],[mageBuild,tankBuild],[critBuild,atksBuild,lethBuild,tankBuild,hateBuild],[mageBuild,atksBuild],[tankBuild,mageBuild],[lethBuild,critBuild,mageBuild],[atksBuild,hateBuild,lethBuild,critBuild,tankBuild],[atksBuild,hateBuild,tankBuild,lethBuild],[mageBuild,tankBuild],[lethBuild,critBuild],[mageBuild,atksBuild],[tankBuild,lethBuild,mageBuild],[mageBuild,atksBuild],[tankBuild,hateBuild,lethBuild],[critBuild,atksBuild,mageBuild,lethBuild],[mageBuild,suppBuild,atksBuild],[suppBuild,mageBuild],[tankBuild,hateBuild,lethBuild,mageBuild],[atksBuild,critBuild,mageBuild,tankBuild,lethBuild,hateBuild],[atksBuild,hateBuild,lethBuild],[atksBuild,critBuild,lethBuild,mageBuild],[atksBuild,lethBuild,critBuild],[tankBuild,hateBuild,suppBuild],[atksBuild,mageBuild,critBuild],[lethBuild,critBuild,atksBuild],[suppBuild,mageBuild,tankBuild],[mageBuild,atksBuild],[mageBuild,tankBuild],[critBuild,atksBuild,mageBuild,hateBuild],[critBuild,mageBuild,atksBuild],[tankBuild,hateBuild,lethBuild],[mageBuild,atksBuild,critBuild],[lethBuild,hateBuild,critBuild],[critBuild,atksBuild,lethBuild],[tankBuild,critBuild,lethBuild,hateBuild],[atksBuild,mageBuild,critBuild],[tankBuild,mageBuild],[lethBuild,hateBuild,critBuild],[tankBuild,mageBuild],[mageBuild,tankBuild],[mageBuild,tankBuild],[atksBuild,critBuild,lethBuild],[suppBuild,mageBuild],[suppBuild,mageBuild],[tankBuild,mageBuild],[mageBuild,tankBuild],[tankBuild,mageBuild],[atksBuild,critBuild,lethBuild,tankBuild,mageBuild],[lethBuild,critBuild,atksBuild,mageBuild],[tankBuild,mageBuild,suppBuild],[mageBuild,suppBuild,tankBuild],[mageBuild,suppBuild],[critBuild,lethBuild,atksBuild,tankBuild],[tankBuild,mageBuild],[atksBuild,mageBuild,tankBuild],[atksBuild,mageBuild,suppBuild],[suppBuild,atksBuild,critBuild,lethBuild,hateBuild],[lethBuild,tankBuild,hateBuild,atksBuild,critBuild],[tankBuild,mageBuild],[atksBuild,critBuild,lethBuild,tankBuild,hateBuild],[suppBuild,mageBuild],[tankBuild,hateBuild],[tankBuild,mageBuild,critBuild,lethBuild],[tankBuild,hateBuild],[lethBuild,hateBuild,tankBuild],[lethBuild,critBuild],[atksBuild,critBuild,lethBuild],[suppBuild,tankBuild,mageBuild],[tankBuild,mageBuild,atksBuild],[lethBuild,hateBuild,tankBuild],[tankBuild,mageBuild],[suppBuild,mageBuild,atksBuild],[tankBuild,lethBuild,hateBuild,critBuild],[lethBuild,critBuild,mageBuild,tankBuild],[hateBuild,critBuild,lethBuild],[mageBuild,tankBuild],[tankBuild,mageBuild,atksBuild],[lethBuild,critBuild,hateBuild],[tankBuild,mageBuild],[lethBuild,critBuild,atksBuild,tankBuild],[suppBuild,mageBuild,atksBuild],[hateBuild,tankBuild,lethBuild,critBuild],[lethBuild,mageBuild,tankBuild,critBuild,atksBuild],[suppBuild,mageBuild,tankBuild,hateBuild],[mageBuild,critBuild,atksBuild,tankBuild,hateBuild],[tankBuild,mageBuild],[tankBuild,lethBuild,critBuild],[atksBuild,critBuild,lethBuild],[atksBuild,critBuild,mageBuild,tankBuild],[suppBuild,mageBuild],[suppBuild,mageBuild,atksBuild],[tankBuild,mageBuild,suppBuild],[suppBuild,tankBuild,mageBuild,atksBuild,critBuild,hateBuild],[mageBuild],[suppBuild,tankBuild,mageBuild,atksBuild],[mageBuild,tankBuild],[lethBuild,critBuild,hateBuild],[atksBuild,tankBuild,suppBuild,hateBuild],[atksBuild,mageBuild,tankBuild,critBuild],[tankBuild,suppBuild,atksBuild,critBuild,mageBuild,hateBuild],[atksBuild,critBuild,lethBuild],[atksBuild,critBuild,lethBuild,hateBuild,tankBuild],[atksBuild,hateBuild,critBuild,tankBuild,lethBuild],[atksBuild,mageBuild,critBuild],[atksBuild,critBuild,mageBuild,lethBuild],[lethBuild,mageBuild,suppBuild,tankBuild,atksBuild,critBuild,hateBuild],[atksBuild,critBuild,lethBuild,tankBuild,hateBuild],[atksBuild,critBuild,mageBuild,lethBuild],[atksBuild,critBuild,lethBuild,hateBuild],[atksBuild,tankBuild,mageBuild],[mageBuild],[tankBuild,atksBuild,mageBuild],[tankBuild,critBuild,atksBuild,lethBuild],[atksBuild,critBuild,lethBuild,hateBuild],[mageBuild,atksBuild],[mageBuild,tankBuild,suppBuild],[tankBuild,mageBuild,atksBuild,lethBuild,critBuild,hateBuild],[suppBuild,mageBuild,atksBuild,hateBuild,tankBuild,lethBuild,critBuild],[tankBuild,lethBuild,hateBuild,mageBuild,critBuild],[critBuild,lethBuild,atksBuild],[mageBuild,atksBuild],[atksBuild,critBuild,lethBuild,hateBuild],[critBuild,atksBuild,mageBuild,tankBuild,hateBuild,lethBuild],[critBuild,atksBuild,lethBuild,tankBuild,hateBuild],[tankBuild,hateBuild,critBuild,lethBuild],[suppBuild,mageBuild,critBuild,atksBuild],[suppBuild,tankBuild,mageBuild],[lethBuild,critBuild,hateBuild],[atksBuild,hateBuild,critBuild,lethBuild],[mageBuild,atksBuild],[suppBuild,mageBuild],[mageBuild,tankBuild],[mageBuild]];
    var randomChampionNumber = Math.floor(Math.random() * champions.length);
    var capitalizedChampion = champions[randomChampionNumber].toLocaleLowerCase();
    image.src = 'https://static.bigbrain.gg/assets/lol/riot_static/13.14.1/img/champion/'+clarefiyName(capitalizeName(capitalizedChampion))+'.webp';
    if (getExactBuild === true) {
        var randomBuild = championBuild[randomChampionNumber][Math.floor(Math.random() * championBuild[randomChampionNumber].length)];
    } else {
        var randomBuild = build[Math.floor(Math.random() * build.length)];
    }
    var randomLegendaryItems = [];
    var randomBoots = randomBuild[2][Math.floor(Math.random() * randomBuild[2].length)];
    var randomMythic = randomBuild[1][Math.floor(Math.random() * randomBuild[1].length)];
    var randomRune = randomBuild[0][Math.floor(Math.random() * randomBuild[0].length)];
    var randomLane = Math.floor(Math.random() * (lanes.length-1));
    addUniqueLegendary(randomLegendaryItems,randomBuild[3].length-1);
    document.getElementById("erandomChampion").innerHTML = "Champion: " + capitalizeName(capitalizedChampion);
    document.getElementById("erandomLane").innerHTML = "Lane: " + "<img src=" + 'https://static.bigbrain.gg/assets/lol/roles/' + lanes_icon_name[randomLane] + '.svg' +" width=\"25\" height=\"25\">" + " " + lanes[randomLane];
    document.getElementById("erandomBuild").innerHTML = "Runes: " + "<img src=" + getItemIcon(randomRune) +" width=\"30\" height=\"30\">" + randomRune + "<br>1.Mythic: "+ "<img src=" + getItemIcon(randomMythic) +" width=\"20\" height=\"20\">" + randomMythic +"<br>2.Boots: " + "<img src=" + getItemIcon(randomBoots) +" width=\"20\" height=\"20\">" + randomBoots +"<br>3.Item: " + "<img src=" + getItemIcon(randomBuild[3][randomLegendaryItems[0]]) +" width=\"20\" height=\"20\">" + randomBuild[3][randomLegendaryItems[0]] + "<br>4.Item: " + "<img src=" + getItemIcon(randomBuild[3][randomLegendaryItems[1]]) +" width=\"20\" height=\"20\">" + randomBuild[3][randomLegendaryItems[1]] + "<br>5.Item: " + "<img src=" + getItemIcon(randomBuild[3][randomLegendaryItems[2]]) +" width=\"20\" height=\"20\">" + randomBuild[3][randomLegendaryItems[2]] + "<br>6.Item: " + "<img src=" + getItemIcon(randomBuild[3][randomLegendaryItems[3]]) +" width=\"20\" height=\"20\">" + randomBuild[3][randomLegendaryItems[3]];
    
    thisChampion = [capitalizeName(capitalizedChampion),'https://static.bigbrain.gg/assets/lol/riot_static/13.14.1/img/champion/'+clarefiyName(capitalizeName(capitalizedChampion))+'.webp',lanes[randomLane],randomRune,randomMythic,randomBoots,randomBuild[3][randomLegendaryItems[0]],randomBuild[3][randomLegendaryItems[1]],randomBuild[3][randomLegendaryItems[2]],randomBuild[3][randomLegendaryItems[3]], lanes_icon_name[randomLane]];
}
function rerollChampion() {
    lastChampion = thisChampion;
    generateRandomBuild(true);
}
function rerollRandomChampion() {
    lastChampion = thisChampion;
    generateRandomBuild(false);
}
function back() {
    if (lastChampion == [])
        lastChampion = thisChampion;
    var image = document.getElementById("image");
    image.src = lastChampion[1];
    document.getElementById("erandomChampion").innerHTML = "Champion: " +lastChampion[0];
    document.getElementById("erandomLane").innerHTML = "Lane: " + "<img src=" + 'https://static.bigbrain.gg/assets/lol/roles/' + lastChampion[10] + '.svg' +" width=\"25\" height=\"25\">" + " " + lastChampion[2];
    document.getElementById("erandomBuild").innerHTML = "Runes: "+"<img src=" + getItemIcon(lastChampion[3]) +" width=\"30\" height=\"30\">" + lastChampion[3]+ "<br>1.Mythic: "+"<img src="+getItemIcon(lastChampion[4]) +" width=\"20\" height=\"20\">" + lastChampion[4]+ "<br>2.Boots: "+"<img src="+getItemIcon(lastChampion[5]) +" width=\"20\" height=\"20\">" + lastChampion[5]+"<br>3.Item: "+"<img src="+getItemIcon(lastChampion[6]) +" width=\"20\" height=\"20\">" + lastChampion[6]+"<br>4.Item: "+"<img src="+getItemIcon(lastChampion[7]) +" width=\"20\" height=\"20\">" + lastChampion[7]+"<br>5.Item: "+"<img src="+getItemIcon(lastChampion[8]) +" width=\"20\" height=\"20\">" + lastChampion[8]+"<br>6.Item: "+"<img src="+getItemIcon(lastChampion[9]) +" width=\"20\" height=\"20\">" + lastChampion[9];
    thisChampion = lastChampion;
}
function save() 
{
    savedChampion = thisChampion;
}
function load() 
{
    lastChampion = thisChampion;
    if (savedChampion != [])  
        var image = document.getElementById("image");
        image.src = savedChampion[1];
        document.getElementById("erandomChampion").innerHTML = "Champion: " +savedChampion[0];
        document.getElementById("erandomLane").innerHTML = "Lane: " + "<img src=" + 'https://static.bigbrain.gg/assets/lol/roles/' + savedChampion[10] + '.svg' +" width=\"25\" height=\"25\">" + " " + savedChampion[2];
        document.getElementById("erandomBuild").innerHTML = "Runes: "+"<img src=" + getItemIcon(savedChampion[3]) +" width=\"30\" height=\"30\">" + savedChampion[3]+ "<br>1.Mythic: "+"<img src="+getItemIcon(savedChampion[4]) +" width=\"20\" height=\"20\">" + savedChampion[4]+ "<br>2.Boots: "+"<img src="+getItemIcon(savedChampion[5]) +" width=\"20\" height=\"20\">" + savedChampion[5]+"<br>3.Item: "+"<img src="+getItemIcon(savedChampion[6]) +" width=\"20\" height=\"20\">" + savedChampion[6]+"<br>4.Item: "+"<img src="+getItemIcon(savedChampion[7]) +" width=\"20\" height=\"20\">" + savedChampion[7]+"<br>5.Item: "+"<img src="+getItemIcon(savedChampion[8]) +" width=\"20\" height=\"20\">" + savedChampion[8]+"<br>6.Item: "+"<img src="+getItemIcon(savedChampion[9]) +" width=\"20\" height=\"20\">" + savedChampion[9];
        thisChampion = savedChampion;
}