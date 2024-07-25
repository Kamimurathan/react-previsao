import { useRef, useState } from 'react'
import { Container, H1, Caixa , Input, Button } from './styles'
import axios from 'axios'

import Home from '../components/Weather/Home'
import Home5Days from '../components/Weather5Days/Home'

function App() {

  const inputInfo = useRef()
  const [time, setTime] = useState()
  const [time5Days, setTime5Days] = useState()

  async function searchCity() {

    const city = inputInfo.current.value

    const key = '69a16f3a31b045ae0ec8edfa940f0ac2'

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5Days)

    setTime(apiInfo.data)
    setTime5Days(apiInfo5Days.data)

  }

  return (
    <Container>
      <H1>DevClub Previsão do Tempo</H1>

      <Caixa>
        <Input ref={inputInfo} type='text' placeholder='Digite o nome da cidade' />
        <Button onClick={searchCity}>Buscar</Button>
      </Caixa>

      {time && <Home time={time}  />}
      {time5Days && <Home5Days time5Days={time5Days} />}
    </Container>
  )
}

export default App
