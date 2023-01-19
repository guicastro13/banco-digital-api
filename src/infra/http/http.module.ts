import { Module } from '@nestjs/common';
import { CreateClientAccount } from '@client/use-cases/create-client_account';
import { DatabaseModule } from '../database/database.module';
import { AccountHoldersController } from './controller/account-holders_controller';
import { FindoneClientAccount } from '@/domain/client/use-cases/findOne-client_account';

@Module({
  imports: [DatabaseModule],
  controllers: [AccountHoldersController],
  providers: [CreateClientAccount, FindoneClientAccount],
})
export class HttpModule {}
