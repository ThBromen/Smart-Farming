import express from "express";
import { recordFinancial, getFinancial, updateFinancial, getFinancialById, deleteFinancial } from "../Controllers/Financial";
import { verfyToken, logger } from "../Middleware";

const financialRouter = express.Router();


/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     addFinancial:
 *       type: object
 *       required:
 *         - sales
 *         - litresSold
 *         - animalEarTag
 *       properties:
 *         sales:
 *           type: string
 *           description: The sales the farmer made
 *         litresSold:
 *           type: string
 *           description: The number of liters sold
 *         animalEarTag:
 *           type: string
 *           description: The cow tag for the cow that provides the milk
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
 *           description: The sales the farmer made
 *         litresSold:
 *           type: string
 *           description: The number of liters sold
 *         animalEarTag:
 *           type: string
 *           description: The cow tag for the cow that provides the milk
 *       example:
 *         sales: milk
 *         litresSold: 10
 *         animalEarTag: M 34
 */

/**
 * @swagger
 * tags:
 *   name: Financial
 *   description: API endpoints for managing financial records
 */

/**
 * @swagger
 * /financial/getFinancial:
 *   get:
 *     summary: Returns the list of all financial records
 *     tags: [Financial]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: The list of all financial records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/financialEdit'
 *       204:
 *         description: No financial records found in the database
 *       403:
 *         description: Unauthorized access
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /financial/userbyid/{id}:
 *   get:
 *     summary: Get the Financial by id
 *     tags: [Financial]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *             type: string
 *          required: true
 *          description: The usFinancialer id
 *        - in: header
 *          name: Authorization
 *          required: true
 *          description: The user access token
 *     responses:
 *       200:
 *          description: The Financial found by id
 *          content:
 *             application/json:
 *       204:
 *          description: No any Financial in the database
 *       403:
 *          description: The user not authorised
 *       404:
 *          description: The Financial was not found
 *       500:
 *          description: Internal Server Error
 */
/**
 * @swagger
 * /financial/addFinancial:
 *   post:
 *     summary: Record financial data
 *     tags: [Financial]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/addFinancial'
 *     responses:
 *       201:
 *         description: Financial data recorded successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/addFinancial'
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /financial/updateFinancial/{id}:
 *   put:
 *     summary: Update financial data by ID
 *     tags: [Financial]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/financialEdit'
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The financial data ID
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: The user access token
 *     responses:
 *       200:
 *         description: Financial data modified successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/financialEdit'
 *       204:
 *         description: No financial data found in the database
 *       401:
 *         description: Unauthorized access
 *       404:
 *         description: Financial data not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /financial/deleteFinancial/{id}:
 *   delete:
 *     summary: Delete financial data by ID
 *     tags: [Financial]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The financial data ID
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: The user access token
 *     responses:
 *       200:
 *         description: Financial data deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/financialEdit'
 *       204:
 *         description: No financial data found in the database
 *       401:
 *         description: Unauthorized access
 *       404:
 *         description: Financial data not found
 *       500:
 *         description: Internal Server Error
 */


financialRouter.post("/addFinancial/", logger, recordFinancial);
financialRouter.get("/getFinancial/", verfyToken, getFinancial);
financialRouter.get("/financialById/:id", verfyToken, getFinancialById);
financialRouter.delete("/deleteFinancial/:id", verfyToken, deleteFinancial);
financialRouter.put("/updateFinancial/:id", verfyToken, updateFinancial);

export default financialRouter;
