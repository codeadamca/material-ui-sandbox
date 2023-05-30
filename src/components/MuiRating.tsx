import {Stack, Rating} from "@mui/material";
import {useState} from "react";

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  return (
    <Stack spacing="2">
      <Rating value={value} onChange={handleChange} />
    </Stack>
  );
};
