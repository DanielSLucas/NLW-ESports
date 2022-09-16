interface GameBannerProps {
  game: {
    id: string,
    title: string;
    bannerUrl: string;
    _count: {
      ads: number;
    }
  }
}

export function GameBanner({ game }: GameBannerProps) {
  return (
    <a href="" className='relative rounded-lg overflow-hidden'>
      <img src={game.bannerUrl} alt={game.title} />

      <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
        <strong className='font-bold text-white block'>{game.title}</strong>
        <span className='text-zinc-300 text-sm block'>{game._count.ads} anúncios</span>
      </div>
    </a>
  );
}