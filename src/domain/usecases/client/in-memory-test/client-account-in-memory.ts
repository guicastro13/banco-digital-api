import { AccountHolder } from "src/domain/client/account_holder";
import { Email } from "src/domain/client/email-account_holder";
import { AccountHolderRepository } from "src/domain/repositories/account_holder-repositories";

export class InMemoryAccountHolders implements AccountHolderRepository {
  public accountHolder: AccountHolder[] = [];

  async findByEmail(email: Email): Promise<AccountHolder | null> {
    return (
      this.accountHolder.find((account) => account.email === email) ?? null
    );
  }
  async findOne(id: string): Promise<AccountHolder | null> {
    return this.accountHolder.find((account) => account.id === id) || null;
  }
  async update(accountHolder: AccountHolder): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async create(accountHolder: AccountHolder): Promise<void> {
    this.accountHolder.push(accountHolder);
  }
}
