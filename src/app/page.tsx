"use client";

import { Grid, Text, VStack } from "@chakra-ui/react";
import { use } from "react";
import MovieCard from "./components/MovieCard";

interface IMovies {
  id: number;
  title: string;
  original_title: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
}

const fetchMovies = async () => {
  const response = await fetch("http://localhost:3000/api/movies");
  const json = await response.json();
  return json.results;
};

export default function Home() {
  const getMovies = use<IMovies[]>(fetchMovies());

  return (
    <>
      <VStack pt={"32"}>
        <Text>Home</Text>
        <Grid
          templateColumns={"repeat(3, 1fr)"}
          px={10}
          columnGap={8}
          rowGap={16}
          pb={20}
        >
          {getMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              original_title={movie.original_title}
              overview={movie.overview}
              backdrop_path={movie.backdrop_path}
              release_date={movie.release_date}
            />
          ))}
        </Grid>
      </VStack>
    </>
  );
}
