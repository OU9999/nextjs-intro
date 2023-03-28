"use client";

import { Box, Center, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function Loading() {
  return (
    <>
      <Center pt={"32"} gap={5}>
        <Box padding="6" boxShadow="lg" bg="white" w="sm" h={"md"}>
          <Skeleton h="48" />
          <SkeletonText mt="8" noOfLines={8} spacing="4" />
        </Box>
      </Center>
    </>
  );
}
