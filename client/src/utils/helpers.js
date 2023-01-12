export function validateAddress(zipcode) {
    // let acceptedZips = [32789, 32801, 32803, 32804, 32805, 32806, 32807, 32808, 32809,32810, 32811, 32812, 32814, 32819, 32822, 32824, 32827, 32829, 32832, 32835, 32839];
    // let match = acceptedZips.find(index => index === zipcode)
    
    //    if(match === undefined){
    //     return false
    //    }
    //    else {
    //     return true
    //    }
    console.log(zipcode)
};

export function toTimestamp(strDate){
    var datum = Date.parse(strDate);
    return datum/1000;
 };

