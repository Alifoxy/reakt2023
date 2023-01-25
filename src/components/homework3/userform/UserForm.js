import React from 'react';
import { useForm } from "react-hook-form";
import { getUsers } from "../../../api/getInfo/getUsersInfo";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../../validators/userValidator";


export const UsersForm = ({setUsers}) => {
    const { register, handleSubmit, reset, formState:{errors,isValid}} = useForm({mode: 'all',resolver:joiResolver(userValidator)});

    const submit =async (data) => {
        await getUsers.createUser(data);
        setUsers(prev => [...prev, data])
        reset()
    }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="username" {...register('username')}/>
            {errors.username&&<span>{errors.username.message}</span>}
            <button disabled={!isValid}>Create new user</button>
        </form>
    );
};