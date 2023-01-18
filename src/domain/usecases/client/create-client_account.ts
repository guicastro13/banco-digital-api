import { Injectable } from '@nestjs/common';
import { AccountHolderRepository } from 'src/domain/repositories/account_holder-repositories';
import { AccountHolder } from '../../client/account_holder';
import { Email } from '../../client/email-account_holder';
import { Password } from '../../client/password-account_holder';

export type CreateClientAccountRequest = {
  name: string;
  email: string;
  password: string;
};

@Injectable()
export class CreateClientAccount {
  constructor(
    private readonly clientAccountRepository: AccountHolderRepository,
  ) {}
  async execute(request: CreateClientAccountRequest) {
    const { name, email, password } = request;
    const clientAccount = new AccountHolder({
      name,
      email: new Email(email),
      password: new Password(password),
      updatedAt: new Date(),
    });
    await this.clientAccountRepository.create(clientAccount);

    return {
      clientAccount,
    };
  }
}
