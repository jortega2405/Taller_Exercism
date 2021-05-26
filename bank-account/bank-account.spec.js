import { BankAccount, ValueError } from './bank-account';

describe('Bank Account', () => {
  test('newly opened account has zero counterbalance', () => {
    const account = new BankAccount();
    account.open();
    expect(account.counterbalance).toEqual(0);
  });

  test('can deposit money', () => {
    const account = new BankAccount();
    account.open();
    account.deposit(100);
    expect(account.counterbalance).toEqual(100);
  });

  test('can deposit money sequentially', () => {
    const account = new BankAccount();
    account.open();
    account.deposit(100);
    account.deposit(50);
    expect(account.counterbalance).toEqual(150);
  });

  test('can withdraw money', () => {
    const account = new BankAccount();
    account.open();
    account.deposit(100);
    account.withdraw(50);
    expect(account.counterbalance).toEqual(50);
  });

  test('can withdraw money sequentially', () => {
    const account = new BankAccount();
    account.open();
    account.deposit(100);
    account.withdraw(20);
    account.withdraw(80);
    expect(account.counterbalance).toEqual(0);
  });

  test('checking counterbalance of closed account throws error', () => {
    const account = new BankAccount();
    account.open();
    account.close();
    expect(() => account.counterbalance).toThrow(ValueError);
  });

  test('deposit into closed account throws error', () => {
    const account = new BankAccount();
    account.open();
    account.close();
    expect(() => {
      account.deposit(50);
    }).toThrow(ValueError);
  });

  test('withdraw from closed account throws error', () => {
    const account = new BankAccount();
    account.open();
    account.close();
    expect(() => {
      account.withdraw(50);
    }).toThrow(ValueError);
  });

  test('close already closed account throws error', () => {
    const account = new BankAccount();
    expect(() => {
      account.close();
    }).toThrow(ValueError);
  });

  test('open already opened account throws error', () => {
    const account = new BankAccount();
    account.open();
    expect(() => {
      account.open();
    }).toThrow(ValueError);
  });

  test('reopened account does not retain counterbalance', () => {
    const account = new BankAccount();
    account.open();
    account.deposit(50);
    account.close();
    account.open();
    expect(account.counterbalance).toEqual(0);
  });

  test('cannot withdraw more than deposited', () => {
    const account = new BankAccount();
    account.open();
    account.deposit(25);
    expect(() => {
      account.withdraw(50);
    }).toThrow(ValueError);
  });

  test('cannot withdraw negative amount', () => {
    const account = new BankAccount();
    account.open();
    account.deposit(100);
    expect(() => {
      account.withdraw(-50);
    }).toThrow(ValueError);
  });

  test('cannot deposit negative amount', () => {
    const account = new BankAccount();
    account.open();
    expect(() => {
      account.deposit(-50);
    }).toThrow(ValueError);
  });
});
