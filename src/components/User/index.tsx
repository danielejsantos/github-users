import { Avatar, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useGitHub } from "../../contexts/userData";

import Repos from "./Repos";

const User: React.FC = () => {
  const { userData } = useGitHub();
  const [forceUpdate, setForceUpdate] = useState(0);

  useEffect(() => {
    setForceUpdate((prev) => prev + 1);
  }, [userData]);

  return (
    <Stack direction="row" key={forceUpdate} p={3}>
      <Stack
        alignItems="center"
        border="1px solid #E3E6E9"
        borderRadius={2}
        height="fit-content"
        justifyContent="center"
        p={2}
        spacing={2}
        width="448px"
      >
        <Avatar
          alt={userData?.login}
          src={userData?.avatar_url}
          sx={{ width: 120, height: 120 }}
        />
        <Stack alignItems="center">
          <Typography variant="h6" fontWeight={600} sx={{ color: "#616161" }}>
            {userData?.name}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#4E4E4E" }}>
            @{userData?.login}
          </Typography>
        </Stack>
        <Typography variant="subtitle2" sx={{ color: "#4E4E4E" }}>
          {userData?.bio}
        </Typography>
      </Stack>
      <Repos />
    </Stack>
  );
};

export default User;
