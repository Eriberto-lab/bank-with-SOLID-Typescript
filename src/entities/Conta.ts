import Cpf from './Cpf';

abstract class Conta {
  protected _saldo: number;
  private _cpf: Cpf;

  constructor(saldoInicial: number, cpf: string) {
    this._saldo = saldoInicial;
    this._cpf = new Cpf(cpf);
  }

  public getSaldo(): number {
    return this._saldo;
  }

  abstract debitar(valor: number): void;

  public creditar(value: number): void {
    this._saldo += value;
  }
} 

export default Conta;