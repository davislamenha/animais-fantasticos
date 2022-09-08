export default function initBitcoinApi() {
  const btc = document.querySelector(".btc-preco");

  async function getBtc(url) {
    try {
      const res = await fetch(url);
      const dados = await res.json();
      btc.innerText = (1000 / dados.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(erro);
      console.log("Algo de errado não deu certo!");
    }
  }
  getBtc("https://blockchain.info/ticker");
}
