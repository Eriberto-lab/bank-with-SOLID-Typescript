import Conta from './Conta';

class ContaCorrente extends Conta {
  private _limiteConta: number;

  constructor(limiteConta: number, saldoInicial: number, cpf: string) {
    super(saldoInicial, cpf);
    this._limiteConta = limiteConta;
  }

  debitar(valor: number): void {
    if (valor > this._saldo + this._limiteConta) {
      throw new Error('SALDO_INSUFICIENTE');
    }

    this._saldo -= valor;
  }
}

export default ContaCorrente;