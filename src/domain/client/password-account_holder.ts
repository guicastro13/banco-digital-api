export class Password {
  private readonly password: string;

  get value(): string {
    return this.password;
  }

  private validePassword(password: string): boolean {
    var pattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/; //
    if (password.match(pattern)) {
      return true;
    }
    return false;
  }

  constructor(password: string) {
    const isValidPassword = this.validePassword(password);
    if (!isValidPassword) {
      throw new Error("Invalid password");
    }
    this.password = password;
  }
}
