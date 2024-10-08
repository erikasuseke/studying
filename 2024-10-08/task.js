const items = [
    { barkodas: "4061615651", pavadinimas: "Degtukai", kaina: 0.2 },
    { barkodas: "4061615652", pavadinimas: "Dantų šepetėlis", kaina: 1.5 },
    { barkodas: "4061615653", pavadinimas: "Kava", kaina: 4.99 },
    { barkodas: "4061615654", pavadinimas: "Vandens butelis", kaina: 0.89 },
    { barkodas: "4061615655", pavadinimas: "Šokoladas", kaina: 1.79 },
    { barkodas: "4061615656", pavadinimas: "Tualetinis popierius", kaina: 2.5 },
    { barkodas: "4061615657", pavadinimas: "Makaronai", kaina: 0.99 },
    { barkodas: "4061615658", pavadinimas: "Ryžiai", kaina: 1.2 },
    { barkodas: "4061615659", pavadinimas: "Kondicionierius", kaina: 3.5 },
    { barkodas: "4061615660", pavadinimas: "Šampūnas", kaina: 3.99 }];

console.log(items);

// 1 užduotis

const newBar = items.map((v) => {
    return {
        barkodas: v.barkodas, 
        pavadinimas: v.pavadinimas, 
        kaina: v.kaina, 
        barkodas2: `${v.pavadinimas[0]}-${v.barkodas}`,
    }
});
console.log(newBar);

// 2 užduotis

const itemsWithD = newBar.filter((v) => {
    return v.barkodas2[0] == 'D';
});
console.log(itemsWithD);

// 3 užduotis

const priceMoreThan1 = items.filter((v) => {
    return v.kaina > 1;
});
console.log(priceMoreThan1);
    
// 4 užduotis

const priceLessThan3 = items.filter((v) => {
    return v.kaina < 3;
});
console.log(priceLessThan3);

// 5 užduotis

const moreThan1LessThan3 = items.filter((v) => {
    return v.kaina < 3 && v.kaina > 1;
});
console.log(moreThan1LessThan3);

// 6 užduotis

const changeItem = items.map(obj => {
    if (obj.pavadinimas === 'Kava') {
        return {...obj, pavadinimas: 'Kavos pupeles'};
    }
    return obj;
});
console.log(changeItem);

// 7 užduotis

const priceWithTax = items.map((v) => {
    if(v.kaina < 1.5){
        return {
            barkodas: v.barkodas, 
            pavadinimas: v.pavadinimas, 
            kaina: v.kaina, 
            pvmProcentas: 15,
            pvmMokestis: (v.kaina*0.15).toFixed(2),
            }
        } else if (v.kaina >= 1.5){
        return {
            barkodas: v.barkodas, 
            pavadinimas: v.pavadinimas, 
            kaina: v.kaina, 
            pvmProcentas: 21,
            pvmMokestis: (v.kaina*0.21).toFixed(2),
            }
    }
});
console.log(priceWithTax);

// 8 užduotis

const moreThan1EndsWithS = items.filter((v) => {
    return v.kaina < 2 && v.pavadinimas[v.pavadinimas.length-1] === 's';
});
console.log(moreThan1EndsWithS);