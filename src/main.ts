import Conta from './entities/Conta';
import PagamentoBoleto from './entities/PagamentoBoleto';
import PagamentoCartao from './entities/PagamentoCartao';

const contaEriberto = new Conta(1000, '837.530.823-41');

const contaAgiota = new Conta(50000, '657.326.803-22');

const contaSorveteria = new Conta(3000, '837.530.823-51');

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

const codigoDePagamento = pagamentoAgiota.efetivar();

pagamentoSorvete.efetivar();

console.log(codigoDePagamento);

console.log(contaEriberto, pagamentoSorvete.efetivar());