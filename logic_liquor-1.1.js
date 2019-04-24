const cartelPercent = 0.07;
const barrelSpace = 200;
/* As name suggests input numbers get results */
var calculator = async () => {
    await liquorInfo();
    var liquorType_Dropdown = ById('dropdown-liquor').value;
    var cartel_Dropdown = ById('dropdown-cartel').value;
    var gangPerk_Dropdown = ById('dropdown-gangperk').value;
    var infamyPerk_Dropdown = ById('dropdown-infamyperk').value;
    var inputTotal = ById('input-total').value;
    var inputTotalSpace = ById('outputliquor1').innerHTML;
    var inputTotalBarrel = (ById('outputliquor4').innerHTML);
    var gPerkGain = gangPerk()*(liquorSell*inputTotal);
    var gPerkGainSpace = gangPerk()*(liquorSell*inputTotalSpace);
    var gPerkGainBarrel = (gangPerk()*(liquorSell*inputTotalBarrel));
    var infamyPerkGain = infamyPerk()*(liquorSell*inputTotal);
    var infamyPerkGainSpace = infamyPerk()*(liquorSell*inputTotalSpace);
    var infamyPerkGainBarrel = (infamyPerk()*(liquorSell*inputTotalBarrel));
    var allGain = ((liquorSell*inputTotal)+gPerkGain)+(infamyPerk()*((liquorSell*inputTotal)+gPerkGain));
    var allGainSpace = ((liquorSell*inputTotalSpace)+gPerkGainSpace)+(infamyPerk()*((liquorSell*inputTotalSpace)+gPerkGainSpace));
    var allGainBarrel = ((liquorSell*inputTotalBarrel)+gPerkGainBarrel)+(infamyPerk()*((liquorSell*inputTotalBarrel)+gPerkGainBarrel));
    if (cartel_Dropdown === "yes" && gangPerk_Dropdown !== "none") {
        if (infamyPerk_Dropdown !== "none") {
            let sell = allGain
            let sellSpace = allGainSpace
            let sellBarrel = (allGainBarrel);
            output(sell, sellSpace, sellBarrel);
        } else {
            let sell = ((liquorSell*inputTotal)+gPerkGain)
            let sellSpace = (liquorSell*inputTotalSpace)+gPerkGainSpace
            let sellBarrel = ((liquorSell*inputTotalBarrel)+gPerkGainBarrel);
            output(sell, sellSpace, sellBarrel);
        };
    };
    if (cartel_Dropdown === "yes" && gangPerk_Dropdown === "none") {
        if (infamyPerk_Dropdown !== "none") {
            let sell = (liquorSell*inputTotal)+infamyPerkGain
            let sellSpace = (liquorSell*inputTotalSpace)+infamyPerkGainSpace
            let sellBarrel = ((liquorSell*inputTotalBarrel)+infamyPerkGainBarrel);
            output(sell, sellSpace, sellBarrel);
        } else {
            let sell = liquorSell*inputTotal
            let sellSpace = liquorSell*inputTotalSpace
            let sellBarrel = (liquorSell*inputTotalBarrel);
            output(sell, sellSpace, sellBarrel);
        };
    };
    if (cartel_Dropdown === "no" && gangPerk_Dropdown !== "none") {
        if (infamyPerk_Dropdown !== "none") {
            let cartelTake = allGain*cartelPercent
            let cartelTakeSpace = allGainSpace*cartelPercent
            let cartelTakeBarrel = allGainBarrel*cartelPercent;
            let sell = allGain-cartelTake
            let sellSpace = allGainSpace-cartelTakeSpace
            let sellBarrel = (allGainBarrel-cartelTakeBarrel);
            output(sell, sellSpace, sellBarrel, cartelTake, cartelTakeSpace, cartelTakeBarrel);
        } else {
            let cartelTake = ((liquorSell*inputTotal)+gPerkGain)*cartelPercent
            let cartelTakeSpace = ((liquorSell*inputTotalSpace)+gPerkGainSpace)*cartelPercent
            let cartelTakeBarrel = ((liquorSell*inputTotalBarrel)+gPerkGainBarrel)*cartelPercent
            let sell = ((liquorSell*inputTotal)+gPerkGain)-cartelTake
            let sellSpace = ((liquorSell*inputTotalSpace)+gPerkGainSpace)-cartelTake
            let sellBarrel = ((liquorSell*inputTotalBarrel)+gPerkGainBarrel)-cartelTake;
            output(sell, sellSpace, sellBarrel, cartelTake, cartelTakeSpace, cartelTakeBarrel);
        };
    };
    if (cartel_Dropdown === "no" && gangPerk_Dropdown === "none") {
        if (infamyPerk_Dropdown !== "none") {
            let cartelTake = ((liquorSell*inputTotal)+infamyPerkGain)*cartelPercent
            let cartelTakeSpace = ((liquorSell*inputTotalSpace)+infamyPerkGainSpace)*cartelPercent
            let cartelTakeBarrel = (((liquorSell*inputTotalBarrel)+infamyPerkGainBarrel)*cartelPercent);
            let sell = ((liquorSell*inputTotal)+infamyPerkGain)-cartelTake;
            let sellSpace = ((liquorSell*inputTotalSpace)+infamyPerkGainSpace)-cartelTakeSpace
            let sellBarrel = ((liquorSell*inputTotalBarrel)+infamyPerkGainBarrel)-cartelTakeBarrel;
            output(sell, sellSpace, sellBarrel, cartelTake, cartelTakeSpace, cartelTakeBarrel);
        } else {
            let cartelTake = (liquorSell*inputTotal)*cartelPercent
            let cartelTakeSpace = (liquorSell*inputTotalSpace)*cartelPercent
            let cartelTakeBarrel = (liquorSell*inputTotalBarrel)*cartelPercent;
            let sell = (liquorSell*inputTotal)-cartelTake
            let sellSpace = (liquorSell*inputTotalSpace)-cartelTakeSpace
            let sellBarrel = (liquorSell*inputTotalBarrel)-cartelTakeBarrel;
            output(sell, sellSpace, sellBarrel, cartelTake, cartelTakeSpace, cartelTakeBarrel);
        };
    };
};
/* */
var outputvideo = () => {
    let liquorType = ById('dropdown-liquor').value;
    if (liquorType === "New Make Scotch" || liquorType === "Scotch" || liquorType === "Scotch 15 Year" || liquorType === "Scotch 25 Year") {ById('tutorial').src = "https://www.youtube.com/embed/SkmHOkP5B-Q"};
    if (liquorType === "Whiskey") {ById('tutorial').src = "https://www.youtube.com/embed/-50NdPawLVY"};
    if (liquorType === "Moonshine") {ById('tutorial').src = "https://www.youtube.com/embed/tgbNymZ7vqY"};
};
/* Outputs sell results to html */
var output = async (sell, sellSpace, sellBarrel, cartelTake, cartelTakeSpace, cartelTakeBarrel) => {
    ById('output').innerHTML  = formatter.format(sell);
    ById('output-space').innerHTML  = formatter.format(sellSpace);
    ById('output-barrel').innerHTML  = formatter.format(sellBarrel);
    ById('outputinfamy').innerHTML = (sell/250).toFixed(2);
    ById('outputinfamy-space').innerHTML = (sellSpace/250).toFixed(2);
    ById('outputinfamy-barrel').innerHTML = (sellBarrel/250).toFixed(2);
    if (ById('dropdown-cartel').value === "yes") {
        ById('outputcartel').innerHTML = formatter.format(0)
        ById('outputcartel-space').innerHTML = formatter.format(0)
        ById('outputcartel-barrel').innerHTML = formatter.format(0); 
    };
    if (ById('dropdown-cartel').value === "no") {
        ById('outputcartel').innerHTML = formatter.format(cartelTake)
        ById('outputcartel-space').innerHTML = formatter.format(cartelTakeSpace)
        ById('outputcartel-barrel').innerHTML = formatter.format(cartelTakeBarrel);
    };
};
/* I'm not going to explain this function seeing I play on making it better later */
var outputSpace = async (totalSpace, trunkSpace, backpackSpace) => {
    var vehicle = ById('dropdown-vehicle').value;
    var backpack = ById('dropdown-backpack').value;
    var customSpace = ById('input-space').value;
    var liquorType = ById('dropdown-liquor').value;
    var backpackSpace = 0;
    var trunkSpace = 0;
    var inputBarrel = ById('input-barrel').value;
    var formula = (inputBarrel*barrelSpace)+(communityGoal()*(inputBarrel*barrelSpace));
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
        if (liquorType != "select") {
            await $.get(myjsonitem, function(data, textStatus, jqXHR) {
                ingredients = data.items[liquorType].ingredients;
                Global.totalSpace = parseFloat(trunkSpace)+parseFloat(backpackSpace)+parseFloat(customSpace);
                ById('totalCount').innerHTML = Global.totalSpace;
                ById('vehicleCount2').innerHTML = trunkSpace;
                ById('backpackCount2').innerHTML = backpackSpace;
                ById('labelliquortype4').innerHTML = ById('labelliquortype3').innerHTML = ById('labelliquortype2').innerHTML = ById('labelliquortype').innerHTML = liquorType;
                ById('outputliquor1').innerHTML = ((Global.totalSpace/(data.items[ingredients[0]].weight))/ingredients.length).toFixed(0);
                ById('outputliquor2').innerHTML = ((trunkSpace/(data.items[ingredients[0]].weight))/ingredients.length).toFixed(0);
                ById('outputliquor3').innerHTML = ((backpackSpace/(data.items[ingredients[0]].weight))/ingredients.length).toFixed(0);
                ById('outputliquor4').innerHTML = ((formula/(data.items[ingredients[0]].weight))/ingredients.length).toFixed(0);
                ById('type4').src = ById('type3').src = ById('type2').src = ById('type1').src = "../images/"+data.items[liquorType].image;
                if (ingredients[0] != undefined) {
                    ById('ing4').src = ById('ing3').src = ById('ing2').src = ById('ing1').src = "../images/"+data.items[ingredients[0]].image;
                    ById('labelmat10').innerHTML = ById('labelmat7').innerHTML = ById('labelmat4').innerHTML = ById('labelmat1').innerHTML = ingredients[0];
                    ById('outputmat1').innerHTML = ((Global.totalSpace/(data.items[ingredients[0]].weight))/ingredients.length).toFixed(0);
                    ById('outputmat4').innerHTML = ((trunkSpace/(data.items[ingredients[0]].weight))/ingredients.length).toFixed(0)
                    ById('outputmat7').innerHTML = ((backpackSpace/(data.items[ingredients[0]].weight))/ingredients.length).toFixed(0)
                    ById('outputmat10').innerHTML = ((formula/(data.items[ingredients[0]].weight))/ingredients.length).toFixed(0);
                } else {
                    ById('ing4').src = ById('ing3').src = ById('ing2').src = ById('ing1').src = ById('labelmat10').innerHTML = ById('labelmat7').innerHTML = ById('labelmat4').innerHTML = ById('labelmat1').innerHTML = "";
                    ById('outputmat1').innerHTML = ById('outputmat4').innerHTML = ById('outputmat7').innerHTML = ById('outputmat10').innerHTML = "";
                };
                if (ingredients[1] != undefined) {
                    ById('ing8').src = ById('ing7').src = ById('ing6').src = ById('ing5').src = "../images/"+data.items[ingredients[1]].image;
                    ById('labelmat11').innerHTML = ById('labelmat8').innerHTML = ById('labelmat5').innerHTML = ById('labelmat2').innerHTML = ingredients[1];
                    ById('outputmat2').innerHTML = ((Global.totalSpace/(data.items[ingredients[1]].weight))/ingredients.length).toFixed(0);
                    ById('outputmat5').innerHTML = ((trunkSpace/(data.items[ingredients[1]].weight))/ingredients.length).toFixed(0)
                    ById('outputmat8').innerHTML = ((backpackSpace/(data.items[ingredients[1]].weight))/ingredients.length).toFixed(0)
                    ById('outputmat11').innerHTML = ((formula/(data.items[ingredients[1]].weight))/ingredients.length).toFixed(0);
                } else {
                    ById('ing8').src = ById('ing7').src = ById('ing6').src = ById('ing5').src = ById('labelmat11').innerHTML = ById('labelmat8').innerHTML = ById('labelmat5').innerHTML = ById('labelmat2').innerHTML = "";
                    ById('outputmat2').innerHTML = ById('outputmat5').innerHTML = ById('outputmat8').innerHTML = ById('outputmat11').innerHTML = "";
                };
                if (ingredients[2] != undefined) {
                    ById('ing12').src = ById('ing11').src = ById('ing10').src = ById('ing9').src = "../images/"+data.items[ingredients[2]].image;
                    ById('labelmat12').innerHTML = ById('labelmat9').innerHTML = ById('labelmat6').innerHTML = ById('labelmat3').innerHTML = ingredients[2];
                    ById('outputmat3').innerHTML = ((Global.totalSpace/(data.items[ingredients[2]].weight))/ingredients.length).toFixed(0);
                    ById('outputmat6').innerHTML = ((trunkSpace/(data.items[ingredients[2]].weight))/ingredients.length).toFixed(0)
                    ById('outputmat9').innerHTML = ((backpackSpace/(data.items[ingredients[2]].weight))/ingredients.length).toFixed(0)
                    ById('outputmat12').innerHTML = ((formula/(data.items[ingredients[2]].weight))/ingredients.length).toFixed(0);
                } else {
                    ById('ing12').src = ById('ing11').src = ById('ing10').src = ById('ing9').src = ById('labelmat12').innerHTML = ById('labelmat9').innerHTML = ById('labelmat6').innerHTML = ById('labelmat3').innerHTML = "";
                    ById('outputmat3').innerHTML = ById('outputmat6').innerHTML = ById('outputmat9').innerHTML = ById('outputmat12').innerHTML = "";
                };
                if (ingredients[3] != undefined) {
                    ById('ing16').src = ById('ing15').src = ById('ing14').src = ById('ing13').src = "../images/"+data.items[ingredients[3]].image;
                    ById('labelmat16').innerHTML = ById('labelmat15').innerHTML = ById('labelmat14').innerHTML = ById('labelmat13').innerHTML = ingredients[3];
                    ById('outputmat13').innerHTML = ((Global.totalSpace/(data.items[ingredients[3]].weight))/ingredients.length).toFixed(0);
                    ById('outputmat14').innerHTML = ((trunkSpace/(data.items[ingredients[3]].weight))/ingredients.length).toFixed(0)
                    ById('outputmat15').innerHTML = ((backpackSpace/(data.items[ingredients[3]].weight))/ingredients.length).toFixed(0)
                    ById('outputmat16').innerHTML = ((formula/(data.items[ingredients[3]].weight))/ingredients.length).toFixed(0);
                } else {
                    ById('ing16').src = ById('ing15').src = ById('ing14').src = ById('ing13').src = ById('labelmat16').innerHTML = ById('labelmat15').innerHTML = ById('labelmat14').innerHTML = ById('labelmat13').innerHTML = "";
                    ById('outputmat13').innerHTML = ById('outputmat14').innerHTML = ById('outputmat15').innerHTML = ById('outputmat16').innerHTML = "";
                };
                if (liquorType === "Moonshine") {
                    ById('outputliquor4').innerHTML = "Can't put in Barrels"
                    ById('outputmat16').innerHTML = ById('outputmat12').innerHTML = ById('outputmat11').innerHTML = ById('outputmat10').innerHTML = "";
                };
            });
        };
    };
    if (ById('dropdown-liquor').value != "select") {
        await findSpace();
    };
};
/* When you click the Calculate Button */
document.addEventListener('DOMContentLoaded', async () => {
    $.get(myjsoncalc, function(data, textStatus, jqXHR) {
        ById('totalCalculations').innerHTML = parseInt(data.number);
    });
    ById('calculate').addEventListener('click', async () => {
        if (ById('dropdown-liquor').value === "select") {
            ById('dropliquor').style.borderColor = "red";
        } else {
            ById('dropliquor').removeAttribute("style")
        };
        await outputSpace();
        await calculator();
    });
});