import * as action from './actionTypes'; 
 
export const taskAdded = (task: string, description: string) => ({
    type: action.TASK_ADDED,
    payload: {
        task: task,
        description: description
    }
}); 

export const taskDone = (id: number) => ({
    type: action.TASK_DONE,
    payload: {
        id: id,
        status: 'Complete'
    }
});

export  const taskDelete = (id: number) => ({
    type: action.TASK_DELETE,
    payload: {
        id: id
    }
});