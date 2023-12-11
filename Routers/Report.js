import express from "express";
import {
    getFinancial, getActivity, getBreeding, getCastration, getNewbirth,
    getSales, getTreatment, getWeaning, getCow, getPasture, getUsers,
} from "../Controllers/report";
import { verfyToken, isAdmin } from "../Middleware";

const reportRouter = express.Router();


/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * tags:
 *   name: Report
 *   description: API endpoints for managing Report records
 */

/**
 * @swagger
 * /api/v1/Report/getFinancial:
 *   get:
 *     summary: Returns the list of all financial records
 *     tags: [Report]
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
 *                 $ref: '#/components/schemas/Financial'
 *       204:
 *         description: No financial records found in the database
 *       403:
 *         description: Unauthorized access
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal Server Error
 */




reportRouter.get("/getFinancial", verfyToken, isAdmin, getFinancial);
reportRouter.get("/getActivity", verfyToken, isAdmin, getActivity);
reportRouter.get("/getBreeding", verfyToken, isAdmin, getBreeding);
reportRouter.get("/getCastration", verfyToken, isAdmin, getCastration);
reportRouter.get("/getWeaning", verfyToken, isAdmin, getWeaning);
reportRouter.get("/getBreeding", verfyToken, isAdmin, getBreeding);
reportRouter.get("/getSales", verfyToken, isAdmin, getSales);
reportRouter.get("/getNewbirth", verfyToken, isAdmin, getNewbirth);
reportRouter.get("/getTreatment", verfyToken, isAdmin, getTreatment);
reportRouter.get("/getPasture", verfyToken, isAdmin, getPasture);

export default reportRouter;
