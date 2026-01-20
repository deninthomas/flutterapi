/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Shopping cart management endpoints
 */

/**
 * @swagger
 * /cart:
 *   get:
 *     summary: Get user cart
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User cart with populated products
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       500:
 *         description: Server error
 *
 *   post:
 *     summary: Add product to cart
 *     tags: [Cart]
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
 *               - qty
 *               - size
 *             properties:
 *               product:
 *                 type: string
 *               qty:
 *                 type: number
 *               size:
 *                 type: string
 *     responses:
 *       201:
 *         description: Product added to cart successfully
 *       400:
 *         description: All fields require or product not found
 *
 *   patch:
 *     summary: Remove item from cart
 *     tags: [Cart]
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
 *     responses:
 *       201:
 *         description: Item removed from cart
 *       400:
 *         description: All fields require or bad request
 *
 * /cart/{cartid}/product/{id}:
 *   get:
 *     summary: Get single product details from cart
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: cartid
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product details from cart
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Cart:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         userid:
 *           type: string
 *         products:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/CartProduct'
 *         totalPrice:
 *           type: number
 *         totalDiscount:
 *           type: number
 *     CartProduct:
 *       type: object
 *       properties:
 *         product:
 *           $ref: '#/components/schemas/Product'
 *         qty:
 *           type: number
 *         size:
 *           type: string
 *         price:
 *           type: number
 *         discountPrice:
 *           type: number
 */
