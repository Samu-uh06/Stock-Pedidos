export default class GetOrder {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async execete() {
        return await this.orderRepository.findALL();
    }

}