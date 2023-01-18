import { Password } from "./password-account_holder";

describe("Password", () => {
  it("should create a valid password", () => {
    const password = new Password("Aa123456@");
    expect(password).toBeInstanceOf(Password);
    expect(password).toBeTruthy();
  });
  it("should throw an error if password is without special carachter '!@$#'", () => {
    expect(() => new Password("Aa123456")).toThrowError("Invalid password");
  });
  it("should throw an error if password is without number", () => {
    expect(() => new Password("Aa@#$%^&")).toThrowError("Invalid password");
  });
  it("should throw an error if password is without uppercase letter", () => {
    expect(() => new Password("aa123456@")).toThrowError("Invalid password");
  });
  it("should throw an error if password is without lowercase letter", () => {
    expect(() => new Password("AA123456@")).toThrowError("Invalid password");
  });
  it("should throw an error if password is less than 8 carachters", () => {
    expect(() => new Password("Aa1234@")).toThrowError("Invalid password");
  });
});
