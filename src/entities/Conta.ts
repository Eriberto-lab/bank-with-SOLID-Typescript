import Cpf from './Cpf';

class Conta {
  private _saldo: number;
  private _cpf: Cpf;

  constructor(saldoInicial: number, cpf: string) {
    this._saldo = saldoInicial;
    this._cpf = new Cpf(cpf);
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