import styled from 'styled-components'
export const CountDownContainer = styled.div`
  height: 10rem;
  font-family: 'Roboto mono', monospace;
  font-size: 10rem;
  line-height: 10rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`
