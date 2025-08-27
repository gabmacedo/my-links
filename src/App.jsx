import './index.css'
import { MainCard } from './components/Card'

function App() {
  return (
    <div className='h-screen w-screen bg-zinc-950 bg-cover font-[Poppins] flex items-center flex-col justify-center'>
      <MainCard />
      <footer className='absolute w-full bottom-9 flex items-center justify-center'>
        <span className='text-white/30 text-sm cursor-pointer select-none'>developed by Gabriel Macedo.</span>
      </footer>
    </div>
  )
}

export default App
