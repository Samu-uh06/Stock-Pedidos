class OrderDetails {
    constructor({ id, orderId, productId, amount, unitPrice, subtotal }) {
        if(!orderId) throw new Error("ID de orden invalido");
        if(!productId) throw new Error("ID de productos invalido");
        if(!amount || amount <0) throw new Error("Cantidad invalida");
        if(!unitPrice || unitPrice <0) throw new Error("Precio unitario invalido");

        this.id = id;
        this.orderId = orderId;
        this.productId = productId;
        this.amount = amount;
        this.unitPrice = unitPrice;
        this.subtotal = subtotal;
    }
}

export default OrderDetails;