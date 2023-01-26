import React from 'react';
import {Todos} from "../../components/Todos/Todos";
import '../name_style.css';

const TodosPage = () => {
    return (
        <div>
            <h2 className={'name_of_page'}>Todos</h2>
            <Todos/>
        </div>
    );
};

export default TodosPage;