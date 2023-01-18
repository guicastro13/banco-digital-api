import { Email } from "./email-account_holder";

describe("Email", () => {
  it("should create a valid email", () => {
    const email = new Email("guii_1@hotmail.com");
    expect(email).toBeInstanceOf(Email);
    expect(email).toBeTruthy();
  });
  it("should throw an error if email is invalid without '@'", () => {
    expect(() => new Email("guii_1hotmail.com")).toThrowError("Invalid email");
  });
  it("should throw an error if email is invalid without '.'", () => {
    expect(() => new Email("guii_1@hotmailcom")).toThrowError("Invalid email");
  });
});
