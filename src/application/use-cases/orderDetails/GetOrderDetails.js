export default class GetOrderDetails {
    constructor(orderDetailsRepository) {
        this.orderDetailsRepository = orderDetailsRepository;
    }
    async execute() {
        return await this.orderDetailsRepository.findALL();
    }
}