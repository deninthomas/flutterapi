/**
 * @swagger
 * tags:
 *   name: Wishlist
 *   description: User wishlist management endpoints
 */

/**
 * @swagger
 * /wishlist:
 *   get:
 *     summary: Get user wishlist
 *     tags: [Wishlist]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User wishlist with populated products
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Wishlist'
 *       500:
 *         description: Server error
 *
 *   post:
 *     summary: Add or remove product from wishlist
 *     tags: [Wishlist]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - product
 *             properties:
 *               product:
 *                 type: string
 *                 description: Product ID
 *     responses:
 *       201:
 *         description: Product added to wishlist
 *       204:
 *         description: Product removed from wishlist
 *       400:
 *         description: All fields required
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Wishlist:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         userId:
 *           type: string
 *         products:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               product:
 *                 $ref: '#/components/schemas/Product'
 *               _id:
 *                 type: string
 */
