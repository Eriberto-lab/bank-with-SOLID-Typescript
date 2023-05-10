// import IPagamentoEfetivavel from '../interfaces/IpagamentoEfetivavel';
import Conta from './Conta';
import Pagamento from './Pagamento';

class PagamentoPix extends Pagamento {
  private _chave: string;

  constructor(
    chave: string,
    valor:number,    
    origem: Conta,
    destino: Conta,
  ) {
    super(valor, origem, destino);
    this._chave = chave;
  }

  public efetivar(): string {
    this._origem.debitar(this._valor);
    this._destino.creditar(this._valor);
    return `${Pagamento.gerarCodigo()}-${this._chave}`;
  }
}

export default PagamentoPix;