import express from "express";
import {
    recordActivity, recordTreatment, recordCastration, recordWeaning, recordBreeding,
    deleteActivity, getActivityBytype, getAllActivity, updateActivity, getActivityById,
    recordSales, recordNewbirth, recordDead
} from "../Controllers/activity";

import { verfyToken } from "../Middleware";

const activityRouter = express.Router();


/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Activity:
 *       type: object
 *       required:
 *         - earTag
 *       properties:
 *         earTag:
 *           type: string
 *           description: The ear tag of the cow
 *         treatmentDate:
 *           type: string
 *           description: Date of treatment
 *         diseaseDiagnosed:
 *           type: string
 *           description: Diagnosed disease
 *         dosageInml:
 *           type: string
 *           description: Dosage in milliliters
 *         routeType:
 *           type: string
 *           description: Type of administration route
 *         vaccinationDate:
 *           type: string
 *           description: Date of vaccination
 *         vaccineAdministered:
 *           type: string
 *           description: Administered vaccine
 *         castrationdDate:
 *           type: string
 *           description: Date of castration
 *         castratedBy:
 *           type: string
 *           description: Person who performed castration
 *         castrationdMethod:
 *           type: string
 *           description: Method of castration
 *         howItWent:
 *           type: string
 *           default: Successful
 *           description: Outcome description
 *         weaningDate:
 *           type: string
 *           description: Date of weaning
 *         weaningWeight:
 *           type: string
 *           description: Weight at weaning
 *         breedingDate:
 *           type: string
 *           description: Date of breeding
 *         methodOfBreeding:
 *           type: string
 *           description: Breeding method
 *         endDate:
 *           type: string
 *           description: End date of the activity
 *         saleDate:
 *           type: string
 *           description: Date of sale
 *         salePrice:
 *           type: string
 *           description: Sale price of the cow
 *         soldTo:
 *           type: string
 *           description: Person or entity to which the cow was sold
 *         notes:
 *           type: string
 *           description: Additional notes related to the activity
 *         birthDate:
 *           type: string
 *           description: Date of birth
 *         birthWeight:
 *           type: string
 *           description: Birth weight of the calf
 *       example:
 *         earTag: "C001"
 *         treatmentDate: "2023-01-01"
 *         diseaseDiagnosed: "Fever"
 *         dosageInml: "5"
 *         routeType: "Oral"
 *         vaccinationDate: "2023-02-01"
 *         vaccineAdministered: "Vaccine A"
 *         castrationdDate: "2023-03-01"
 *         castratedBy: "Veterinarian X"
 *         castrationdMethod: "Surgical"
 *         howItWent: "Successful"
 *         weaningDate: "2023-04-01"
 *         weaningWeight: "150"
 *         breedingDate: "2023-05-01"
 *         methodOfBreeding: "Artificial Insemination"
 *         endDate: "2023-06-01"
 *         saleDate: "2023-07-01"
 *         salePrice: "500"
 *         soldTo: "Buyer Y"
 *         notes: "Additional notes"
 *         birthDate: "2023-08-01"
 *         birthWeight: "30"
 *     Treatment:
 *       type: object
 *       required:
 *         - earTag
 *         - treatmentDate
 *         - diseaseDiagnosed
 *       properties:
 *         earTag:
 *           type: string
 *           description: The ear tag of the cow
 *         treatmentDate:
 *           type: string
 *           description: Date of treatment
 *         diseaseDiagnosed:
 *           type: string
 *           description: Diagnosed disease
 *         dosageInml:
 *           type: string
 *           description: Dosage in milliliters
 *         routeType:
 *           type: string
 *           description: Type of administration route
 *         vaccinationDate:
 *           type: string
 *           description: Date of vaccination
 *         vaccineAdministered:
 *           type: string
 *           description: Administered vaccine
 *       example:
 *         earTag: "C001"
 *         treatmentDate: "2023-01-01"
 *         diseaseDiagnosed: "Fever"
 *         dosageInml: "5"
 *         routeType: "Oral"
 *         vaccinationDate: "2023-02-01"
 *         vaccineAdministered: " Hitimana"
 *     Castration:
 *       type: object
 *       required:
 *         - earTag
 *         - treatmentDate
 *         - diseaseDiagnosed
 *       properties:
 *         earTag:
 *           type: string
 *           description: The ear tag of the cow
 *         castrationdDate:
 *           type: string
 *           description: Date of castration
 *         CastratedBy:
 *           type: string
 *           description: Person who performed castration
 *         castrationdMethod:
 *           type: string
 *           description: Method of castration
 *         howItWent:
 *           type: string
 *           default: Successful
 *           description: Outcome description
 *       example:
 *         earTag: "C001"
 *         castrationdDate: "2023-03-01"
 *         CastratedBy: "Veterinarian X"
 *         castrationdMethod: "Surgical"
 *         howItWent: "Successful"
 *     Weaning:
 *       type: object
 *       required:
 *         - earTag
 *       properties:
 *         earTag:
 *           type: string
 *           description: The ear tag of the cow
 *         weaningDate:
 *           type: string
 *           description: Date of weaning
 *         WeaningWeight:
 *           type: string
 *           description: Weight at weaning
 *       example:
 *         earTag: "C001"
 *         activityType: "Weaning"
 *         weaningDate: "2023-04-01"
 *         WeaningWeight: "150"
 *     Breeding:
 *       type: object
 *       required:
 *         - earTag
 *       properties:
 *         earTag:
 *           type: string
 *           description: The ear tag of the cow
 *         breedingDate:
 *           type: string
 *           description: Date of breeding
 *         methodOfBreeding:
 *           type: string
 *           description: Breeding method
 *         endDate:
 *           type: string
 *           description: End date of the activity
 *       example:
 *         earTag: "C001"
 *         breedingDate: "2023-05-01"
 *         methodOfBreeding: "Artificial Breeding"
 *         endDate: "2023-06-01"
 *     Sales:
 *       type: object
 *       required:
 *         - earTag
 *       properties:
 *         earTag:
 *           type: string
 *           description: The ear tag of the cow
 *         SaleDate:
 *           type: string
 *           description: Date of breeding
 *         SalePrice:
 *           type: string
 *           description: Breeding method
 *         SoldTo:
 *           type: string
 *           description: End date of the activity
 *         notes:
 *           type: string
 *           description: End date of the activity
 *       example:
 *         earTag: "C001"
 *         SaleDate: "2023-05-01"
 *         SalePrice: "Artificial Breeding"
 *         SoldTo: "2023-06-01"
 *         notes: "2023-06-01"
 *     NewBirth:
 *       type: object
 *       required:
 *         - earTag
 *       properties:
 *         earTag:
 *           type: string
 *           description: The ear tag of the cow
 *         BirthDate:
 *           type: string
 *           description: Date of breeding
 *         BirthWeight:
 *           type: string
 *           description: Breeding method
 *         notes:
 *           type: string
 *           description: End date of the activity
 *       example:
 *         earTag: "C001"
 *         BirthDate: "2023-05-01"
 *         BirthWeight: "Artificial Breeding"
 *         notes: "2023-06-01"
 *     DeadActivity:
 *       type: object
 *       required:
 *         - earTag
 *       properties:
 *         earTag:
 *           type: string
 *           description: The ear tag of the cow
 *         deathCouse:
 *           type: string
 *           description: The cause of death of the cow
 *         Deathdate:
 *           type: string
 *           format: date
 *           description: The date of the cow's death
 *         notes:
 *           type: string
 *           description: Additional notes about the cow's death
 *       example:
 *         earTag: "C001"
 *         deathCouse: "Disease"
 *         Deathdate: "2023-05-01"
 *         notes: "Cow showed symptoms of illness and passed away on this date."
 */



/**
 * @swagger
 * tags:
 *   name: Activity
 *   description: The Activity managing API
 */

/**
 * @swagger
 * /api/v1/Activity/recordActivity:
 *   post:
 *     summary: Record cow  activity
 *     tags: [Activity]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Treatment'
 *     responses:
 *       201:
 *         description: Cow treatment activity recorded successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Activity'
 *       500:
 *         description: Internal Server Error
 */


/**
 * @swagger
 * /api/v1/Activity/recordTreatment:
 *   post:
 *     summary: Record cow treatment activity
 *     tags: [Activity]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Treatment'
 *     responses:
 *       201:
 *         description: Cow treatment activity recorded successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Treatment'
 *       500:
 *         description: Internal Server Error
 */


/**
 * @swagger
 * /api/v1/Activity/recordCastration:
 *   post:
 *     summary: Record cow castration activity
 *     tags: [Activity]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Castration'
 *     responses:
 *       201:
 *         description: Cow castration activity recorded successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Castration'
 *       500:
 *         description: Internal Server Error
 */



/**
 * @swagger
 * /api/v1/Activity/recordDeadActivity:
 *   post:
 *     summary: Record cow Dead Cow activity
 *     tags: [Activity]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DeadActivity'
 *     responses:
 *       201:
 *         description: Cow castration activity recorded successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DeadActivity'
 *       500:
 *         description: Internal Server Error
 */





/**
 * @swagger
 * /api/v1/Activity/recordWeaning:
 *   post:
 *     summary: Record cow weaning activity
 *     tags: [Activity]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Weaning'
 *     responses:
 *       201:
 *         description: Cow weaning activity recorded successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Weaning'
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/v1/Activity/recordBreeding:
 *   post:
 *     summary: Record cow breeding activity
 *     tags: [Activity]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Breeding'
 *     responses:
 *       201:
 *         description: Cow breeding activity recorded successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Breeding'
 *       500:
 *         description: Internal Server Error
 */


/**
 * @swagger
 * /api/v1/Activity/recordNewBirth:
 *   post:
 *     summary: Record cow breeding activity
 *     tags: [Activity]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewBirth'
 *     responses:
 *       201:
 *         description: Cow NewBirth activity recorded successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NewBirth'
 *       500:
 *         description: Internal Server Error
 */




/**
 * @swagger
 * /api/v1/Activity/recordSales:
 *   post:
 *     summary: Record cow sales activity
 *     tags: [Activity]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sales'
 *     responses:
 *       201:
 *         description: Cow sales activity recorded successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sales'
 *       500:
 *         description: Internal Server Error
 */




/**
 * @swagger
 * /api/v1/Activity/getAllActivity:
 *   get:
 *     summary: Returns the list of all cow activities
 *     tags: [Activity]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: The list of all cow activities
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Activity'
 *       204:
 *         description: No cow activities found in the database
 *       403:
 *         description: Unauthorized access
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal Server Error
 */



/**
 * @swagger
 * /api/v1/Activity/getActivityBytype/{activityType}:
 *   get:
 *     summary: Get cow activities by type
 *     tags: [Activity]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: activityType
 *         schema:
 *           type: string
 *         required: true
 *         description: The activity type
 *     responses:
 *       200:
 *         description: The list of cows by type
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Activity'
 *       204:
 *         description: No cows found for the given type
 *       403:
 *         description: Unauthorized access
 *       404:
 *         description: Cow not found
 *       500:
 *         description: Internal Server Error
 */


/**
 * @swagger
 * /api/v1/Activity/deleteActivity/{id}:
 *   delete:
 *     summary: Delete Activity by ID
 *     tags: [Activity]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The cow ID
 *     responses:
 *       200:
 *         description: Cow deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Activity'
 *       204:
 *         description: No cow found in the database
 *       401:
 *         description: Unauthorized access
 *       404:
 *         description: activity not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/v1/Activity/updateActivity/{id}:
 *   put:
 *     summary: Update cow by ID
 *     tags: [Activity]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The cow ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Activity'
 *     responses:
 *       200:
 *         description: Cow updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Activity'
 *       204:
 *         description: No cow found in the database
 *       401:
 *         description: Unauthorized access
 *       404:
 *         description: Cow not found
 *       500:
 *         description: Internal Server Error
 */







activityRouter.post("/recordActivity", verfyToken, recordActivity);
activityRouter.get("/getAllActivity", verfyToken, getAllActivity);
activityRouter.get("/getActivityBytype/:activityType", verfyToken, getActivityBytype);
activityRouter.delete("/deleteActivity/:id", verfyToken, deleteActivity);
activityRouter.put("/updateActivity/:id", verfyToken, updateActivity);
activityRouter.get("/getActivityById:id", verfyToken, getActivityById);
activityRouter.post("/recordTreatment", verfyToken, recordTreatment);
activityRouter.post("/recordCastration", verfyToken, recordCastration);
activityRouter.post("/recordWeaning", verfyToken, recordWeaning);
activityRouter.post("/recordBreeding", verfyToken, recordBreeding);
activityRouter.post("/recordSales", verfyToken, recordSales);
activityRouter.post("/recordNewBirth", verfyToken, recordNewbirth);
activityRouter.post("/recordDeadActivity", verfyToken, recordDead);


export default activityRouter;