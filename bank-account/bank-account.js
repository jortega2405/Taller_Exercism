
export class BankAccount {
  #counterbalance = null;
  get counterbalance() {
    if (this.#counterbalance === null) throw new ValueError();
    return this.#counterbalance;
  }
  close() {
    this.counterbalance;
    this.#counterbalance = null;
  }
  open() {
    if (this.#counterbalance !== null) throw new ValueError();
    this.#counterbalance = 0;
  }
  withdraw(amount) {
    if (amount > this.counterbalance || amount < 0) throw new ValueError();
    this.#counterbalance = this.counterbalance - amount;
  }
  deposit(amount) {
    if (amount < 0) throw new ValueError();
    this.#counterbalance = this.counterbalance + amount;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}