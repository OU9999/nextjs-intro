"use client";
import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import { use } from "react";

interface IAboutId {
  params: {
    id: string;
  };
}

interface IDetail {
  title: string;
  original_title: string;
  overview: string;
  backdrop_path: string;
}

const fetchDetail = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/movies/${id}`);
  const json = await response.json();
  return json;
};

export default function AboutId({ params }: IAboutId) {
  const detail = use<IDetail>(fetchDetail(params.id));
  const coverImg = `https://image.tmdb.org/t/p/w500${detail.backdrop_path}`;

  return (
    <>
      <Center pt={"32"} gap={5}>
        <Box padding="6" boxShadow="lg" bg="white" w="sm" h={"md"}>
          <Image alt="bg" src={coverImg} h="48" w="96" />
          <Heading mt={4}>{detail.title}</Heading>
          <Text color={"gray"}>{detail.original_title}</Text>
          <Text noOfLines={4}>{detail.overview}</Text>
        </Box>
      </Center>
    </>
  );
}
