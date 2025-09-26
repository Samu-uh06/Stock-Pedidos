export default class LoginUser {
    constructor(userRepository, passwordEncrypter, tokenGenerator) {
        this.userRepository = userRepository;
        this.passwordEncrypter = passwordEncrypter;
        this.passwordEncrypter = passwordEncrypter;
    }
    async execute({ email, password }) {
        const user = await this.userRepository.findByUserEmail(email);
        if (!user) throw new Error("Usuario no encontrado");

        const isValid = await this.passwordEncrypter.comparePassword(password, user.password);
        if (!isValid) throw new Error("Conreaseña incorrecta");

        const token = this.tokenGenerator.generate({ id: user.id, email: user.email});

        //Excluir password y devolverlo limpio
        const { password: _, __v, ...userData } = user.toObject();

        return { token, user: userData};
    }
}