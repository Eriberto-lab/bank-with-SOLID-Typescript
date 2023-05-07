import Conta from './Conta';
import Pagamento from './Pagamento';

class PagamentoBoleto extends Pagamento {
  private _vencimento: Date;

  constructor(
    valor:number,    
    vencimento: Date,
    origem: Conta,
    destino: Conta,
  ) {
    super(valor, origem, destino);
    this._vencimento = vencimento;
  }

  private estaVencido(): boolean {
    const hoje = new Date();
    return hoje.getTime() > this._vencimento.getTime();
  }

  private getValorFinal(): number {
    if (this.estaVencido()) {
      return this._valor * 1.2;
    }
    return this._valor;
  }

  public efetivar(): string {
    const valorDaMensalidade = this.getValorFinal();
    this._origem.debitar(valorDaMensalidade);
    this._destino.creditar(valorDaMensalidade);
    return this.gerarCodigo();
  }
}

export default PagamentoBoleto;