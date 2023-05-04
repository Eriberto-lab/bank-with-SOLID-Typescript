import Conta from './entities/Conta';
import Pagamento from './entities/Pagamento';

const contaEriberto = new Conta(1000);

const contaSpotify = new Conta(50000);

const pagamentoSpotify = new Pagamento(30, new Date('2023-03-22'));

console.log('Antes da transação:', contaEriberto, contaSpotify);

const transacao = (
  pagador: Conta,
  recebedor: Conta,
  pagamento: Pagamento,
) => {
  const valorDaMensalidade = pagamento.getValorFinal();
  pagador.debitar(valorDaMensalidade);
  recebedor.creditar(valorDaMensalidade);
};

transacao(contaEriberto, contaSpotify, pagamentoSpotify);

console.log('Depois da transação:', contaEriberto, contaSpotify);