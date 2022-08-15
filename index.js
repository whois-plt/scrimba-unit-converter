/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterToFeet = 3.281
const literToGallon = 0.264
const kgToPound = 2.204

const inputEl = document.getElementById("input-el")
const convBtn = document.getElementById("conv-btn")
const resetBtn = document.getElementById("reset-btn")
const convMF = document.getElementById("conv-mf")
const convLG = document.getElementById("conv-lg")
const convKP = document.getElementById("conv-kp")

convBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    const lengthMF = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | 
    ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters`
    convMF.innerHTML = lengthMF
    
    const volumeLG = `${inputEl.value} liters = ${(inputEl.value * literToGallon).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value / literToGallon).toFixed(3)} liters`
    convLG.innerHTML = volumeLG
    
    const massKP = `${inputEl.value} kilograms = ${(inputEl.value * kgToPound).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value / kgToPound).toFixed(3)} kilograms`
    convKP.innerHTML = massKP
})

// AMI NAGYON FONTOS
// az utolsó esetben (massKP) azért nem működik a .toFixed() method, mert csak a kgToPound-ra érvényes, viszont nekünk az egész szorzatra/osztásra érvényes kell hogy legyen
// ehhez zárójelbe tettük magát a szorzatot és az osztást, így már a teljes eredményre fogja alkalmzni a method a (3)-at