/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management endpoints
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search products by name (regex)
 *     responses:
 *       200:
 *         description: List of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *               - offer
 *               - size
 *               - category
 *               - rating
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               offer:
 *                 type: number
 *                 description: Offer percentage
 *               size:
 *                 type: string
 *               category:
 *                 type: string
 *               rating:
 *                 type: number
 *               description:
 *                 type: string
 *               deliveryFee:
 *                 type: number
 *               details:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: Up to 5 images
 *     responses:
 *       201:
 *         description: Product added successfully
 *       400:
 *         description: All fields require
 *
 * /products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Product details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         name:
 *           type: string
 *         price:
 *           type: number
 *         discountPrice:
 *           type: number
 *         offer:
 *           type: number
 *         size:
 *           type: string
 *         category:
 *           type: string
 *         rating:
 *           type: number
 *         image:
 *           type: array
 *           items:
 *             type: string
 *         deliveryFee:
 *           type: number
 *         description:
 *           type: string
 *         details:
 *           type: string
 */
