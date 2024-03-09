import { Search } from "@mui/icons-material";
import {
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

interface HeaderProps {
  onSearch: (username: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const [username, setUsername] = useState("");

  const isInputEmpty = username.trim() === "";

  const handleSearch = () => {
    if (!isInputEmpty) {
      onSearch(username);
    }
  };

  return (
    <Stack>
      <Stack direction="row" justifyContent="space-between">
        <Stack p={3} sx={{ width: "50%" }}>
          <TextField
            fullWidth
            label="Buscar usuário"
            size="small"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    disabled={isInputEmpty}
                    edge="end"
                    onClick={handleSearch}
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Stack>
      <Divider />
    </Stack>
  );
};

export default Header;
