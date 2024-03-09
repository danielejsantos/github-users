import { Octokit } from "@octokit/core";
import { ReactNode, createContext, useContext, useState } from "react";

export interface UserData {
  name: string | null;
  login: string;
  bio: string | null;
  avatar_url: string;
}

interface Repository {
  id: number;
  name: string | null;
  description: string | null;
  language: string | null;
  updatedAt: string | null;
}

interface GitHubContextProps {
  userData: UserData | null;
  repositories: Repository[] | null;
  loading: boolean;
  error: Error | null;
  getUserData: (username: string, token: string) => void;
  getUserRepositories: (username: string, token: string) => void;
}

const GitHubContext = createContext<GitHubContextProps | undefined>(undefined);

interface GitHubProviderProps {
  children: ReactNode;
}

export const GitHubProvider: React.FC<GitHubProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [repositories, setRepositories] = useState<Repository[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (username: string, token: string) => {
    setLoading(true);
    setError(null);

    const octokit = new Octokit({
      auth: token,
    });

    try {
      const response = await octokit.request("GET /users/{username}", {
        username,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      setUserData(response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const getUserData = (username: string, token: string) => {
    setUserData(null);
    setLoading(true);
    fetchData(username, token);
  };

  const getUserRepositories = async (username: string, token: string) => {
    setLoading(true);
    setError(null);

    const octokit = new Octokit({
      auth: token,
    });

    try {
      const response = await octokit.request("GET /users/{username}/repos", {
        username,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      setRepositories(
        response.data.map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          language: repo.language,
          updatedAt: repo.updated_at,
        }))
      );
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <GitHubContext.Provider
      value={{
        userData,
        repositories,
        loading,
        error,
        getUserData,
        getUserRepositories,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export const useGitHub = (): GitHubContextProps => {
  const context = useContext(GitHubContext);
  if (!context) {
    throw new Error("useGitHub must be used within a GitHubProvider");
  }
  return context;
};
