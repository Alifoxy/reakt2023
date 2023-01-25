import React from 'react';
import { useForm } from "react-hook-form";
import { getUsers } from "./api/GetInfo";

export const UsersForm = ({setUsers}) => {
    const { register, handleSubmit, reset, formState:{errors,isValid},setValue} = useForm({mode: 'all',})

    const submit = async (data) => {
        await getUsers()
    }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="username" {...register('username',{pattern:{value:/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                    message:'username can only contain letters and have 1 to 20 symbols'}})}/>
            {errors.brand&&<span>{errors.brand.message}</span>}
            <button>Create new user</button>
        </form>
    );
};