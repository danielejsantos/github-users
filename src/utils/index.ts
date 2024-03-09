import { format } from "date-fns";

export const authToken =
  "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";

export const sortedRepositories = (repositories: any[]) => {
  return repositories?.sort((a, b) => {
    if (!a.updatedAt || !b.updatedAt) return 0;

    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });
};

export const formatDate = (dateString: string): string => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return format(date, "dd MMMM yyyy");
};
