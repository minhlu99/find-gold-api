// import mongoose, { model } from 'mongoose';
const mongoose = require("mongoose")
const { Schema } = mongoose;

const matrixSchema = new Schema({
  matrix: Array,
  rowCounters: Array,
  colCounters: Array,
  totalGold: Number,
  level: Number,
  date: { type: Date, default: Date.now },
  hidden: Boolean,
})

const Matrix = mongoose.model("Matrix", matrixSchema)


const playerSchema = new Schema({
  name: String,
  time: String,
  level: Number,
})

const Player = mongoose.model("Player", playerSchema)


module.exports = {Matrix, Player};