import Conta from './Conta';

class ContaPoupanca extends Conta {
  private _jurosAnual: number;

  constructor(jurosAnual: number, saldoInicial: number, cpf: string) {
    super(saldoInicial, cpf);
    this._jurosAnual = jurosAnual;
  }

  getRendimentoAnual(): number {
    return this.getSaldo() * 0.2;
  }

  public debitar(valor: number): void {
    if (valor > this._saldo) {
      throw new Error('SALDO_INSUFICIENTE');
    }
    this._saldo -= valor;
  }
}

export default ContaPoupanca;