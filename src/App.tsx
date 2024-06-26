import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CyclesContextProvider } from './contexts/CyclesContexts'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
