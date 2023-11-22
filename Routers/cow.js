import express from "express";
import { recordCow, getCow, updateCow, getCowById, deleteCow } from "../Controllers/Financial";
import { verfyToken, logger } from "../Middleware";

const cowRouter = express.Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     addfinancial:
 *       type: object
 *       required:
 *         - sales
 *         - litresSold
 *         - animalEarTag
 *       properties:
 *         sales:
 *           type: string
 *           description: The sales of the farmer made
 *         litresSold:
 *           type: string
 *           description: The number of littres sold
 *         animalEarTag:
 *           type: string
 *           description: The cow tag for cow which provide that milk
 *       example:
 *         sales: milk
 *         litresSold: 10
 *         animalEarTag: M 23
 *     financialEdit:
 *       type: object
 *       required:
 *         - sales
 *         - litresSold
 *         - animalEarTag
 *       properties:
 *         sales:
 *           type: string
 *           description: The sales of the farmer made
 *         litresSold:
 *           type: string
 *           description: The number of littres sold
 *         animalEarTag:
 *           type: string
 *           description: The cow tag for cow which provide that milk
 *       example:
 *         sales: milk
 *         litresSold: 10
 *         animalEarTag: M 34
 */


/**
 * @swagger
 * tags:
 *   name: Financial
 *   description: The Financial managing API
 */

/**
 * @swagger
 * /api/v1/getuser:
 *   get:
 *     summary: Returns the list of all the users 
 *     tags: [Financial]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *          description: The list of all users 
 *          content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/userEdit'
 *       204:
 *          description: No any user in the database
 *       403:
 *          description: The user not authorised
 *       404:
 *          description: Not found
 *       500:
 *          description: Internal Server Error
 */

/**
 * @swagger
 * /api/v1/userbyid/{id}:
 *   get:
 *     summary: Get the user by id
 *     tags: [Financial]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: string
 *          required: true
 *          description: The user id
 *        - in: header
 *          name: Authorization
 *          required: true
 *          description: The user access token
 *     responses:
 *       200:
 *          description: The user found by id
 *          content:
 *             application/json:
 *       204:
 *          description: No any user in the database
 *       403:
 *          description: The user not authorised
 *       404:
 *          description: The user was not found
 *       500:
 *          description: Internal Server Error
 */

/**
 * @swagger
 * /api/v1/register:
 *   post:
 *     summary: Create a new user
 *     tags: [Financial]
 *     requestBody:
 *          required: true
 *          content:
 *            application/json:
 *               schema:
 *                   $ref: '#/components/schemas/signUp'
 *     responses:
 *       201:
 *          description: The user was successfully created
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/signUp'
 *       500:
 *          description: Internal Server Error
 */



/**
 * @swagger
 * /api/v1/updateuser/{id}:
 *   put:
 *     summary: update the data of the user by id
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *          required: true
 *          content:
 *            application/json:
 *               schema:
 *                   $ref: '#/components/schemas/userEdit'
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: string
 *          required: true
 *          description: The user id
 *        - in: header
 *          name: Authorization
 *          required: true
 *          description: The user access token
 *     responses:
 *       200:
 *          description: The user was modified successfully
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/userEdit'
 *       204:
 *          description: No any user in the database
 *       401:
 *          description: The user not authorised
 *       404:
 *          description: The user was not found
 *       500:
 *          description: Internal Server Error
 */


/**
 * @swagger
 * /api/v1/deleteuser/{id}:
 *   delete:
 *     summary: Delete the user by id
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: string
 *          required: true
 *          description: The user id
 *        - in: header
 *          name: Authorization
 *          required: true
 *          description: The user access token
 *     responses:
 *       200:
 *          description: The user was deleted successfully
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/User'
 *       204:
 *          description: No any user in the database
 *       401:
 *          description: The user not authorised
 *       404:
 *          description: The user was not found
 *       500:
 *          description: Internal Server Error
 */

// cowRouter.post("/recordCow/", logger, recordCow);
// cowRouter.get("/getCow/", verfyToken, getCow);
// cowRouter.get("/getCowById/:id", verfyToken, getCowById);
// cowRouter.delete("/deleteCow/:id", verfyToken, deleteCow);
// cowRouter.put("/updateCow/:id", verfyToken, updateCow);

export default cowRouter;