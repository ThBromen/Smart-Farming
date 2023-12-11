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
 *                 $ref: '#/components/schemas/Financia'
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
 * /api/v1/Report/getActivity:
 *   get:
 *     summary: Returns the list of all Activity records
 *     tags: [Report]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: The list of all Activity records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Financia'
 *       204:
 *         description: No Activity records found in the database
 *       403:
 *         description: Unauthorized access
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/v1/Report/getBreeding:
 *   get:
 *     summary: Returns the list of all Breading Activity
 *     tags: [Report]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: The list of all Breadings activity
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Breading'
 *       204:
 *         description: No Breading records found in the database
 *       403:
 *         description: Unauthorized access
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal Server Error
 */



/**
 * @swagger
 * /api/v1/Report/getCastration:
 *   get:
 *     summary: Returns the list of all Castration Activity records
 *     tags: [Report]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: The list of all Castration Activity records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Castration'
 *       204:
 *         description: No Castration Activity records found in the database
 *       403:
 *         description: Unauthorized access
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal Server Error
 */



/**
 * @swagger
 * /api/v1/Report/getWeaning:
 *   get:
 *     summary: Returns the list of all weanning Activity records
 *     tags: [Report]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: The list of all weanning Activity records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Weanning'
 *       204:
 *         description: No Weanning Activity records found in the database
 *       403:
 *         description: Unauthorized access
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal Server Error
 */



/**
 * @swagger
 * /api/v1/Report/getBreeding:
 *   get:
 *     summary: Returns the list of all Breading Activity records
 *     tags: [Report]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: The list of all Breading Activity records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Breading'
 *       204:
 *         description: No Breading Activity records found in the database
 *       403:
 *         description: Unauthorized access
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal Server Error
 */



/**
 * @swagger
 * /api/v1/Report/getSales:
 *   get:
 *     summary: Returns the list of all Sales Activity records
 *     tags: [Report]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: The list of all Sales Activity records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Sales'
 *       204:
 *         description: No Sales Activity records found in the database
 *       403:
 *         description: Unauthorized access
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal Server Error
 */



/**
 * @swagger
 * /api/v1/Report/getNewbirth:
 *   get:
 *     summary: Returns the list of all newBirth Activity records
 *     tags: [Report]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: The list of all newBirth Activity records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/newBirth'
 *       204:
 *         description: No newBirth Activity records found in the database
 *       403:
 *         description: Unauthorized access
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/v1/Report/getTreatment:
 *   get:
 *     summary: Returns the list of all Treatment Activity records
 *     tags: [Report]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: The list of all Treatment Activity records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Treatment'
 *       204:
 *         description: No Treatment Activity records found in the database
 *       403:
 *         description: Unauthorized access
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal Server Error
 */



/**
 * @swagger
 * /api/v1/Report/getPasture:
 *   get:
 *     summary: Returns the list of all Pasture  records
 *     tags: [Report]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: The list of all Pasture  records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pasture'
 *       204:
 *         description: No Pasture  records found in the database
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