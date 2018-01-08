var ftoc = function(temp) {
  let cel = (temp - 32) * (5 / 9);
  if (cel % 1 == 0) {
    return cel;
  } else {
    return Number(cel.toFixed(1));
  }
}

var ctof = function(temp) {
  let far = (temp * 1.8) + 32;
  if (far % 1 == 0) {
    return far;
  } else {
    return Number(far.toFixed(1));
  }
}

module.exports = {
  ftoc,
  ctof
}
