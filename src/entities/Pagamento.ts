import crypto from 'crypto';
import Conta from './Conta';

abstract class Pagamento {
  protected _valor: number;
  protected _origem: Conta;
  protected _destino: Conta;

  constructor(
    valor:number,    
    origem: Conta,
    destino: Conta,
  ) {
    this._valor = valor;
    this._origem = origem;
    this._destino = destino;
  }

  protected gerarCodigo(): string {
    return `${new Date().getTime()}-${crypto.randomUUID()}`;
  }

  abstract efetivar(): string;
}

export default Pagamento;