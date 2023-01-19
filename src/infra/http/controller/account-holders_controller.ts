import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateClientAccount } from '@client/use-cases/create-client_account';
import { CreateAccountBody } from '../dto/create-account-dto';
import { AccountHolderViewModel } from '../viewmodels/account-holder.viewmodel';
import { FindoneClientAccount } from '@/domain/client/use-cases/findOne-client_account';

@Controller()
export class AccountHoldersController {
  constructor(
    private readonly createClientAccount: CreateClientAccount,
    private readonly findOneClientAccount: FindoneClientAccount,
  ) {}
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

  @Get('findOne/:ClientID')
  async findOne(@Param('ClientID') clientID: string) {
    const { clientAccount } = await this.findOneClientAccount.execute({
      clientID,
    });

    return {
      clientAccount: AccountHolderViewModel.toHTTP(clientAccount),
    };
  }
}
