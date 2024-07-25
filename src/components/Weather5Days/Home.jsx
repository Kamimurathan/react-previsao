import { Container, WeatherItem, WeatherList } from './styles'

function Home({ time5Days }) {

    let dailyForecast = {}

    for (let forecast of time5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }
    }

    const next5DaysForecast = Object.values(dailyForecast).slice(1, 6)

    function convertDate(date) {

        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' })

        return newDate

    }

    return (
        <Container>
            <h3>Previsão Próximos 5 Dias</h3>
            <WeatherList>
                {next5DaysForecast.map(forecast => (
                    <WeatherItem key={forecast.dt}>
                        <p className='forecast-day'>{convertDate(forecast)}</p>
                        <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} />
                        <p className='description'>{forecast.weather[0].description}</p>
                        <p>{Math.round(forecast.main.temp_min)}ºC min / {Math.round(forecast.main.temp_max)}ºC máx</p>
                    </WeatherItem>
                ))}
            </WeatherList>
        </Container>
    )

}

export default Home
