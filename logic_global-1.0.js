const myjsonitem = "https://api.myjson.com/bins/12qenq";
const myjsoninv = "https://api.myjson.com/bins/1fp9iy";
const myjsoncalc = "https://api.myjson.com/bins/ba33u";
/* Formats an int to be look like USD */
const formatter = new Intl.NumberFormat ('en-US', { style:'currency', currency:'USD', minimumFractionDigits:2 } );
/* Global Variable to pass values into global scope */
var Global = {};
/* Shortens document.getElementById */
var ById = id => {return document.getElementById(id)};
/* Returns gangperk value */
var gangPerk = () => {
    let val = 0;
    if (ById('dropdown-gangperk').value === "no") {val = 0};
    if (ById('dropdown-gangperk').value === "1") {val = 0.05};
    if (ById('dropdown-gangperk').value === "2") {val = 0.10};
    return val;
};
/* Returns community goal value */
var communityGoal = () => {
    let val = 0;
    if (ById('dropdown-goals').value === "1") {val = 0.05};
    if (ById('dropdown-goals').value === "2") {val = 0.10};
    if (ById('dropdown-goals').value === "3") {val = 0.15};
    if (ById('dropdown-goals').value === "4") {val = 0.20};
    if (ById('dropdown-goals').value === "no") {val = 0};
    return val;
};
/* Returns community goal value */
var infamyPerk = () => {
    let val = 0;
    if (ById('dropdown-infamyperk').value === "1") {val = 0.07};
    if (ById('dropdown-infamyperk').value === "2") {val = 0.15};
    if (ById('dropdown-infamyperk').value === "3") {val = 0.25};
    if (ById('dropdown-infamyperk').value === "no") {val = 0};
    return val;
};
/* Outputs how much drugType sells for and it's weight */
var drugInfo = async () => {
    var drugType = ById('dropdown-drug').value;
    if (drugType != "none") {
        await $.get(myjsonitem, function(data, textStatus, jqXHR) {
            drugSell = data.items[drugType].sellprice;
        });
    };
};
/* Outputs how much drugType sells for and it's weight */
var liquorInfo = async () => {
    var liquorType = ById('dropdown-liquor').value;
    if (liquorType != "none") {
        await $.get(myjsonitem, function(data, textStatus, jqXHR) {
            liquorSell = data.items[liquorType].sellprice;
        });
    };
};
/* Outputs how many calculations have been made */
var globalcalculation = async () => {
    $.get(myjsoncalc, function (data, textStatus, jqXHR) {
          let number = 1+parseInt(data.number)
          let json = {"number":number};
          let dataNew = JSON.stringify(json);
          $.ajax({
                url: myjsoncalc,
                type: "PUT",
                data: dataNew,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data, textStatus, jqXHR) {
                    ById('totalCalculations').innerHTML = parseInt(data.number);
                }
          });
    });
};
/* */
var onDropdown = async () => {
    var vehicle = ById('dropdown-vehicle').value;
    var backpack = ById('dropdown-backpack').value;
    await $.get(myjsoninv, function(data, textStatus, jqXHR) {
        if (backpack === "select") {
            ById('backpackCount').innerHTML = 0;
        } else {
            ById('backpackCount').innerHTML = parseInt(data.backpack[backpack].inventory);
        };
        if (vehicle === "select") {
            ById('vehicleCount').innerHTML = 0;
        } else {
            ById('vehicleCount').innerHTML = (parseInt(data.cars[vehicle].inventory)+(parseInt(data.cars[vehicle].inventory)*communityGoal())).toFixed(0);
        };
    });
};