import { Input } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";

interface PrimaryInputProps {
    name: string,
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>
}

export default function PrimaryInput({name, value, onChange}: PrimaryInputProps){
    return (
        <Input 
        variant='filled' 
        placeholder='Filled' 
        name={name} 
        value={value} 
        onChange={onChange}/>
    )
}
