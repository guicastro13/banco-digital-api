import { randomUUID } from "crypto";
import { Email } from "./email-account_holder";
import { Password } from "./password-account_holder";

export type AccountHolderProps = {
  name: string;
  email: Email;
  password: Password;
  transactions: Transaction[];
  balance: number;
  createdAt: Date;
  updatedAt: Date;
};

export type Transaction = {
  id: string;
  type: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
};

export type Replace<T, R> = Omit<T, keyof R> & R;

export class AccountHolder {
  private readonly _id: string;
  private readonly props: AccountHolderProps;
  constructor(
    props: Replace<
      AccountHolderProps,
      { createdAt?: Date; transactions?: Transaction[]; balance?: number }
    >,
    id?: string
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      transactions: [],
      balance: 0,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  get email(): Email {
    return this.props.email;
  }

  set email(email: Email) {
    this.props.email = email;
  }

  get password(): Password {
    return this.props.password;
  }

  set password(password: Password) {
    this.props.password = password;
  }

  get transactions(): Transaction[] {
    return this.props.transactions;
  }

  set transactions(transactions: Transaction[]) {
    this.props.transactions.push(...transactions);
  }
  get balance(): number {
    return this.props.balance;
  }

  set balance(balance: number) {
    this.props.balance = balance;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }
}
