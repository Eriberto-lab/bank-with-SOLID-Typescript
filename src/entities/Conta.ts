class Conta {
  private _saldo: number;

  constructor(s: number) {
    this._saldo = s;
  }

  public getSaldo(): number {
    return this._saldo;
  }

  public debitar(value: number): void {
    if (value > this._saldo) {
      throw new Error('saldo insuficiente');
    } else {
      this._saldo -= value;
    }
  }

  public creditar(value: number): void {
    this._saldo += value;
  }
}

export default Conta;