import { AccountHolder } from "./account_holder";
import { Email } from "./email-account_holder";
import { Password } from "./password-account_holder";

describe("AccountHolder", () => {
  it("should create an account holder", () => {
    const accountHolder = new AccountHolder({
      name: "Guilherme",
      email: new Email("guii_1@hotmail.com"),
      password: new Password("Aa123456@"),
      updatedAt: new Date(),
    });
    expect(accountHolder).toBeInstanceOf(AccountHolder);
  });
});
