import { Email } from "src/domain/client/email-account_holder";
import { AccountHolderRepository } from "src/domain/repositories/account_holder-repositories";

export type FindByEmailClientAccountRequest = {
  clientEMAIL: Email;
};

export class findByEmailClientAccount {
  constructor(
    private readonly clientAccountRepository: AccountHolderRepository
  ) {}
  async execute(request: FindByEmailClientAccountRequest) {
    const { clientEMAIL } = request;
    const clientAccount = await this.clientAccountRepository.findByEmail(
      clientEMAIL
    );

    if (!clientAccount) {
      throw new Error("Account not found");
    }

    return {
      clientAccount,
    };
  }
}
