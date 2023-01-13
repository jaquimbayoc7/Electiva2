
/*importar modulos*/
import Formulario from "./components/Formulario"
import Header from "./components/Header"


/*Funcion creadora de la aplicación */ 
function App() {
  
  return (
    /*Etiqueta padre y el body de la página*/
    <> 
      <Header />
      <Formulario />
    </>
    
  )
}
/*Export para importar el módulo a otras partes de la app*/
export default App
