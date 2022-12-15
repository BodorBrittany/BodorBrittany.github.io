function random(s1, s2, s3, s4, s5, s6){
    var s = [s1, s2, s3, s4, s5, s6]

    var i1 = Math.floor(Math.random) * 11;
    var i2 = Math.floor(Math.random) * 11;
    var i3 = Math.floor(Math.random) * 11;

    var r1 = s[i1];
    var r2 = s[i2];
    var r3 = s[i3];

    return [r1, r2, r3];
}