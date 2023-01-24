import React from 'react';
import { useForm } from "react-hook-form";
import { getUsers } from "./api/GetInfo";

export const UsersForm = ({setUsers}) => {
    const { register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        mode: 'all',
    })


    const submit = async (data) => {
        await getUsers().then(({data}) => setUsers((prevState) => [...prevState, data]))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="username" {...register('username')}/>
            <button>Create new user</button>
        </form>
    );
};