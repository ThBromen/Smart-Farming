import express from "express";
import { register, login, changepassword, getUser, updateUser, getById, deleteUser } from "../Controllers/Authentication";
import { verfyToken, logger } from "../Middleware";

const userRouter = express.Router();


/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - fullNames
 *         - password
 *         - phoneNo
 *         - location
 *         - role
 *       properties:
 *         email:
 *           type: string
 *           description: The email of the user
 *         fullNames:
 *           type: string
 *           description: The fullNames of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *         phoneNo:
 *           type: string
 *           description: The phoneNo of the user
 *         location:
 *           type: string
 *           description: The location of the user
 *         role:
 *           type: string
 *           description: The role of the user i.e., user or admin
 *       example:
 *         email: hashimwimanatheogene34@gmail.com@gmail.com
 *         fullNames: Hashimwimana Theogene
 *         password: myPassword1
 *         phoneNo: "+25070000000"
 *         location: Kigali, Rwanda
 *     login:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The email of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *       example:
 *         email: hashimwimana@gmail.com
 *         password: myPassword
 *     userEdit:
 *       type: object
 *       required:
 *         - email
 *         - fullNames
 *         - image
 *         - password
 *         - phoneNo
 *         - location
 *         - role
 *       properties:
 *         email:
 *           type: string
 *           description: The email of the user
 *         fullNames:
 *           type: string
 *           description: The fullNames of the user
 *         image:
 *           type: string
 *           description: The profile picture of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *         phoneNo:
 *           type: string
 *           description: The phoneNo of the user
 *         location:
 *           type: string
 *           description: The location of the user
 *         role:
 *           type: string
 *           description: The role of the user i.e., user or admin
 *       example:
 *         email: hashimwimanatheogene34@gmail.com
 *         fullNames: Hashimwimana Theogene
 *         image: images.jpg
 *         password: myPassword1
 *         phoneNo: "+25070000000"
 *         location: Kigali, Rwanda
 */


/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: The user login and signup managing API
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The user accesibility managing API
 */

/**
 * @swagger
 * /api/v1/getuser:
 *   get:
 *     summary: Returns the list of all the users 
 *     tags: [Users]
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
 *                   $ref: '#/components/schemas/User'
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
 *     tags: [Auth]
 *     requestBody:
 *          required: true
 *          content:
 *            application/json:
 *               schema:
 *                   $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *          description: The user was successfully created
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/User'
 *       500:
 *          description: Internal Server Error
 */

/**
 * @swagger
 * /api/v1/login:
 *   post:
 *     summary: Log into user account
 *     tags: [Auth]
 *     requestBody:
 *          required: true
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/login'
 *     responses:
 *       200:
 *          description: The user was successfully authorised
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/signUp'
 *       403:
 *          description: Wrong email or password
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




userRouter.post("/login/", login);
userRouter.post("/register/", register);
userRouter.get("/getUser/", getUser);
userRouter.get("/userbyid/:id", verfyToken, getById);
userRouter.delete("/deleteuser/:id", verfyToken, deleteUser);
userRouter.put("/updateuser/:id", verfyToken, updateUser);
userRouter.post("/changepassword/:id", verfyToken, changepassword);

export default userRouter;
