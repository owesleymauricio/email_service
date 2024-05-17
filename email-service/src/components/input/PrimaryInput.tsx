import { Input, Flex, FormLabel } from '@chakra-ui/react'
import { ChangeEventHandler } from 'react'

interface PrimaryInputProps {
    name: string,
    value: string,
    label: string,
    onChange: ChangeEventHandler<HTMLInputElement> // para o chackra entender que é para mudar algo
}

export default function PrimaryInput({
    name,
    value,
    label,
    onChange
}: PrimaryInputProps) {
    return (
        <Flex
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        mt={50}
        >
            <FormLabel
            color={'#000'}
            fontSize={'30px'}
            >{label}</FormLabel>
            <Input
                border={'1px solid gray'}
                fontSize={'35px'}
                width={'400px'}
                height={'50px'}
                variant='filled'
                placeholder='Filled'
                name={name}
                value={value}
                onChange={onChange}
            />
        </Flex>
    )
}