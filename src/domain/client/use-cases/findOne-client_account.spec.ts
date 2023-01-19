import { AccountHolder } from '../account_holder';
import { CreateClientAccount } from './create-client_account';
import { InMemoryAccountHolders } from '../in-memory-test/client-account-in-memory';

describe('FindoneClientAccount', () => {
  it('should find one account holder', async () => {
    const clientAccountRepository = new InMemoryAccountHolders();
    const createClientAccount = new CreateClientAccount(
      clientAccountRepository,
    );
    const request = {
      name: 'Guilherme',
      email: 'guii_1@hotmail.com',
      password: 'Aa123456@',
    };
    const response = await createClientAccount.execute(request);
    expect(response.clientAccount).toBeInstanceOf(AccountHolder);
  });
});
