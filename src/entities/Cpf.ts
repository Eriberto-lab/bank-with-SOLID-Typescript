class Cpf {
  private _valor: string;
  private static _regex =
  /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;

  constructor(valor: string) {
    if (!Cpf._regex.test(valor)) { 
      throw new Error('CPF iválido');
    }
    this._valor = valor;
  }

  get value(): string {
    return this._valor;
  }
}

export default Cpf;