"use client";

import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const cardVariants: Variants = {
  show: {
    opacity: [0, 1],
    y: [-100, 0],
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  },
};

interface IMovieCardProps {
  id: number;
  title: string;
  original_title: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
}

export default function MovieCard({
  id,
  title,
  original_title,
  backdrop_path,
  overview,
  release_date,
}: IMovieCardProps) {
  const [magnification, setMagnification] = useState(false);
  const coverImg = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
  const router = useRouter();

  return (
    <>
      <Link href={{ pathname: `/about/${id}` }}>
        <Box
          as={motion.div}
          initial={{ y: 0 }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <Card
            maxW="sm"
            minH={"sm"}
            as={motion.div}
            variants={cardVariants}
            boxShadow={"2xl"}
            whileInView={"show"}
            viewport={{ once: true }}
            onHoverStart={() => setMagnification(true)}
            onHoverEnd={() => setMagnification(false)}
          >
            <CardBody>
              <Box overflow={"hidden"} borderRadius="lg">
                <Image
                  width={"full"}
                  h={"48"}
                  src={coverImg}
                  alt="thumbnail"
                  borderRadius="lg"
                  transform={"auto"}
                  scale={magnification ? 1.05 : 1}
                  transition={"0.5s"}
                  cursor="pointer"
                />
              </Box>
              <Stack mt="6" spacing="3">
                <Flex h={"12"} alignItems={"center"}>
                  <Heading
                    size="md"
                    noOfLines={2}
                    transition={"0.3s"}
                    cursor="pointer"
                  >
                    {title}
                  </Heading>
                </Flex>
                <Box position={"relative"}>
                  <Box width={"auto"} minH="24" maxH="24" overflow={"hidden"}>
                    <Text>{overview}</Text>
                  </Box>
                  <Box
                    position={"absolute"}
                    w="full"
                    h="full"
                    background={`linear-gradient(to top, #fff 0%,rgba(255,255,255,0) 100%)`}
                    top={0}
                  ></Box>
                </Box>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <HStack gap={1}>
                <HStack
                  spacing={1}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text>{release_date}</Text>
                </HStack>
              </HStack>
            </CardFooter>
          </Card>
        </Box>
      </Link>
    </>
  );
}
