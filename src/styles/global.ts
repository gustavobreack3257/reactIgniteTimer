import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
        box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
    }

    ::-webkit-scrollbar {
    width: 6px; /* Largura da barra de rolagem vertical */
    height: 6px; /* Altura da barra de rolagem horizontal */

}

::-webkit-scrollbar-thumb {
    background-color:  ${(props) => props.theme['gray-700']};
    border-radius: 8px;
}

    body {
        background: ${(props) => props.theme['gray-900']};
        color: ${(props) => props.theme['gray-300']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
