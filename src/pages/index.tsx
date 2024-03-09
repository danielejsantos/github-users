import { CircularProgress, Stack } from "@mui/material";
import React from "react";

import EmptyState from "../components/EmptyState";
import Error from "../components/Error";
import Header from "../components/Header";
import User from "../components/User";
import { FavoriteProvider } from "../contexts/favoriteRepo";
import { useGitHub } from "../contexts/userData";
import { authToken } from "../utils";

const GitHubSearch: React.FC = () => {
  const {
    userData,
    repositories,
    loading,
    error,
    getUserData,
    getUserRepositories,
  } = useGitHub();

  const handleSearch = (username: string) => {
    if (username.trim() !== "") {
      getUserData(username, authToken);
      getUserRepositories(username, authToken);
    }
  };

  return (
    <FavoriteProvider>
      <Stack sx={{ height: "100vh" }}>
        <Header onSearch={handleSearch} />

        {loading && (
          <Stack alignItems="center" justifyContent="center" height="100%">
            <CircularProgress color="inherit" />
          </Stack>
        )}

        {!userData && !loading && !error && <EmptyState />}

        {userData && repositories && <User />}

        {error && <Error />}
      </Stack>
    </FavoriteProvider>
  );
};

export default GitHubSearch;
