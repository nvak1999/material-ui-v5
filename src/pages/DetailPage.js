import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import books from "../books.json";
function DetailPage() {
  const params = useParams();
  const bookId = params.id;
  const book = books.find((book) => book.id === bookId);
  if (!book)
    return (
      <Container sx={{ width: 900 }}>
        <Typography variant="h3" marginTop={3}>
          book not found
        </Typography>
      </Container>
    );
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" marginTop={3}>
        {book.title}
      </Typography>
      <Box marginTop={2} sx={{ display: "flex" }}>
        <img src="images/a-Dolls-house.jpg" alt="" />
      </Box>
    </Container>
  );
}

export default DetailPage;
