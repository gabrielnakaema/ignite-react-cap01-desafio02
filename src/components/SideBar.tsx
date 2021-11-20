import { Button } from './Button';

import '../styles/sidebar.scss';

interface SideBarProps {
  genres: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }[];
  changeGenre: (id: number) => void;
  selectedGenreId: number;
}

export function SideBar({
  genres,
  changeGenre,
  selectedGenreId,
}: SideBarProps) {
  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => changeGenre(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
