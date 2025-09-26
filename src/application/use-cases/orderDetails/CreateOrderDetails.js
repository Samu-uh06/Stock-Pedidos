import OrderDetails from "../../../domain/entities/OrderDetails.js";

export default class CreateOrderDetails {
    constructor(orderDetailsRepository) {
        this.orderDetailsRepository = orderDetailsRepository;
    }

    async execute(orderData) {
        const orderDetails = new OrderDetails(orderData);
        const { orderId, productId, amount, unitPrice, subtotal} = orderDetails;

        const orderDetailsToSave = {
            orderId,
            productId,
            amount,
            unitPrice,
            subtotal
        };

        return await this.orderDetailsRepository.create(orderDetailsToSave);
    }
}
