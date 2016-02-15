function ladder(height, angle) {
  var angleInRad = Math.PI/180 * angle
  return Math.ceil(height/Math.sin(angleInRad))
}

module.exports = ladder;
