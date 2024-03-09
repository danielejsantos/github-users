import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import notFound from "../../../public/not-found.png";

const Error = () => {
  return (
    <Stack alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
      <Typography
        variant="h6"
        sx={{ color: "#616161" }}
        fontWeight="600"
        fontFamily="Poppins"
      >
        Nenhum usuário encontrado
      </Typography>
      <Typography fontFamily="Poppins" mb={4} sx={{ color: "#616161" }}>
        Verifique se a escrita está correta ou tente novamente
      </Typography>
      <Image src={notFound} alt="Nenhum usuário encontrado" />
    </Stack>
  );
};

export default Error;
