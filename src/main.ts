/* eslint-disable no-restricted-syntax */
import ContaCorrente from './entities/ContaCorrente';
import ContaPoupanca from './entities/ContaPoupanca';
import Pagamento from './entities/Pagamento';
import PagamentoBoleto from './entities/PagamentoBoleto';
import PagamentoCartao from './entities/PagamentoCartao';
import PagamentoPix from './entities/PagamentoPix';

const contaEriberto = new ContaCorrente(500, 1000, '837.530.823-41');

const contaAgiota = new ContaCorrente(6000, 50000, '657.326.803-22');

const contaSorveteria = new ContaPoupanca(2, 3000, '837.530.823-51');

const contaBanco = new ContaPoupanca(100000000, 800000000000, '397.326.803-22');

contaEriberto.creditar(10000);

const pagamentoAgiota = new PagamentoBoleto(
  30,
  new Date('2023-03-22'),
  contaEriberto,
  contaAgiota,
);

const pagamentoSorvete = new PagamentoCartao(
  31, 
  contaEriberto,
  contaSorveteria,
);

const pagamentoCarro = new PagamentoPix(
  'chave-pix-11959037783',
  1500,
  contaEriberto,
  contaBanco,
);

const efetivarPagamentos = (pagamentos: Pagamento[]): void => {     
  for (const pagamento of pagamentos) {
    const codigo = pagamento.efetivar();
    console.log(codigo, 'Pagamento efetuado!');
  }
};

efetivarPagamentos([pagamentoAgiota, pagamentoSorvete, pagamentoCarro]);