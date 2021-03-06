"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const order_controller_1 = require("../controller/order.controller");
const router = new Router();
router.post('orders', order_controller_1.OrderController.createOrder);
router.post('orders/notify', order_controller_1.OrderController.orderNotify);
router.get('orders/customer', order_controller_1.OrderController.getCustomerOrders);
router.get('orders/:out_trade_no', order_controller_1.OrderController.getOrderDetail);
router.get('orders/:out_trade_no/commodity/:commodityId', order_controller_1.OrderController.getCommodityOrderDetail);
router.post('orders/refund', order_controller_1.OrderController.refundOrder);
router.get('admin_orders/group/:id', order_controller_1.OrderController.getOrdersFromGroup);
router.post('admin_orders/refund', order_controller_1.OrderController.adminRefundOrder);
router.post('admin_orders/pickup', order_controller_1.OrderController.adminOrderPickup);
exports.orderRouter = router;
//# sourceMappingURL=order.router.js.map