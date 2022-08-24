import Formulario from "./Formulario"
import Alert from "./Alert"
import useLyrics from "../hooks/useLyrics"

const AppLyrics = () => {
  const { alert } = useLyrics()
  return (
    <>
      <header>Búsqueda de Letras de Canciones</header>

      <Formulario/>
      <main>
        {alert && <Alert>{alert}</Alert>}
      </main>
    </>
  )
}

export default AppLyrics