import Pagamento from './Pagamento';

class PagamentoCartao extends Pagamento {
  public efetivar(): string {
    this._origem.debitar(this._valor);
    this._destino.creditar(this._valor);
    return this.gerarCodigo();
  }
}

export default PagamentoCartao;