const { Player, Matrix } = require("./app.schema");

exports.genMatrix = async function (rows) {
  console.log("gen matrix", rows);
  // matrix
  return { message: "gen matrix result 1" };
};

exports.createMatrix = async function (
  matrix,
  rowCounters,
  colCounters,
  totalGold,
  rows
) {
  const newMatrix = await Matrix.create({
    matrix,
    rowCounters,
    colCounters,
    totalGold,
    level: rows
  });
  // console.log(matrix)

  const publicData = {
    id: newMatrix._id,
    rowCounters,
    colCounters,
    level: newMatrix.level
  };

  return publicData;
};

exports.getMatrix = async function (id) {
  const matrix = await Matrix.findById(id);

  return matrix.matrix;
};

exports.getTotalGold = async function (id) {
  const matrix = await Matrix.findById(id);

  return matrix.totalGold;
};

exports.savePlayer = async function (name, time, level) {
  const newPlayer = await Player.create({
    name,
    time,
    level,
  });
  return newPlayer;
};

exports.getPlayerRecord = async function (level) {
  const data = await Player.find({ level }, ["name", "time"], {
    limit: 6,
    sort: {
      time: 1,
    },
  });

  return data;
};

exports.genMatrixById = async function (id) {
    const data = await Matrix.findById(id)

    const publicData = {
        rowCounters: data.rowCounters,
        colCounters: data.colCounters,
        level: data.level
      };

      return publicData

}