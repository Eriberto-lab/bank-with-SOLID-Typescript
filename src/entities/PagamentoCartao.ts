import IPagamentoEfetivavel from '../interfaces/IpagamentoEfetivavel';
import Pagamento from './Pagamento';

class PagamentoCartao extends Pagamento implements IPagamentoEfetivavel {
  public efetivar(): string {
    this._origem.debitar(this._valor);
    this._destino.creditar(this._valor);
    return this.gerarCodigo();
  }
}

export default PagamentoCartao;