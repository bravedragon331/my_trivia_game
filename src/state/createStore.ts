import quizReducer from './reducers/quiz';
import { createStore } from 'redux';
import { IQuizState } from './reducers/quiz';

export interface IState {
    quizReducer: IQuizState
}

export default (preloadedState: IState) => {
    return createStore(
        quizReducer,
        getLoadedState(preloadedState),
    )
};

const getLoadedState = (preloadedState: IState | any) => {
    if (typeof window !== 'undefined')
        return {
            ...preloadedState,
        }

    return {
        ...preloadedState,
    }
}