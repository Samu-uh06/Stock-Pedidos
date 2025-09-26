import bcrypt from "bcryptjs";

export default class  PasswordEncrypter {
    constructor() {
        this.saltRounds = 10;
    }
    async hashPassword(password) {
        return await bcrypt.hash(password, this.saltRounds);
    }
    async comparePassword(password, hashPassword) {
        return await bcrypt.compare(password, hashPassword);
    }
}