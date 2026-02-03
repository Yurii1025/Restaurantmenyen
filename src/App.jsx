import './App.css'
import Header from './components/Header/Header'
import data from './components/data'
import Menu from './components/Menu/Menu'

function App() {


  return (
    <>
      <Header />
      
      <Menu dishes={data}/>
      </>
  )
}

export default App
