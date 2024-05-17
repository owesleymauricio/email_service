'use client'
import PrimaryInput from "@/components/input/PrimaryInput";
import { Button, Flex, Text } from '@chakra-ui/react'
import styles from "./page.module.css";
import { useState } from "react";
import { Span } from "next/dist/trace";

export default function Home() {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')





  return (
    <Flex
      marginRight={'auto'}
      marginLeft={'auto'}
      height={'100vh'}
      width={'100vw'}
      maxW={'1200px'}
      gap={2}
    >
      <form action="">
        <Flex
          flexDirection={'column'}
          border={'1px solid gray'}
          borderRadius={'5px'}
          marginRight={'auto'}
          marginLeft={'auto'}
          padding={'30px'}
          mt={50}
        >
          <Flex
            gap={2}
          >
            <PrimaryInput
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              name="firstName"
              label="Nome"
              placeholder="Digite seu nome"
            />
            <PrimaryInput
              value={secondName}
              onChange={(event) => setSecondName(event.target.value)}
              name="secondName"
              label="sobrenome"
              placeholder="Digite seu sobrenome"
            />
          </Flex>
          <PrimaryInput
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            name="email"
            label="Digite seu email"
            placeholder="Digite seu email"
          />

          <Button
            colorScheme='green'
            mt={'30px'}
          >Submit</Button>
        </Flex>
      </form>


      <Flex
        flexDirection={'column'}
        border={'1px solid gray'}
        borderRadius={'5px'}
        padding={'30px'}
        width={'500px'}
        height={'338px'}
        mt={50}
      >
        <Text>
          Você ira pagar:
        </Text>
        <span>R$: 150,00</span>
      </Flex>
    </Flex>
  );
}
