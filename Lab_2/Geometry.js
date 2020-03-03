

const check = function chk(val,Variablename) {
    if(typeof val !== "number" || val <= 0) {
        throw "Provided Variable is not a number"
    }

    if(isNaN(val)) {
        throw "Provided Variable is NaN"
    }
}    

const vol_rectPrism = function volumeOfRectangularPrism(length, width, height) {
    check(length, "length");
    check(width, "width");
    check(height, "height");
    return length * width * height
}

const surf_rectprism = function surfaceAreaOfRectangularPrism(length, width, height) {
    check(length, "length");
    check(width, "width");
    check(height, "height");
    return (2 * length * width) + (2 * width * height) + (2 * length * height)
}

const vol_sphere = function volumeOfSphere(radius){
    check(radius,"radius")
    return (4/3) * Math.PI * Math.pow(radius,3)
}

const surf_sphere = function surfaceAreaOfSphere(radius){
    check(radius,"radius")
    return (4 * Math.PI * radius**2)
}

module.exports = {
    vol_rectPrism,
    surf_rectprism,
    vol_sphere,
    surf_sphere
}
