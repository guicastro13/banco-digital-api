import { AccountHolder as RawAccountHolder } from '@prisma/client';
import { AccountHolder } from 'src/domain/client/account_holder';
import { Email } from 'src/domain/client/email-account_holder';
import { Password } from 'src/domain/client/password-account_holder';

export class PrismaAccountHolderMapper {
  static toPrisma(accountHolder: AccountHolder) {
    return {
      id: accountHolder.id,
      name: accountHolder.name,
      email: accountHolder.email.value,
      password: accountHolder.password.value,
      balance: accountHolder.balance,
      updatedAt: accountHolder.updatedAt,
    };
  }
  static toDomain(rawAccountHolder: RawAccountHolder) {
    return new AccountHolder(
      {
        name: rawAccountHolder.name,
        email: new Email(rawAccountHolder.email),
        password: new Password(rawAccountHolder.password),
        updatedAt: rawAccountHolder.updatedAt,
      },
      rawAccountHolder.id,
    );
  }
}
