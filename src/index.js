module.exports = function reverse (n) {
    if(0 > n){
    let ar = n * (-1);
    let tar = String(ar).split('');
    let tan = tar.reverse().join('');
    return Number(tan);
    }
    else{
    let tar = String(n).split('');
    let tan = tar.reverse().join('');
    return Number(tan);
    } 
}
