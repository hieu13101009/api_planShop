export const TODO = 'TODO';

export const addNewTodo = (todo: { example: string; }) => {
    return {
        type: 'TODO',
        todo,
    }
};