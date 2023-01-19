import { Email } from 'src/domain/client/email-account_holder';
import { AccountHolderRepository } from '@/domain/client/repositories/account_holder-repositories';
import { Injectable } from '@nestjs/common';

export type FindoneClientAccountRequest = {
  clientID: string;
};

@Injectable()
export class FindoneClientAccount {
  constructor(
    private readonly clientAccountRepository: AccountHolderRepository,
  ) {}
  async execute(request: FindoneClientAccountRequest) {
    const { clientID } = request;
    const clientAccount = await this.clientAccountRepository.findOne(clientID);

    if (!clientAccount) {
      throw new Error('Account not found');
    }

    return {
      clientAccount,
    };
  }
}
