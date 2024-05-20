import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { PersonData } from '@/interfaces/person-data'
import axios from 'axios';

const postData = (data: PersonData) => {
    return axios.post("http://localhost:8080/send-data", data);//data é o body da requisição
}

export const userIdentityMutation = () => {
    const { mutate, isLoading, isSucess }: any = useMutation({
        mutationFn:(data: PersonData)=> postData(data) 
    });
  
    return{
        mutate,
        isLoading,
        isSucess
    }
}
