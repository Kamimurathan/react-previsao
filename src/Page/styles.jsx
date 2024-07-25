import styled from 'styled-components'

export const Container = styled.div`
    background: linear-gradient(to right, #00b4db, #0083b0);
    padding: 20px;
    max-width: 1000px;
    min-width: 100vw;
    min-height: 100vh;
    color: #333333;
    line-height: 1.6;
    text-align: center;
`

export const H1 = styled.h2`
    color: #ffffff;
    font-size: 3rem;
`

export const Caixa = styled.div``

export const Input = styled.input`
    margin-top: 30px;
    padding: 10px;
    padding-left: 17px;
    width: 60%;
    max-width: 300px;
    border: none;
    border-radius: 20px 0 0 20px;
`

export const Button = styled.button`
    background-color: #ff9800;
    padding: 10px;
    border: none;
    border-radius: 0 20px 20px 0;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #f57c00;
    }

    &:active {
        background-color: #e07000;
    }
`