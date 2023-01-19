import { Body, Controller, Post } from '@nestjs/common';
import { CreateClientAccount } from '@client/use-cases/create-client_account';
import { CreateAccountBody } from '../dto/create-account-dto';
import { AccountHolderViewModel } from '../viewmodels/account-holder.viewmodel';

@Controller()
export class AccountHoldersController {
  constructor(private readonly createClientAccount: CreateClientAccount) {}
  @Post('createAccount')
  async createAccount(@Body() body: CreateAccountBody) {
    const { name, email, password } = body;
    const { clientAccount } = await this.createClientAccount.execute({
      name,
      email,
      password,
    });

    return {
      clientAccount: AccountHolderViewModel.toHTTP(clientAccount),
    };
  }
}
