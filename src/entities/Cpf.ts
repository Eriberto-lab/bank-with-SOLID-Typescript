class Cpf {
  private _valor: string;

  constructor(valor: string) {
    if (!/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/.test(valor)) { 
      throw new Error('CPF iválido');
    }
    this._valor = valor;
  }

  get value(): string {
    return this._valor;
  }
}

export default Cpf;