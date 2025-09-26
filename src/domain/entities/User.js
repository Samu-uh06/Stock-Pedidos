class User {
    constructor({ id, name, email, password, rol, createdAt = new Date()}) {
        if(!name || name.length <2 ) throw new Error("Nombre invalido");
        if(!email || email.length <8 || !email.include("@")) throw new Error("Email invalido");
        if(!password || password.length <4) throw new Error("Password invalido");
        if(!rol || rol.length <2) throw new Error("Rol invalido");

        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.rol = rol;
        this.createdAt = createdAt;
    }
}

export default User;