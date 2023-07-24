// Função para buscar o valor do Bitcoin em tempo real
function fetchBitcoinValue() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
      .then(response => response.json())
      .then(data => {
        const bitcoinValue = data.bpi.USD.rate_float;
        const formattedValue = bitcoinValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        document.getElementById('bitcoin-value').textContent = formattedValue;
      })
      .catch(error => {
        console.log(error);
        document.getElementById('bitcoin-value').textContent = 'Error fetching data';
      });
  }
  
  // Chama a função para buscar o valor do Bitcoin inicialmente
  fetchBitcoinValue();
  
  // Atualiza o valor do Bitcoin a cada 10 segundos
  setInterval(fetchBitcoinValue, 50000);

  // Função para buscar o valor do Ethereum em tempo real
function fetchEthereumValue() {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
      .then(response => response.json())
      .then(data => {
        const ethereumValue = data.ethereum.usd;
        const formattedValue = ethereumValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        document.getElementById('ethereum-value').textContent = formattedValue;
      })
      .catch(error => {
        console.log(error);
        document.getElementById('ethereum-value').textContent = 'Error fetching data';
      });
  }
  
  // Chama a função para buscar o valor do Ethereum inicialmente
  fetchEthereumValue();
  
  // Atualiza o valor do Ethereum a cada 10 segundos
  setInterval(fetchEthereumValue, 50000);
  
  