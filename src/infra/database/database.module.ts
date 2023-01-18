import { Module } from '@nestjs/common';
import { AccountHolderRepository } from 'src/domain/repositories/account_holder-repositories';
import { PrismaService } from './prisma/prisma.service';
import { PrismaAccountHolderRepository } from './prisma/repositories/prisma-account-holders-repositories';

@Module({
  providers: [
    PrismaService,
    {
      provide: AccountHolderRepository,
      useClass: PrismaAccountHolderRepository,
    },
  ],
  exports: [AccountHolderRepository],
})
export class DatabaseModule {}
