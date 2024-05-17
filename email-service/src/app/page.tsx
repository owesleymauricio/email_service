'use client'
import PrimaryInput from "@/components/input/PrimaryInput";
import { Flex } from '@chakra-ui/react'
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState('')

  return (
    <Flex
    flexDirection={'column'}
    height={'100vh'}
    width={'100vw'}
    maxW={'1200px'}
    >
      <PrimaryInput
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        name="email"
        label="Digite seu email"
      />

    </Flex>
  );
}
