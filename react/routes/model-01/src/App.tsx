import { ThemeProvider } from "styled-components"
import { MainHeader } from "./components/header/MainHeader"
import { defaultTheme } from "./themes/default"
import { GlobalStyle } from "./styles.ts/global"
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <MainHeader />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
