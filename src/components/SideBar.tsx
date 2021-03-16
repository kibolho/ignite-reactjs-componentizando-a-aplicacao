import "../styles/sidebar.scss";
import { GenreResponseProps, MovieProps } from "../App";
import { Button } from "./Button";

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}

export const SideBar: React.FC<SideBarProps> = ({
  genres,
  selectedGenreId,
  handleClickButton,
}) => (
  <nav className="sidebar">
    <span>
      Watch<p>Me</p>
    </span>

    <div className="buttons-container">
      {genres.map((genre) => (
        <Button
          id={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>
  </nav>
);
