function calculatePassingScore(player) {
  // Make sure all keys related to passing exist
  if (!player.stats.passing){
    player.stats.passing = {attempts: 0, completion: 0, yards: 0, touchdowns: 0, interceptions: 0 };
  }
  var yards = parseFloat((player.stats.passing.yards / 25).toFixed(2))
  var touchdowns = player.stats.passing.touchdowns * 6
  var interceptions = player.stats.passing.interceptions * -3

  return yards + touchdowns + interceptions
}

function calculateRushingScore(player) {
  // Make sure rushing stats exist
  if (!player.stats.rushing) {
    player.stats.rushing = {attempts: 0, yards: 0, touchdowns: 0, fumbles: 0 }
  }
  var yards = parseFloat((player.stats.rushing.yards / 10).toFixed(2))
  var touchdowns = player.stats.rushing.touchdowns * 6
  var fumbles = player.stats.rushing.fumbles * -3

  return yards + touchdowns + fumbles
}

function calculateReceivingScore(player) {
  // Make sure receiving stats exist
  if (!player.stats.receiving){
    player.stats.receiving = {receptions: 0, yards: 0, touchdowns: 0, fumbles: 0 }
  }
  var receptions = player.stats.receiving.receptions
  var yards = parseFloat((player.stats.receiving.yards / 10).toFixed(2))
  var touchdowns = player.stats.receiving.touchdowns * 6
  var fumbles = player.stats.receiving.fumbles * -3

  return receptions + yards + touchdowns + fumbles
}

function calculateReturnScore(player) {
  //Check that return stats exist as well as the kick returns and punt returns
  if (!player.stats.return){
    player.stats.return = {kickreturn: {returns: 0, yards: 0, touchdowns: 0, fumbles: 0}, puntreturn: {returns: 0, yards: 0, touchdowns: 0, fumbles: 0}, }
  }
  var kickYards = parseFloat((player.stats.return.kickreturn.yards / 15).toFixed(2))
  var kickTouchdowns = player.stats.return.kickreturn.touchdowns * 6
  var kickFumbles = player.stats.return.kickreturn.fumbles * -3

  var puntYards = parseFloat((player.stats.return.puntreturn.yards / 15).toFixed(2))
  var puntTouchdowns = player.stats.return.puntreturn.touchdowns * 6
  var puntFumbles = player.stats.return.puntreturn.fumbles * -3

  return kickYards + kickTouchdowns + kickFumbles + puntYards + puntTouchdowns + puntFumbles
}

module.exports.calculateScore = function (player) {
  // Checks if the player obj or its stats keys exist; do nothing if not
  if (!player || !player.stats ){
    return 0;
  }
  return calculatePassingScore(player) +
    calculateRushingScore(player) +
    calculateReceivingScore(player) +
    calculateReturnScore(player)
}
