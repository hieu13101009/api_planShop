export const TODO = 'TODO';

export const addNewTodo = (todo) => {
    return {
        type: 'TODO',
        todo,
    }
};