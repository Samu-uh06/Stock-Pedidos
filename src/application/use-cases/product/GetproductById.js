export default class GetProductById {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(id) {
    return await this.productRepository.findById(id);
  }
}

//cambio para el nombre del archivo