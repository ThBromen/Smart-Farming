import express from "express";
import {
    recordTreatment, recordCastration, recordWeaning, recordBreeding,
    deleteActivity, getActivityBytype, getAllActivity
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
 *         - activityType
 *         - treatmentDate
 *         - diseaseDiagnosed
 *       properties:
 *         earTag:
 *           type: string
 *           description: The ear tag of the cow
 *         activityType:
 *           type: string
 *           description: The category type of the cow (e.g., Dairy, Beef)
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
 *         weaningDate:
 *           type: string
 *           description: Date of weaning
 *         WeaningWeight:
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
 *       example:
 *         earTag: "C001"
 *         activityType: "Weaning"
 *         treatmentDate: "2023-01-01"
 *         diseaseDiagnosed: "Fever"
 *         dosageInml: "5"
 *         routeType: "Oral"
 *         vaccinationDate: "2023-02-01"
 *         vaccineAdministered: "Vaccine A"
 *         castrationdDate: "2023-03-01"
 *         CastratedBy: "Veterinarian X"
 *         castrationdMethod: "Surgical"
 *         howItWent: "Successful"
 *         weaningDate: "2023-04-01"
 *         WeaningWeight: "150"
 *         breedingDate: "2023-05-01"
 *         methodOfBreeding: "Artificial Insemination"
 *         endDate: "2023-06-01"
 *     Treatment:
 *       type: object
 *       required:
 *         - earTag
 *         - activityType
 *         - treatmentDate
 *         - diseaseDiagnosed
 *       properties:
 *         earTag:
 *           type: string
 *           description: The ear tag of the cow
 *         activityType:
 *           type: string
 *           description: The category type of the cow (e.g., Dairy, Beef)
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
 *         activityType: "Weaning"
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
 *         - activityType
 *         - treatmentDate
 *         - diseaseDiagnosed
 *       properties:
 *         earTag:
 *           type: string
 *           description: The ear tag of the cow
 *         activityType:
 *           type: string
 *           description: The category type of the cow (e.g., Dairy, Beef)
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
 *         activityType: "Dairy"
 *         castrationdDate: "2023-03-01"
 *         CastratedBy: "Veterinarian X"
 *         castrationdMethod: "Surgical"
 *         howItWent: "Successful"
 *     Weaning:
 *       type: object
 *       required:
 *         - earTag
 *         - activityType
 *       properties:
 *         earTag:
 *           type: string
 *           description: The ear tag of the cow
 *         activityType:
 *           type: string
 *           description: The category type of the cow (e.g., Dairy, Beef)
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
 * 
 * 
 *     Breeding:
 *       type: object
 *       required:
 *         - earTag
 *         - activityType
 *       properties:
 *         earTag:
 *           type: string
 *           description: The ear tag of the cow
 *         activityType:
 *           type: string
 *           description: The category type of the cow 
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
 *         activityType: "Weaning"
 *         breedingDate: "2023-05-01"
 *         methodOfBreeding: "Artificial Breeding"
 *         endDate: "2023-06-01"
 * 
 */



/**
 * @swagger
 * tags:
 *   name: Activity
 *   description: The Activity managing API
 */

/**
 * @swagger
 * /Activity/recordTreatment:
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
 * /Activity/recordCastration:
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
 * /Activity/recordWeaning:
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
 * /Activity/recordBreeding:
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
 * /Activity/getAllActivity:
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
 * /Activity/getActivityBytype/{activityType}:
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
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: The user access token
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
 * /Activity/deleteActivity/{id}:
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
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: The user access token
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
 *         description: Cow not found
 *       500:
 *         description: Internal Server Error
 */

// /**
//  * @swagger
//  * /Activity/updateCow/{id}:
//  *   put:
//  *     summary: Update cow by ID
//  *     tags: [Activity]
//  *     security:
//  *       - BearerAuth: []
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: string
//  *         required: true
//  *         description: The cow ID
//  *       - in: header
//  *         name: Authorization
//  *         required: true
//  *         description: The user access token
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Activity'
//  *     responses:
//  *       200:
//  *         description: Cow updated successfully
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/Activity'
//  *       204:
//  *         description: No cow found in the database
//  *       401:
//  *         description: Unauthorized access
//  *       404:
//  *         description: Cow not found
//  *       500:
//  *         description: Internal Server Error
//  */




activityRouter.post("/recordTreatment/", verfyToken, recordTreatment);
activityRouter.post("/recordCastration/", verfyToken, recordCastration);
activityRouter.post("/recordWeaning/", verfyToken, recordWeaning);
activityRouter.post("/recordBreeding/", verfyToken, recordBreeding);
activityRouter.get("/getAllActivity/", verfyToken, getAllActivity);
activityRouter.get("/getActivityBytype/:activityType", verfyToken, getActivityBytype);
activityRouter.delete("/deleteActivity/:id", verfyToken, deleteActivity);
// activityRouter.put("/updateCow/:id", verfyToken, updateCow);

export default activityRouter;