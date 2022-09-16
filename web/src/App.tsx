import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdModal } from './components/CreatAdModal';

import { api } from './services/api';

import logoImg from './assets/logo-nlw-esports.svg';
import './styles/main.css';


type Game = {
  id: string,
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {  
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    api.get<Game[]>('games').then(response => setGames(response.data));
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="Logo" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => (
          <GameBanner key={game.id} game={game}/>
        ))}      
      </div>

      <Dialog.Root>        
        <CreateAdBanner />
        
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
