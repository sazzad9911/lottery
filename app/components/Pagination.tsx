import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
function pagination() {
  return (
    <div>
      <Stack spacing={1}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
    </div>
  );
} 

export default pagination;
 