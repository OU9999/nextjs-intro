"use client";
import { Box, Button, HStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

function Header({}: Props) {
  const path = usePathname();
  return (
    <HStack
      px="10"
      py="3"
      gap={3}
      w="full"
      position="fixed"
      zIndex={99}
      bgColor="#fff"
      boxShadow={"dark-lg"}
    >
      <Box w="40" h="auto">
        <Image src="/vercel.svg" alt="vercel" width={400} height={200} />
      </Box>
      <Link href="/">
        <Button bgColor={path === "/" ? "twitter.500" : undefined}>Home</Button>
      </Link>
      <Link href="/about">
        <Button>about</Button>
      </Link>
    </HStack>
  );
}

export default Header;
