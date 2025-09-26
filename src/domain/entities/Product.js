class product {
    constructor({ id, name, description, price, stock, category, createdAt = new Date()}) {
        if(!name || name.length <2) throw new Error("Nombre invalido");
        if(!price || price <0) throw new Error("Precio invalido");
        if(!stock) throw new Error("Stock invalido");
        if(!category) throw new Error("Categoria invalida");

        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.category = category;
        this.createdAt = createdAt;
    }
}

export default product;