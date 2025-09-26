export default class DeleteOrder {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async execeute(id) {
        return this.orderRepository.delete(id);
    }
}
