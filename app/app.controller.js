const Matrix = require("./app.schema");
const appService = require("./app.service");

exports.getRows = async function (req, res) {
  try {
    // const { rows } = req.query
    // const data = await appService.genMatrix(rows)
    const matrix = await Matrix.create({
      user: "userTest",
    });
    return res.status(200).json(matrix);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

exports.postRows = async function (req, res) {
  try {
    const { rows } = req.body;
    console.log("post", rows);
    const data = await appService.genMatrix(rows);

    return res.status(200).json(data);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

exports.genMatrix = async function (req, res) {
  try {
    const { rows } = req.body;

    const matrix = [];

    for (let i = 0; i < rows; i++) {
      const row = [];

      for (let j = 0; j < rows; j++) {
        let color = Math.random() < 0.6 ? 1 : 0;
        row.push(color);
      }
      matrix.push(row);
    }
    const rowCounters = [];

    let totalGold = 0;

    for (let i = 0; i < rows; i++) {
      const row = [];
      let rowCounter = 0;
      rowCounters.push([]);
      for (let j = 0; j < rows; j++) {
        if (matrix[i][j] === 1) {
          rowCounter++;
          totalGold++;
        } else if (rowCounter > 0) {
          rowCounters[i].push(rowCounter);
          rowCounter = 0; // Reset rowCounter
        }
      }
      if (rowCounter > 0) {
        rowCounters[i].push(rowCounter); // Save final rows value
      }
    }

    const colCounters = [];
    for (let j = 0; j < rows; j++) {
      const col = [];
      let colCounter = 0;
      for (let i = 0; i < rows; i++) {
        if (matrix[i][j] === 1) {
          colCounter++;
        } else if (colCounter > 0) {
          col.push(colCounter);
          colCounter = 0;
        }
      }
      if (colCounter > 0) {
        col.push(colCounter);
      }
      colCounters.push(col);
    }

    const data = await appService.createMatrix(
      matrix,
      rowCounters,
      colCounters,
      totalGold,
      rows
    );

    return res.status(200).json(data);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

exports.handleClick = async function (req, res) {
  try {
    const { id, rowIndex, cellIndex } = req.body;
    const matrix = await appService.getMatrix(id);

    let data = "";

    if (matrix[rowIndex][cellIndex] === 1) {
      data = "gold";
    } else if (matrix[rowIndex][cellIndex] === 0) {
      data = "boom";
    }
    return res.status(200).json(data);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

exports.checkWin = async function (req, res) {
  try {
    const { id, openedGoldCells } = req.body;
    const totalGold = await appService.getTotalGold(id);

    let data = "";

    if (openedGoldCells === totalGold) data = "win";

    return res.status(200).json(data);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

exports.saveRecord = async function (req, res) {
  try {
    const { name, time, level } = req.body;
    const player = await appService.savePlayer(name, time, level);
    let data = 'done'

    return res.status(200).json(data);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

exports.getLeaderBoard = async function (req, res) {
    try {
        const {level} = req.body
        const record = await appService.getPlayerRecord(level)

        return res.status(200).json(record)
    } catch (e) {
        return res.status(400).json({ message: e.message})
    }
}

exports.chanllengePlayer = async function (req, res) {
    try {
        const {id} = req.body
        const matrix = await appService.genMatrixById(id)


        return res.status(200).json(matrix)
    } catch (e) {
        return res.status(400).json({ message: e.message})
    }
}