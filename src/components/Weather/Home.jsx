import { Container, H2, TempInfo, Img, Temp, Description, Details, SensacaoTermica, Umidade, Pressao } from './styles'

function Home({ time }) {

  return (
    <Container>
      <H2>{time.name}</H2>
      <h3>Hoje</h3>
      <TempInfo>
        <Img src={`https://openweathermap.org/img/wn/${time.weather[0].icon}.png`}/>
        <Temp>{Math.round(time.main.temp)}ºC</Temp>
      </TempInfo>

      <Description>{time.weather[0].description}</Description>
      <Details>
        <SensacaoTermica>Sensação Térmica: {Math.round(time.main.feels_like)}</SensacaoTermica>
        <Umidade>Umidade: {time.main.humidity}%</Umidade>
        <Pressao>Pressão: {time.main.pressure}</Pressao>
      </Details>
    </Container>
  )

}

export default Home
