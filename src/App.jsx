import { useState } from 'react'
import Effect from './components/Effect'
import { ThemeProvider, ThemeSwitcher } from './components/Context';
import Props from './components/Props';



function App() {

  // ejemplo useState
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    if (count > 0){
      setCount(count - 1)
    }
  }

  return (
    <ThemeProvider>
      <div className='useState'>
        <p>El contador esta en {count}</p>
        <button onClick={increment} disabled={count >= 10}> Incrementar </button>
        <button onClick={decrement} disabled={count === 0}> Decrementar </button>
      </div>
      <Effect />
      
      <ThemeSwitcher />
      <Props 
        title="Componente Props" 
        description="Este es un ejemplo de props en React" 
        count={count} 
      />
    </ThemeProvider>
  )
}

export default App
