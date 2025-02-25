function circleArea(r){
    let alan = r*r*3.14
    console.log('Yarıçapı '+r+' olan dairenin alanı: '+alan);
}
circleArea(Number(process.argv[2]))