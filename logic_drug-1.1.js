const cartelPercent = 0.2;
/* As name suggests input numbers get results */
var calculator = async () => {
    await drugInfo();
    var drugType_Dropdown = ById('dropdown-drug').value;
    var cartel_Dropdown = ById('dropdown-cartel').value;
    var gangPerk_Dropdown = ById('dropdown-gangperk').value;
    var infamyPerk_Dropdown = ById('dropdown-infamyperk').value;
    var inputTotal = ById('input-total').value;
    var inputTotalSpace = ById('outputdrug1').innerHTML;
    console.log(ById('outputdrug1').innerHTML);
    console.log(inputTotalSpace);
    var gPerkGain = gangPerk()*(drugSell*inputTotal);
    var gPerkGainSpace = gangPerk()*(drugSell*inputTotalSpace);
    var infamyPerkGain = infamyPerk()*(drugSell*inputTotal);
    var infamyPerkGainSpace = infamyPerk()*(drugSell*inputTotalSpace);
    var allGain = ((drugSell*inputTotal)+gPerkGain)+(infamyPerk()*((drugSell*inputTotal)+gPerkGain));
    var allGainSpace = ((drugSell*inputTotalSpace)+gPerkGainSpace)+(infamyPerk()*((drugSell*inputTotalSpace)+gPerkGainSpace));
    if (cartel_Dropdown === "yes" && gangPerk_Dropdown !== "none") {
        if (infamyPerk_Dropdown !== "none") {
            let sell = allGain
            let sellSpace = allGainSpace
            output(sell, sellSpace)
        } else {
            sell = ((drugSell*inputTotal)+gPerkGain)
            sellSpace = (drugSell*inputTotalSpace)+gPerkGainSpace
            output(sell, sellSpace)
        };
    };
    if (cartel_Dropdown === "yes" && gangPerk_Dropdown === "none") {
        if (infamyPerk_Dropdown !== "none") {
            let sell = (drugSell*inputTotal)+infamyPerkGain
            let sellSpace = (drugSell*inputTotalSpace)+infamyPerkGainSpace
            output(sell, sellSpace)
        } else {
            let sell = drugSell*inputTotal
            let sellSpace = drugSell*inputTotalSpace
            output(sell, sellSpace)
        };
    };
    if (cartel_Dropdown === "no" && gangPerk_Dropdown !== "none") {
        if (infamyPerk_Dropdown !== "none") {
            let cartelTake = allGain*cartelPercent
            let sell = allGain-cartelTake
            let cartelTakeSpace = allGainSpace*cartelPercent
            let sellSpace = allGainSpace-cartelTakeSpace
            output(sell, sellSpace, cartelTake, cartelTakeSpace)
        } else {
            let cartelTake = ((drugSell*inputTotal)+gPerkGain)*cartelPercent
            let sell = ((drugSell*inputTotal)+gPerkGain)-cartelTake
            let cartelTakeSpace = ((drugSell*inputTotalSpace)+gPerkGainSpace)*cartelPercent
            let sellSpace = ((drugSell*inputTotalSpace)+gPerkGainSpace)-cartelTake
            output(sell, sellSpace, cartelTake, cartelTakeSpace)
        };
    };
    if (cartel_Dropdown === "no" && gangPerk_Dropdown === "none") {
        if (infamyPerk_Dropdown !== "none") {
            let cartelTake = ((drugSell*inputTotal)+infamyPerkGain)*cartelPercent
            let sell = ((drugSell*inputTotal)+infamyPerkGain)-cartelTake;
            let cartelTakeSpace = ((drugSell*inputTotalSpace)+infamyPerkGainSpace)*cartelPercent
            let sellSpace = ((drugSell*inputTotalSpace)+infamyPerkGainSpace)-cartelTakeSpace
            output(sell, sellSpace, cartelTake, cartelTakeSpace)
        } else {
            let cartelTake = (drugSell*inputTotal)*cartelPercent
            let sell = (drugSell*inputTotal)-cartelTake
            let cartelTakeSpace = (drugSell*inputTotalSpace)*cartelPercent
            let sellSpace = (drugSell*inputTotalSpace)-cartelTakeSpace
            output(sell, sellSpace, cartelTake, cartelTakeSpace);
        };
    };
};
/* */
var outputvideo = () => {
    let drugType = ById('dropdown-drug').value;
    if (drugType === "Meth") {ById('tutorial').src = "https://www.youtube.com/embed/SkmHOkP5B-Q"};
    if (drugType === "Crank") {ById('tutorial').src = "https://www.youtube.com/embed/YbJOTdZBX1g"};
    if (drugType === "Heroin") {ById('tutorial').src = "https://www.youtube.com/embed/9bp1ehUoWTg?start=13"};
    if (drugType === "Cocaine") {ById('tutorial').src = "https://www.youtube.com/embed/-50NdPawLVY"};
    if (drugType === "Marijuana") {ById('tutorial').src = "https://www.youtube.com/embed/tgbNymZ7vqY"};
};
/* Outputs sell results to html */
var output = async (sell, sellSpace, cartelTake, cartelTakeSpace) => {
    ById('output').innerHTML  = formatter.format(sell);
    ById('output-space').innerHTML  = formatter.format(sellSpace);
    ById('outputinfamy').innerHTML = (sell/250).toFixed(2);
    ById('outputinfamy-space').innerHTML = (sellSpace/250).toFixed(2);
    if (ById('dropdown-cartel').value === "yes") {
        ById('outputcartel').innerHTML = formatter.format(0)
        ById('outputcartel-space').innerHTML = formatter.format(0)  
    };
    if (ById('dropdown-cartel').value === "no") {
        ById('outputcartel').innerHTML = formatter.format(cartelTake)
        ById('outputcartel-space').innerHTML = formatter.format(cartelTakeSpace)
    };
};
/* I'm not going to explain this function seeing I play on making it better later */
var outputSpace = async (totalSpace, trunkSpace, backpackSpace) => {
    var vehicle = ById('dropdown-vehicle').value;
    var backpack = ById('dropdown-backpack').value;
    var customSpace = ById('input-space').value;
    var drugType = ById('dropdown-drug').value;
    var backpackSpace = 0;
    var trunkSpace = 0;
    /* */
    var findSpace = async () => {
        await $.get(myjsoninv, function(data, textStatus, jqXHR) {
            if (backpack != "select") {
                backpackSpace = parseInt(data.backpack[backpack].inventory)
            };
            if (vehicle != "select") {
                trunkSpace = parseInt(data.cars[vehicle].inventory)
            };
        });
        backpackSpace = (backpackSpace).toFixed(0);
        trunkSpace = (trunkSpace+(trunkSpace*communityGoal())).toFixed(0);
        var drugType = ById('dropdown-drug').value;
        if (drugType != "select") {
            await $.get(myjsonitem, function(data, textStatus, jqXHR) {
                ingredients = data.items[drugType].ingredients;
                Global.totalSpace = parseFloat(trunkSpace)+parseFloat(backpackSpace)+parseFloat(customSpace);
                ById('totalCount').innerHTML = Global.totalSpace;
                ById('vehicleCount2').innerHTML = trunkSpace;
                ById('backpackCount2').innerHTML = backpackSpace;
                ById('labeldrugtype3').innerHTML = ById('labeldrugtype2').innerHTML = ById('labeldrugtype').innerHTML = drugType;
                ById('outputdrug1').innerHTML = ((Global.totalSpace/(data.items[ingredients[0]].weight))/ingredients.length).toFixed(0);
                ById('outputdrug2').innerHTML = ((trunkSpace/(data.items[ingredients[0]].weight))/ingredients.length).toFixed(0);
                ById('outputdrug3').innerHTML = ((backpackSpace/(data.items[ingredients[0]].weight))/ingredients.length).toFixed(0);
                ById('type3').src = ById('type2').src = ById('type1').src = "../images/"+data.items[drugType].image;
                if (ingredients[0] != undefined) {
                    ById('ing3').src = ById('ing2').src = ById('ing1').src = "../images/"+data.items[ingredients[0]].image
                    ById('labelmat7').innerHTML = ById('labelmat4').innerHTML = ById('labelmat1').innerHTML = ingredients[0]
                    ById('outputmat1').innerHTML = ((Global.totalSpace/(data.items[ingredients[0]].weight))/ingredients.length).toFixed(0)
                    ById('outputmat4').innerHTML = ((trunkSpace/(data.items[ingredients[0]].weight))/ingredients.length).toFixed(0)
                    ById('outputmat7').innerHTML = ((backpackSpace/(data.items[ingredients[0]].weight))/ingredients.length).toFixed(0)
                } else {
                    ById('ing3').src = ById('ing2').src = ById('ing1').src = ById('labelmat7').innerHTML = ById('labelmat4').innerHTML = ById('labelmat1').innerHTML = ""
                    ById('outputmat1').innerHTML = ById('outputmat4').innerHTML = ById('outputmat7').innerHTML = ""
                };
                if (ingredients[1] != undefined) {
                    ById('ing6').src = ById('ing5').src = ById('ing4').src = "../images/"+data.items[ingredients[1]].image
                    ById('labelmat8').innerHTML = ById('labelmat5').innerHTML = ById('labelmat2').innerHTML = ingredients[1]
                    ById('outputmat2').innerHTML = ((Global.totalSpace/(data.items[ingredients[1]].weight))/ingredients.length).toFixed(0);
                    ById('outputmat5').innerHTML = ((trunkSpace/(data.items[ingredients[1]].weight))/ingredients.length).toFixed(0)
                    ById('outputmat8').innerHTML = ((backpackSpace/(data.items[ingredients[1]].weight))/ingredients.length).toFixed(0)
                } else {
                    ById('ing6').src = ById('ing5').src = ById('ing4').src = ById('labelmat8').innerHTML = ById('labelmat5').innerHTML = ById('labelmat2').innerHTML = ""
                    ById('outputmat2').innerHTML = ById('outputmat5').innerHTML = ById('outputmat8').innerHTML = ""
                };
                if (ingredients[2] != undefined) {
                    ById('ing9').src = ById('ing8').src = ById('ing7').src = "../images/"+data.items[ingredients[2]].image
                    ById('labelmat9').innerHTML = ById('labelmat6').innerHTML = ById('labelmat3').innerHTML = ingredients[2]
                    ById('outputmat3').innerHTML = ((Global.totalSpace/(data.items[ingredients[2]].weight))/ingredients.length).toFixed(0);
                    ById('outputmat6').innerHTML = ((trunkSpace/(data.items[ingredients[2]].weight))/ingredients.length).toFixed(0)
                    ById('outputmat9').innerHTML = ((backpackSpace/(data.items[ingredients[2]].weight))/ingredients.length).toFixed(0)
                } else {
                    ById('ing9').src = ById('ing8').src = ById('ing7').src = ById('labelmat9').innerHTML = ById('labelmat6').innerHTML = ById('labelmat3').innerHTML = ""
                    ById('outputmat3').innerHTML = ById('outputmat6').innerHTML = ById('outputmat9').innerHTML = ""
                };
            });
        };
    };
    if (ById('dropdown-drug').value != "select") {
        await findSpace();
    };
};
/* When you click the Calculate Button */
document.addEventListener('DOMContentLoaded', async () => {
    $.get(myjsoncalc, function(data, textStatus, jqXHR) {
        ById('totalCalculations').innerHTML = parseInt(data.number);
    });
    ById('calculate').addEventListener('click', async () => {
        if (ById('dropdown-drug').value === "select") {
            ById('dropdrug').style.borderColor = "red";
        } else {
            ById('dropdrug').removeAttribute("style")
        };
        await outputSpace();
        await calculator();
    });
});