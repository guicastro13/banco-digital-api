import { Injectable } from '@nestjs/common';
import { AccountHolder } from 'src/domain/client/account_holder';
import { Email } from '../client/email-account_holder';

export abstract class AccountHolderRepository {
  abstract create(accountHolder: AccountHolder): Promise<void>;
  abstract findByEmail(email: Email): Promise<AccountHolder | null>;
  abstract findOne(id: string): Promise<AccountHolder | null>;
  abstract update(accountHolder: AccountHolder): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
