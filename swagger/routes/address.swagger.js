/**
 * @swagger
 * tags:
 *   name: Address
 *   description: User address management endpoints
 */

/**
 * @swagger
 * /address:
 *   get:
 *     summary: Get all addresses for the logged-in user
 *     tags: [Address]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of addresses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Address'
 *
 *   post:
 *     summary: Create a new address
 *     tags: [Address]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AddressInput'
 *     responses:
 *       201:
 *         description: Address added successfully
 *       400:
 *         description: All fields required
 *
 * /address/{addId}:
 *   get:
 *     summary: Get a specific address by ID
 *     tags: [Address]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: addId
 *         required: true
 *         schema:
 *           type: string
 *         description: Address ID
 *     responses:
 *       200:
 *         description: Address details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Address'
 *
 *   patch:
 *     summary: Update an existing address
 *     tags: [Address]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: addId
 *         required: true
 *         schema:
 *           type: string
 *         description: Address ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AddressInput'
 *     responses:
 *       202:
 *         description: Address updated successfully
 *       400:
 *         description: All fields required
 *
 *   delete:
 *     summary: Delete an address
 *     tags: [Address]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: addId
 *         required: true
 *         schema:
 *           type: string
 *         description: Address ID
 *     responses:
 *       202:
 *         description: Address deleted successfully
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Address:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         user:
 *           type: string
 *         title:
 *           type: string
 *         fullName:
 *           type: string
 *         phone:
 *           type: string
 *         pin:
 *           type: string
 *         state:
 *           type: string
 *         place:
 *           type: string
 *         address:
 *           type: string
 *         landMark:
 *           type: string
 *     AddressInput:
 *       type: object
 *       required:
 *         - title
 *         - fullName
 *         - phone
 *         - pin
 *         - state
 *         - place
 *         - address
 *         - landMark
 *       properties:
 *         title:
 *           type: string
 *         fullName:
 *           type: string
 *         phone:
 *           type: string
 *         pin:
 *           type: string
 *         state:
 *           type: string
 *         place:
 *           type: string
 *         address:
 *           type: string
 *         landMark:
 *           type: string
 */
