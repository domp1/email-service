import { useMutation } from "@tanstack/react-query";
import { PersonData } from "../interfaces/person-data";
import axios from "axios";

const postData = (data: PersonData) => {
    return axios.post("https://localhost:8000/send-data", data);
}

export function useIdentityMutation(){
    const{ mutate, isPending, isSuccess, isError } = useMutation({
        mutationFn: (data: PersonData) => postData(data)
    })

    return {
        mutate,
        isPending,
        isSuccess,
        isError
    }
}