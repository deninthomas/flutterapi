/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management endpoints
 */

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders for the user
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - addressId
 *               - paymentType
 *               - products
 *             properties:
 *               addressId:
 *                 type: string
 *               paymentType:
 *                 type: string
 *                 enum: [COD, ONLINE_PAYMENT]
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: The _id of the product in the cart
 *     responses:
 *       201:
 *         description: Order placed successfully
 *       400:
 *         description: Invalid request
 *
 * /orders/{orderId}:
 *   get:
 *     summary: Get order details by ID
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *
 *   patch:
 *     summary: Cancel an order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order canceled successfully
 *       400:
 *         description: Order already canceled or not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
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
 *         paymentType:
 *           type: string
 *         paymentStatus:
 *           type: boolean
 *         orderStatus:
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
 *         orderDate:
 *           type: string
 *           format: date-time
 *         deliveryDate:
 *           type: string
 *           format: date-time
 *         totalItem:
 *           type: number
 *         totalPrice:
 *           type: number
 *         totalDiscount:
 *           type: number
 */
