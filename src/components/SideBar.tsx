import { useEffect, useState } from "react";
import { useGenres } from "../hooks/useGenres";
import { Button } from "./Button";


export function SideBar() {
  // Complete aqui 
  const {selectedGenreId, setSelectedGenreId, genres} = useGenres();

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return(
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}