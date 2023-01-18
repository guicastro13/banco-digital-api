export class Email {
  private readonly email: string;

  get value(): string {
    return this.email;
  }

  private valideEmail(email: string): boolean {
    var pattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; //
    if (email.match(pattern)) {
      return true;
    }
    return false;
  }

  constructor(email: string) {
    const isValidEmail = this.valideEmail(email);
    if (!isValidEmail) {
      throw new Error("Invalid email");
    }
    this.email = email;
  }
}
