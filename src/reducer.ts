import { taskAdded } from './actions';
import * as actions from './actionTypes';

let lastId = 0;

const reducer = (state = [], action) => {
    switch(action.type){
        case actions.TASK_ADDED:
            return [...state,{
                id: ++lastId,
                key: lastId,
                task: action.payload.task,
                description: action.payload.description,
                status: 'Incomplete'
            }];
        case actions.TASK_DONE: 
            return state.map(task => {
                if(action.payload.id === task.id){
                    return {...task, status: 'Complete'};
                }
                return task;
            });
        case actions.TASK_DELETE:
            return state.filter(task => action.payload.id !== task.id);
        default:
            return state;
    }
}

export default reducer;