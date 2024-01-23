const apiKey = 'rqJWO9I8JvrKzIGAfOtrOL3AiO7b8Aqn';
const urlCidade = 'http://dataservice.accuweather.com/locations/v1/search';
const urlClima = 'http://dataservice.accuweather.com/currentconditions/v1/';

// exemplo 1

const localizarCidade = async () => {
    try {
        const local = document.getElementById('pesquisa').value; // Obter valor do input
        const respostaCidade = await fetch(`${urlCidade}?q=${local}&apikey=${apiKey}`)
        const cidade = await respostaCidade.json()

        const respostaClima = await fetch(`${urlClima}${cidade[0].Key}?apikey=${apiKey}`)
        const clima = await respostaClima.json()

        document.getElementById('local').innerHTML = cidade[0].LocalizedName
        document.getElementById('condicao').innerHTML = clima[0].WeatherText
        document.getElementById('temperatura').innerHTML = clima[0].Temperature.Metric.Value + '°C'
        document.getElementById('data').innerHTML = new Date(clima[0].LocalObservationDateTime).toLocaleDateString(
            'pt-BR')

        document.getElementById('caixa').style.display = 'block'
    } catch (erro) {
        console.log(erro)
    }
}
