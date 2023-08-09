const express = require("express")
const router = express.Router()

const controller = require("./app.controller")

/**
 * @swagger
 * /getrows:
 *  get:
 *    tags:
 *      - matrix
 *    parameters:
 *      - in: query
 *        name: rows
 *        type: string
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 */
router.get("/getrows", controller.getRows)

/**
 * @swagger
 * /postrows:
 *  post:
 *    tags:
 *      - matrix
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              rows:
 *                type: integer
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 */
router.post("/postrows", controller.postRows)

/**
 * @swagger
 * /genMatrix:
 *  post:
 *    tags:
 *      - matrix
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              rows:
 *                type: integer
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 */
router.post("/genMatrix", controller.genMatrix)

/**
 * @swagger
 * /handleClick:
 *  post:
 *    tags:
 *      - click
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *              rowIndex:
 *                type: integer
 *              cellIndex:
 *                type: integer
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 */
router.post("/handleClick", controller.handleClick)

/**
 * @swagger
 * /checkWin:
 *  post:
 *    tags:
 *      - click
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *              openedGoldCells:
 *                type: integer
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 */
router.post("/checkWin", controller.checkWin)

/**
 * @swagger
 * /saveRecord:
 *  post:
 *    tags:
 *      - Record
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              time:
 *                type: string
 *              level:
 *                type: integer
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 */
router.post("/saveRecord", controller.saveRecord)

/**
 * @swagger
 * /getLeaderBoard:
 *  post:
 *    tags:
 *      - Record
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              level:
 *                type: integer
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 */
router.post("/getLeaderBoard", controller.getLeaderBoard)

/**
 * @swagger
 * /challengePlayer:
 *  post:
 *    tags:
 *      - Player
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 */
router.post("/challengePlayer", controller.chanllengePlayer)

module.exports = router