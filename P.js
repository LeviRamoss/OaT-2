document.getElementById('buscarBtn').addEventListener('click', buscarDDD);

function buscarDDD() {
    const ddd = document.getElementById('dddInput').value;
    const resultDiv = document.getElementById('result');

    // Limpa o resultado anterior
    resultDiv.innerHTML = '';

    if (ddd) {
        
        fetch(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro: DDD não encontrado');
                }
                return response.json();
            })
            .then(data => {
                const estados = data.state;
                resultDiv.innerHTML = `O DDD ${ddd} pertence ao(s) estado(s): ${estados}`;
            })
            .catch(error => {
                resultDiv.innerHTML = 'Erro: ' + error.message;
            });
    } else {
        resultDiv.innerHTML = 'Por favor, insira um DDD válido.';
    }
}
