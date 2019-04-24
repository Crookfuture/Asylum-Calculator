const itemLink = "https://api.myjson.com/bins/12qenq";
const gunLink = "https://api.myjson.com/bins/14vpga";
const inventoryLink = "https://api.myjson.com/bins/1fp9iy";
const totalCalc = "https://api.myjson.com/bins/ba33u";




var ById = (id) => { return document.getElementById(id) }
var Event = (event, fn) => { return document.addEventListener(event, fn)}
var ByIdEvent = (id, event, fn) => { return document.getElementById(id).addEventListener(event, fn)}

async function getGunInfo() 
{
  let gunType = ById("dropdown-gun").value;
  let turfSelect = ById("dropdown-turf").value;
  let nameIng3='';
  let ingMoney=0;

  let turfGet = () =>{if (turfSelect === "yes"){return "turf";}else{return "noturf";}}

  if (gunType != "select") 
  {
    await $.get(gunLink, function(data, textStatus, jqXHR) 
      {
        gunBaseSell = data.guns[gunType].basesell;
        return parseInt(gunBaseSell);
      });
    await $.get(gunLink, function(data, textStatus, jqXHR) 
      {
        gunCrashSell = data.guns[gunType].crashsell;
        return parseInt(gunCrashSell);
      });
    await $.get(gunLink, function(data, textStatus, jqXHR) 
      {
        gunlocation = data.guns[gunType].location;
        return gunlocation;
      });

    if(gunType ==="Katiba" || gunType ==="Katiba Carbine") 
      {
        nameIng1 = "Iron Ore";
        await $.get(gunLink, function(data, textStatus, jqXHR) 
          {
            ing1 = data.guns[gunType][turfGet()].Ironore;
            return parseInt(ing1);
          });
        nameIng2 = "Opium";
        await $.get(gunLink, function(data, textStatus, jqXHR) 
          {
            ing2 = data.guns[gunType][turfGet()].Opium;
            return parseInt(ing2);
          });
      }

      if(gunType ==="Rahim" || gunType ==="Rahim" || gunType ==="Spar-17"|| gunType ==="Mk-18" || gunType ==="Mk-1" || gunType ==="Mk-14" || gunType ==="Akm" || gunType ==="Ak-12") 
        {
          nameIng1 = "Diamond Uncut";
          await $.get(gunLink, function(data, textStatus, jqXHR) 
            {
              ing1 = data.guns[gunType][turfGet()].Diamonduncut;
               return parseInt(ing1);
            });
          nameIng2 = "Unprocessed Cocaine";
          await $.get(gunLink, function(data, textStatus, jqXHR) 
            {
              ing2 = data.guns[gunType][turfGet()].Unproccocaine;
              return parseInt(ing2);
            });
        }

        if(gunType ==="Lim-85")
          {
            nameIng1 = "Diamond Uncut";
            await $.get(gunLink, function(data, textStatus, jqXHR) 
              {
                ing1 = data.guns[gunType][turfGet()].Diamonduncut;
                return parseInt(ing1);
              });
            nameIng2 = "Unprocessed Cocaine";
            await $.get(gunLink, function(data, textStatus, jqXHR) 
              {
                ing2 = data.guns[gunType][turfGet()].Unproccocaine;
                return parseInt(ing2);
              });
            nameIng3 = "Money";
            await $.get(gunLink, function(data, textStatus, jqXHR) 
              {
                ingMoney = data.guns[gunType][turfGet()].money;
                return parseInt(ingMoney);
              });
          }

        if(gunType ==="Mk-200")
          {
            nameIng1 = "Diamond Uncut";
            await $.get(gunLink, function(data, textStatus, jqXHR) 
              {
                ing1 = data.guns[gunType][turfGet()].Diamonduncut;
                return parseInt(ing1);
              });
            nameIng2 = "Meth";
            await $.get(gunLink, function(data, textStatus, jqXHR) 
              {
                ing2 = data.guns[gunType][turfGet()].Meth;
                return parseInt(ing2);
              });
            nameIng3 = "Money";
            await $.get(gunLink, function(data, textStatus, jqXHR) 
              {
                ingMoney = data.guns[gunType][turfGet()].money;
                return parseInt(ingMoney);
              });
          }

          if(gunType ==="Acp") 
          {
            nameIng1 = "Iron Ore";
            await $.get(gunLink, function(data, textStatus, jqXHR) 
              {
                ing1 = data.guns[gunType][turfGet()].Ironore;
                return parseInt(ing1);
              });
            nameIng2 = "Copper Ingot";
            await $.get(gunLink, function(data, textStatus, jqXHR) 
              {
                ing2 = data.guns[gunType][turfGet()].Copperingot;
                return parseInt(ing2);
              });
          }

          if(gunType ==="Pdw") 
          {
            nameIng1 = "Iron Ore";
            await $.get(gunLink, function(data, textStatus, jqXHR) 
              {
                ing1 = data.guns[gunType][turfGet()].Ironore;
                return parseInt(ing1);
              });
            nameIng2 = "Copper Ingot";
            await $.get(gunLink, function(data, textStatus, jqXHR) 
              {
                ing2 = data.guns[gunType][turfGet()].Copperingot;
                return parseInt(ing2);
              });
          }

          if(gunType ==="Vermin" || gunType ==="Sting") 
          {
            nameIng1 = "Iron Ore";
            await $.get(gunLink, function(data, textStatus, jqXHR) 
              {
                ing1 = data.guns[gunType][turfGet()].Ironore;
                return parseInt(ing1);
              });
            nameIng2 = "Refined Salt";
            await $.get(gunLink, function(data, textStatus, jqXHR) 
              {
                ing2 = data.guns[gunType][turfGet()].Refinedsalt;
                return parseInt(ing2);
              });
          }
        return gundata = 
          {
            gunType: gunType,
            gunBaseSell: gunBaseSell,
            gunCrashSell: gunCrashSell,
            gunlocation: gunlocation,
            nameIng1: nameIng1,
            ingredient1: ing1,
            nameIng2: nameIng2,
            ingredient2: ing2,
            nameIng3: nameIng3,
            ingredient3: ingMoney
          }     
  }
}
async function getInventoryInfo()
{
  let vehicle = ById('dropdown-vehicle').value;
  let backpack = ById('dropdown-backpack').value;

  if (vehicle != "select") 
    {
      await $.get(inventoryLink, function(data, textStatus, jqXHR) 
        {
          vehiclespace = data.cars[vehicle].inventory;
          return parseInt(vehiclespace);
        });
    }else{vehiclespace = 0;}

  if (backpack != "select") 
  {
      await $.get(inventoryLink, function(data, textStatus, jqXHR) 
      {
        bagspace = data.backpack[backpack].inventory;
        return parseInt(bagspace);
      });
  }else{bagspace=0;}

  return invendata =
  {
    vehicle: vehicle,
    backpack: backpack,
    vehiclespace: vehiclespace,
    bagspace: bagspace
  }
}
async function getWeights()
{
  await $.get(itemLink, function(data, textStatus, jqXHR) 
      {
        ironweight = data.items.Ironore.weight;
        return parseInt(ironweight);
      });
  await $.get(itemLink, function(data, textStatus, jqXHR) 
      {
        diamonduncutweight = data.items.Diamonduncut.weight;
        return parseInt(diamonduncutweight);
      });
  await $.get(itemLink, function(data, textStatus, jqXHR) 
      {
        unproccokeweight = data.items.UnprocCocaine.weight;
        return parseInt(unproccokeweight);
      });
  await $.get(itemLink, function(data, textStatus, jqXHR) 
      {
        opiumweight = data.items.Opium.weight;
        return parseInt(opiumweight);
      });
  await $.get(itemLink, function(data, textStatus, jqXHR) 
      {
        methweight = data.items.Meth.weight;
        return parseInt(methweight);
      });
  await $.get(itemLink, function(data, textStatus, jqXHR) 
      {
        copperingotweight = data.items.Copperingot.weight;
        return parseInt(copperingotweight);
      });
  await $.get(itemLink, function(data, textStatus, jqXHR) 
      {
        refinedsaltweight = data.items.Refinedsalt.weight;
        return parseInt(refinedsaltweight);
      });

  return weightdata =
  {
    iron: ironweight,
    copperingot: copperingotweight,
    refinedsalt: refinedsaltweight,
    uncutdiamond: diamonduncutweight,
    unproccocaine: unproccokeweight,
    opium: opiumweight,
    meth: methweight
  }
}
async function getTurf()
{
  turf = ById('dropdown-turf').value;
  if (turf === "yes"){turfval = 0}else{turfval = .2};
  return turfval;
}
async function calculation(gunType,vehiclespace,bagspace,ingredient1,ingredient2,ingredient3,sellprice,goal,turf)
{
  weightdata = await getWeights();

  let customspace = ById('input-space').value;
  if (gunType != "select")
  {
    if(gunType ==="Katiba" || gunType ==="Katiba Carbine"){gunweight = (ingredient1 * weightdata.iron)+(ingredient2 * weightdata.opium);}

    else if(gunType ==="Rahim" || gunType ==="Spar-17"|| gunType ==="Mk-18" || gunType ==="Mk-1" || gunType ==="Mk-14" || gunType ==="Akm" || gunType ==="Ak-12") 
     {gunweight = (ingredient1 * weightdata.uncutdiamond)+(ingredient2 * weightdata.unproccocaine);}

    else if(gunType ==="Lim-85"){gunweight = (ingredient1 * weightdata.uncutdiamond)+(ingredient2 * weightdata.unproccocaine)}

    else if(gunType ==="Mk-200"){gunweight = (ingredient1 * weightdata.uncutdiamond)+(ingredient2 * weightdata.meth)}

    else if(gunType ==="Acp" || gunType ==="Pdw"){gunweight = (ingredient1 * weightdata.iron)+(ingredient2 * weightdata.copperingot)}
    else if(gunType ==="Sting" || gunType ==="Vermin"){gunweight = (ingredient1 * weightdata.iron)+(ingredient2 * weightdata.Refinedsalt)}

    else{gunweight = 0};

    console.log(gunweight);
    let infamy = sellprice/250;

    let totalspace = Math.round(vehiclespace+(goal * vehiclespace)) + bagspace + parseInt(customspace);
    let gunamount = Math.floor(totalspace/gunweight);
    let vehiclegunamount = Math.floor((vehiclespace+(vehiclespace*goal))/gunweight);
    let baggunamount = Math.floor(bagspace/gunweight);

    let gunmodifer = Math.floor(goal*gunamount);

    let infamygain = infamy * gunamount;

    let lowtotal = gunamount * sellprice;

    let ing1amount = gunamount * ingredient1;
    let vehicleing1 = vehiclegunamount * ingredient1;
    let baging1 = baggunamount * ingredient1;

    let ing1modifer = gunamount * Math.floor(goal*ingredient1);

    let ing2amount = gunamount * ingredient2;
    let vehicleing2 = vehiclegunamount * ingredient2;
    let baging2 = baggunamount * ingredient2;

    let ing2modifer = gunamount * Math.floor(goal*ingredient2);

    let moneyrequired = gunamount * ingredient3;
    let vehicleing3 = vehiclegunamount * ingredient3;
    let baging3 = baggunamount * ingredient3;;

    let turfloss = turf * lowtotal;
    let profit = lowtotal - turfloss;

    return calc = 
    {
      profit: profit,
      loss: turfloss,
      totalspace: totalspace,
      gunweight: gunweight,
      gunamount: gunamount,
      vehiclegunamount: vehiclegunamount,
      baggunamount: baggunamount,
      infamy: infamy,
      infamygain: infamygain,
      total: lowtotal,
      ing1amount: ing1amount,
      vehicleing1:vehicleing1,
      baging1:baging1,
      ing2amount: ing2amount,
      vehicleing2:vehicleing2,
      baging2:baging2,
      vehicleing3:vehicleing3,
      baging3:baging3,
      moneytocraft: moneyrequired
    }
  }
}

async function outputSellCount(gunType,sellprice,turf,infamy)
{
  let count = ById('input-sellingcount').value;

  total = sellprice * count;

  let sellingcountloss = total*turf;

  let sellingcountprofit = total - sellingcountloss;

  if (gunType != "Acp" || gunType != "Pdw" || gunType != "Sting" || gunType != "Vermin")
    {
      let infamygain = infamy * count;
      ById('scoutput').innerHTML = formatter.format(sellingcountprofit);
      ById('scoutputturf').innerHTML = formatter.format(sellingcountloss);
      ById('scoutputinfamy').innerHTML = infamygain;
    }
}
async function outputSpaceAdded(gunType,profit,loss,infamygain)
{
  ById('output').innerHTML = formatter.format(profit);
  ById('outputturf').innerHTML = formatter.format(loss);

  if (gunType != "Acp" || gunType != "Pdw" || gunType != "Sting" || gunType != "Vermin")
  {ById('outputinfamy').innerHTML = infamygain;}
}
async function outputSpace(totalspace)
{
  ById('col1output1').innerHTML = totalspace; 
}

async function outputTotal(gunType,gunamount,ingredient1,ingredient2,ingredient3,nameIng1,nameIng2,nameIng3,)
{
  ById('labelgun').innerHTML = ById('labelguntype').innerHTML = gunType;
  ById('col1output2').innerHTML = gunamount;

  ById('labelmat1').innerHTML = nameIng1;
  ById('col1output3').innerHTML = ingredient1;

  ById('labelmat2').innerHTML = nameIng2;
  ById('col1output4').innerHTML = ingredient2;

  if (gunType === "Lim-85"|| gunType === "Mk-200")
    {
      ById('labelmat3').innerHTML = nameIng3;
      ById('col1output5').innerHTML = ingredient3;
    };
}

async function outputVehicle(gunType,vehiclespace,nameIng1,nameIng2,nameIng3,vehiclegunamount,vehicleIng1,vehicleIng2,vehicleIng3,goal)
{
  vehiclespace += vehiclespace * goal;
  ById('col2output1').innerHTML = Math.round(vehiclespace);

  ById('labelgun').innerHTML = gunType;
  ById('col2output2').innerHTML = vehiclegunamount;

  ById('labelmat4').innerHTML = nameIng1;
  ById('col2output3').innerHTML = vehicleIng1;

  ById('labelmat5').innerHTML = nameIng2;
  ById('col2output4').innerHTML = vehicleIng2;

  if (gunType === "Lim-85"|| gunType === "Mk-200")
    {
      ById('labelmat6').innerHTML = nameIng3;
      ById('col2output5').innerHTML = ingredient3;
    };
}

async function outputBag(gunType,bagspace,nameIng1,nameIng2,nameIng3,baggunamount,bagIng1,bagIng2,bagIng3)
{
  ById('col3output1').innerHTML = bagspace;

  ById('labelgun2').innerHTML = gunType;
  ById('col3output2').innerHTML = baggunamount;

  ById('labelmat7').innerHTML = nameIng1;
  ById('col3output3').innerHTML = bagIng1;

  ById('labelmat8').innerHTML = nameIng2;
  ById('col3output4').innerHTML = bagIng2;

  if (gunType === "Lim-85"|| gunType === "Mk-200")
    {
      ById('labelmat9').innerHTML = nameIng3;
      ById('col3output5').innerHTML = ingredient3;
    };
}

outputimg = (gunType) => 
{
  if (gunType === "Katiba" || gunType === "Katiba Carbine") 
    {
      ById('imageing1').src = "../images/ironore.png";
      ById('imageing2').src = "../images/opium.png";
      ById('imageing4').src = "../images/ironore.png";
      ById('imageing5').src = "../images/opium.png";
      ById('imageing7').src = "../images/ironore.png";
      ById('imageing8').src = "../images/opium.png";
    };
    if(gunType ==="Rahim" || gunType ==="Spar-17"|| gunType ==="Mk-18" || gunType ==="Mk-1" || gunType ==="Mk-14" || gunType ==="Akm" || gunType ==="Ak-12") 
      {
        ById('imageing1').src = "../images/diamond.png";
        ById('imageing2').src = "../images/uncocaine.png";
        ById('imageing4').src = "../images/diamond.png";
        ById('imageing5').src = "../images/uncocaine.png";
        ById('imageing7').src = "../images/diamond.png";
        ById('imageing8').src = "../images/uncocaine.png";
      };
    if (gunType === "Lim-85") 
      {
        ById('imageing1').src = "../images/diamond.png";
        ById('imageing2').src = "../images/uncocaine.png";
        ById('imageing3').src = "../images/money.png";
        ById('imageing4').src = "../images/diamond.png";
        ById('imageing5').src = "../images/uncocaine.png";
        ById('imageing6').src = "../images/money.png";
        ById('imageing7').src = "../images/diamond.png";
        ById('imageing8').src = "../images/uncocaine.png";
        ById('imageing9').src = "../images/money.png";
      };
    if (gunType === "Mk-200") 
      {
        ById('imageing1').src = "../images/diamond.png";
        ById('imageing2').src = "../images/meth.png";
        ById('imageing3').src = "../images/money.png";
        ById('imageing4').src = "../images/diamond.png";
        ById('imageing5').src = "../images/meth.png";
        ById('imageing6').src = "../images/money.png";
        ById('imageing7').src = "../images/diamond.png";
        ById('imageing8').src = "../images/meth.png";
        ById('imageing9').src = "../images/money.png";
      };
    if (gunType === "Acp" || gunType === "Pdw") 
      {
        ById('imageing1').src = "../images/ironore.png";
        ById('imageing2').src = "../images/copperingot.png";
        ById('imageing4').src = "../images/ironore.png";
        ById('imageing5').src = "../images/copperingot.png";
        ById('imageing7').src = "../images/ironore.png";
        ById('imageing8').src = "../images/copperingot.png";
      };
    if (gunType === "Sting" || gunType === "Vermin") 
      {
        ById('imageing1').src = "../images/ironore.png";
        ById('imageing2').src = "../images/rsalt.png";
        ById('imageing4').src = "../images/ironore.png";
        ById('imageing5').src = "../images/rsalt.png";
        ById('imageing7').src = "../images/ironore.png";
        ById('imageing8').src = "../images/rsalt.png";
      };

}

Event('DOMContentLoaded', async () => 
{
    ByIdEvent('calculate', 'click', async () => 
    {
        // you can use return array anywhere in here now
        await getGunInfo();
        await getInventoryInfo();
        val = await communityGoal();
        turf1 = await getTurf();
        await calculation(gundata.gunType,invendata.vehiclespace,invendata.bagspace,gundata.ingredient1,gundata.ingredient2,
                          gundata.ingredient3,gundata.gunCrashSell,val,turf1);
        await outputSellCount(gundata.gunType,gundata.gunCrashSell,turf1,calc.infamy);
        await outputSpaceAdded(gundata.gunType,calc.profit,calc.loss, calc.infamygain);
        await outputSpace(calc.totalspace);
        await outputTotal(gundata.gunType,calc.gunamount,calc.ing1amount,calc.ing2amount,calc.moneytocraft,gundata.nameIng1,
                          gundata.nameIng2,gundata.nameIng3);
        await outputVehicle(gundata.gunType,invendata.vehiclespace,gundata.nameIng1,gundata.nameIng2,gundata.nameIng3,
                            calc.vehiclegunamount,calc.vehicleing1,calc.vehicleing2,calc.vehicleing3,val);
        await outputBag(gundata.gunType,invendata.bagspace,gundata.nameIng1,gundata.nameIng2,gundata.nameIng3,
                        calc.baggunamount,calc.baging1,calc.baging2,calc.baging3);
        await outputimg(gundata.gunType)
    });
});

var outputvideo = () => {
  let gunType = ById("dropdown-gun").value
    if (gunType === "Katiba") {ById('tutorial').src = "https://youtu.be/fLwWxXv5Dbk?t=1"};
    if (gunType === "Katiba Carbine") {ById('tutorial').src = "https://www.youtube.com/watch?v=9z-IKn66Ha4"};
    if (gunType === "Rahim") {ById('tutorial').src = "http://www.youtube.com/watch?v=UC5VRrrd-xU"};
    if (gunType === "Mk-18") {ById('tutorial').src = "http://www.youtube.com/watch?v=C-3o08VYh0k"};
    if (gunType === "Mk-1") {ById('tutorial').src = "http://www.youtube.com/watch?v=LCHauoGPQpU"};
    if (gunType === "Mk-14") {ById('tutorial').src = "http://www.youtube.com/watch?v=G6npVneFQbc"};
    if (gunType === "Akm") {ById('tutorial').src = "http://www.youtube.com/watch?v=WOQIybIVevs"};
    if (gunType === "Ak-12") {ById('tutorial').src = "http://www.youtube.com/watch?v=newuRUo8pBM"};
    if (gunType === "Lim-85") {ById('tutorial').src = "http://www.youtube.com/watch?v=aIcdj4UH9u0"};
    if (gunType === "Mk-200") {ById('tutorial').src = "http://www.youtube.com/watch?v=82nqsksBH7M"};
    if (gunType === "Acp") {ById('tutorial').src = "http://www.youtube.com/watch?v=uAmMeAO7Dko"};
    if (gunType === "Pdw") {ById('tutorial').src = "http://www.youtube.com/watch?v=PPG--d6tkFU"};
    if (gunType === "Sting") {ById('tutorial').src = "http://www.youtube.com/watch?v=G44xTr8D_bw"};
    if (gunType === "Vermin") {ById('tutorial').src = "http://www.youtube.com/watch?v=eT3BFzSD6YY"};
};