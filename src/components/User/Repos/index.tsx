import { Favorite } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import React from "react";

import { useFavorite } from "../../../contexts/favoriteRepo";
import { useGitHub } from "../../../contexts/userData";
import { formatDate, sortedRepositories } from "../../../utils";

const Repos: React.FC = () => {
  const { repositories } = useGitHub();
  const { favorites, toggleFavorite } = useFavorite();

  const sortedRepos = sortedRepositories(repositories || []);

  const isFavorite = (repoName: string) => favorites.includes(repoName);

  const handleToggleFavorite = (repoName: string) => {
    toggleFavorite(repoName);
  };

  return (
    <Stack px={3} spacing={2} width="100%">
      <Stack>
        <Typography variant="h6" fontWeight={600} sx={{ color: "#32C0C6" }}>
          Repositórios
        </Typography>
        {sortedRepos?.map((repo) => (
          <>
            <Stack
              border="1px solid #E3E6E9"
              borderRadius={2}
              p={1.5}
              flexDirection="row"
              justifyContent="space-between"
              marginBottom={2}
            >
              <Stack width="100%">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  sx={{ color: "#616161" }}
                >
                  {repo?.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#8C8C8C", maxWidth: "500px" }}
                >
                  {repo?.description}
                </Typography>
                <Stack flexDirection="row" alignItems="center" marginTop={2}>
                  {repo?.language && (
                    <Stack
                      flexDirection="row"
                      alignItems="center"
                      marginRight={4}
                    >
                      <Stack
                        borderRadius="50%"
                        height="16px"
                        width="16px"
                        sx={{ backgroundColor: "#32C0C6" }}
                      />
                      <Typography
                        variant="subtitle2"
                        marginLeft={1}
                        sx={{ color: "#8C8C8C" }}
                      >
                        {repo?.language}
                      </Typography>
                    </Stack>
                  )}
                  <Stack>
                    <Typography variant="subtitle2" sx={{ color: "#8C8C8C" }}>
                      Updated on {formatDate(repo?.updatedAt || "")}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack
                alignItems="center"
                border="1px solid #32C0C6"
                borderRadius="50%"
                height="40px"
                justifyContent="center"
                width="42px"
                sx={{
                  cursor: "pointer",
                  border: `1px solid ${
                    isFavorite(repo.name) ? "#32C0C6" : "none"
                  }`,
                  backgroundColor: isFavorite(repo.name) ? "none" : "#F3F3F5",
                }}
                onClick={() => handleToggleFavorite(repo.name)}
              >
                <Favorite
                  sx={{ color: isFavorite(repo.name) ? "#32C0C6" : "#8C8C8C" }}
                  fontSize="small"
                />
              </Stack>
            </Stack>
          </>
        ))}
      </Stack>
    </Stack>
  );
};

export default Repos;
