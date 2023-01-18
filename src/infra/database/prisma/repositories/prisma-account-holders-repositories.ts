import { Injectable } from '@nestjs/common';
import { AccountHolder } from 'src/domain/client/account_holder';
import { Email } from 'src/domain/client/email-account_holder';
import { AccountHolderRepository } from 'src/domain/repositories/account_holder-repositories';
import { PrismaAccountHolderMapper } from '../mapper/prisma.account-holder-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaAccountHolderRepository implements AccountHolderRepository {
  constructor(private readonly prisma: PrismaService) {}
  findByEmail(email: Email): Promise<AccountHolder> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<AccountHolder> {
    throw new Error('Method not implemented.');
  }
  update(accountHolder: AccountHolder): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async create(accountHolder: AccountHolder) {
    const raw = PrismaAccountHolderMapper.toPrisma(accountHolder);
    await this.prisma.accountHolder.create({ data: raw });
  }
}
