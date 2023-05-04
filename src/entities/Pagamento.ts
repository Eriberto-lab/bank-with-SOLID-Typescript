class Pagamento {
  private _valor: number;
  private _vencimento: Date;

  constructor(valor:number, vencimento: Date) {
    this._valor = valor;
    this._vencimento = vencimento;
  }

  public getValorFinal(): number {
    const hoje = new Date().getTime();

    if (hoje > this._vencimento.getTime()) {
      return this._valor * 1.2;
    }
    return this._valor;
  }
}

export default Pagamento;