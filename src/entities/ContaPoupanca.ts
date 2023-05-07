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
}

export default ContaPoupanca;