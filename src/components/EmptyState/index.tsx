import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import peopleSearch from "../../../public/people-search.png";

const EmptyState = () => {
  return (
    <Stack alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
      <Typography
        variant="h6"
        sx={{ color: "#616161" }}
        fontWeight="600"
        fontFamily="Poppins"
      >
        Procure pelo Nome ou Nome de Usuário
      </Typography>
      <Typography fontFamily="Poppins" mb={4} sx={{ color: "#616161" }}>
        Encontre os repositórios de algum usuário digitando no campo acima
      </Typography>
      <Image src={peopleSearch} alt="Buscar usuário" />
    </Stack>
  );
};

export default EmptyState;
