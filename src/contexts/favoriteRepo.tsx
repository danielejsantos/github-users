import React, { createContext, useContext, useState } from "react";

interface FavoriteContextType {
  favorites: string[];
  toggleFavorite: (repoName: string) => void;
}

const FavoriteContext = createContext<FavoriteContextType>({
  favorites: [],
  toggleFavorite: () => {},
});

export const useFavorite = () => {
  return useContext(FavoriteContext);
};

export const FavoriteProvider = ({ children }: any) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (repoName: string) => {
    if (favorites.includes(repoName)) {
      setFavorites(favorites.filter((name) => name !== repoName));
    } else {
      setFavorites([...favorites, repoName]);
    }
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
