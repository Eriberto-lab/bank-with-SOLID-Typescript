class Cpf {
  private _valor: string;
  private static _regex =
  /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;

  constructor(valor: string) {
    Cpf.validar(valor);
    this._valor = valor;
  }

  private static validar(valor: string): void {
    if (!Cpf._regex.test(valor)) { 
      throw new Error('CPF iválido');
    }
  }

  get value(): string {
    return this._valor;
  }
}

export default Cpf;