import { Injectable } from '@nestjs/common';
import { AccountHolder } from '@client/account_holder';
import { Email } from '@client/email-account_holder';
import { AccountHolderRepository } from '@client/repositories/account_holder-repositories';
import { PrismaAccountHolderMapper } from '../mapper/prisma.account-holder-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaAccountHolderRepository implements AccountHolderRepository {
  constructor(private readonly prisma: PrismaService) {}
  findByEmail(email: Email): Promise<AccountHolder> {
    throw new Error('Method not implemented.');
  }
  async findOne(id: string): Promise<AccountHolder | null> {
    const accountHolder = await this.prisma.accountHolder.findUnique({
      where: { id },
    });

    if (!accountHolder) {
      return null;
    }

    return PrismaAccountHolderMapper.toDomain(accountHolder);
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
