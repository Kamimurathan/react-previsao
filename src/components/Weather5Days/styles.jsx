import styled from 'styled-components'

export const Container = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    margin: 20px 0;
    padding: 20px;
    border-radius: 10px;

    h3 {
        font-size: 1.5rem;
        margin-bottom: 15px;
    }
`

export const WeatherList = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
`

export const WeatherItem = styled.div`
    .forecast-day {
        text-transform: capitalize;
        font-size: 1.1rem;
    }

    .description {
        text-transform: capitalize;
    }

    text-align: center;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 10px;
    border-radius: 10px;
`