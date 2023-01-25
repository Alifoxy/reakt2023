import React from 'react';
import { useForm } from "react-hook-form";
import { getUsers } from "../../../api/GetInfo";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../../validators/userValidator";

export const UsersForm = ({setUsers}) => {
    const { register, handleSubmit, reset, formState:{errors,isValid},setValue} = useForm({mode: 'all',resolver:joiResolver(userValidator)});

    const submit = async (data) => {
        await getUsers()
    }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="username" {...register('username')}/>
            {errors.username&&<span>{errors.username.message}</span>}
            <button>Create new user</button>
        </form>
    );
};