import { Module } from '@nestjs/common';
import { CreateClientAccount } from 'src/domain/usecases/client/create-client_account';
import { DatabaseModule } from '../database/database.module';
import { AccountHoldersController } from './controller/account-holders_controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AccountHoldersController],
  providers: [CreateClientAccount],
})
export class HttpModule {}
