import './App.css'
import { Links } from './componentes/Links'
import Profile from './componentes/Profile'

function App() {
  return (
    <>
      <div className="containter-app flex flex-col items-center bg-[url('public/fondo.jpg')] object-countain h-screen">
      
        <Profile />
        <button className="text-white text-center border-2 border-white px-4 py-2 rounded-full my-2 animate-bounce"><a href="public/Alejandra Zacarias - CV 2025.pdf" download="Alejandra Zacarias - CV 2025.pdf">Download CV</a></button>
        <Links />
      </div>
    </>
  )
}

export default App
