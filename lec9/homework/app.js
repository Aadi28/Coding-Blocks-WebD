function fun(...a) {
    var total = 0;
    for (let i = 1; i < a.length; i++) {
        total = total + a[i];
    }
    return total;
}
