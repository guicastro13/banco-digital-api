import { AccountHolder } from "src/domain/client/account_holder";

export class AccountHolderViewModel {
  static toHTTP(client: AccountHolder) {
    return {
      id: client.id,
      name: client.name,
      email: client.email,
      createdAt: client.createdAt,
      updatedAt: client.updatedAt,
    };
  }
}
