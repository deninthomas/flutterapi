/**
 * @swagger
 * tags:
 *   name: Carousal
 *   description: Carousal/Banner management endpoints
 */

/**
 * @swagger
 * /carousal:
 *   get:
 *     summary: Get all carousals
 *     tags: [Carousal]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of carousals
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Carousal'
 *       404:
 *         description: Not found
 *
 *   post:
 *     summary: Create a new carousal item
 *     tags: [Carousal]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               offer:
 *                 type: string
 *               carousal:
 *                 type: string
 *                 format: binary
 *                 description: Carousal image
 *     responses:
 *       201:
 *         description: Carousal added successfully
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Carousal:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         offer:
 *           type: string
 *         image:
 *           type: string
 */
