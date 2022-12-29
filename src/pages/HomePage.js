import React from "react";
import books from "../books.json";
import Grid from "@mui/material/Grid";
import BookCard from "../components/BookCard";
import { Container } from "@mui/material";
function HomePage() {
  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {books.slice(0, 4).map((book) => (
          <Grid item xs={12} md={4}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomePage;
