var setup = new Creep.Setup('ranger');
setup.multiBody = [RANGED_ATTACK, MOVE]; 
setup.minAbsEnergyAvailable = 200;
setup.maxMulti = 2;
setup.globalMeasurement = true;
setup.minControllerLevel = 3;
setup.multiplicationPartwise = false;
setup.minEnergyAvailable = function(spawn){
    return 0.8;
}
setup.maxCount = function(spawn){
    return FlagDir.count(FLAG_COLOR.defense);
}
setup.maxWeight = function(spawn){
    return 0; 
}
module.exports = setup;