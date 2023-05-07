/* eslint-disable no-restricted-syntax */
import Conta from './entities/Conta';
// import Pagamento from './entities/Pagamento';
import PagamentoBoleto from './entities/PagamentoBoleto';
import PagamentoCartao from './entities/PagamentoCartao';
import IPagamentoEfetivavel from './interfaces/IpagamentoEfetivavel';

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

const efetivarPagamentos = (pagamentos: IPagamentoEfetivavel[]): void => {     
  for (const pagamento of pagamentos) {
    const codigo = pagamento.efetivar();
    console.log(codigo, 'Pagamento efetuado!');
  }
};

efetivarPagamentos([pagamentoAgiota, pagamentoSorvete]);