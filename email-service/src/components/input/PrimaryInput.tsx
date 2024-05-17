import { Input, Flex, FormLabel } from '@chakra-ui/react'
import { ChangeEventHandler } from 'react'

interface PrimaryInputProps {
    name: string,
    value: string,
    label: string,
    placeholder: string,
    onChange: ChangeEventHandler<HTMLInputElement> // para o chackra entender que é para mudar algo
}

export default function PrimaryInput({
    name,
    value,
    label,
    placeholder,
    onChange
}: PrimaryInputProps) {
    return (
        <>
        <Flex
        flexDirection={'column'}
        >
            <FormLabel
            color={'#fff'}
            fontSize={'30px'}
            >{label}</FormLabel>
            <Input
                border={'1px solid gray'}
                fontSize={'35px'}
                width={'100%'}
                height={'50px'}
                variant='filled'
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
        </Flex>
        </>
    )
}