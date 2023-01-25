import React from 'react';
import { useForm } from "react-hook-form";
import { getComments } from "../../../api/getInfo/getCommentsInfo";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../../validators/userValidator";


export const UsersForm = ({setComments}) => {
    const { register, handleSubmit, reset, formState:{errors,isValid}} = useForm({mode: 'all',resolver:joiResolver(userValidator)});

        const submit = async (data) => {
            await getComments.addComment(data).then(({data}) => setComments((prevState) => [...prevState, data]))
            reset()
        }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="name of comment" {...register('name')}/>
            {errors.name&&<span>{errors.name.message}</span>}
            <button disabled={!isValid}>Create new comment</button>
        </form>
    );
};