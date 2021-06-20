import { STORE_QUIZ, ANSWER_QUESTION, RESET_GAME } from '../types/quiz';

export interface IQuizState {
    quiz: any[]
    answers: any[]
}

export const initialState = {
    quiz: [] as any[],
    answers: [] as any[]
};

interface IAction {
    type?: string;
    payload?: any;
}

const reducer = (state = initialState, action: IAction = {}) => {

    const { type, payload } = action;

    switch (type) {
        case STORE_QUIZ:
            return {
                ...state,
                quiz: action.payload.quiz,
            };
        case ANSWER_QUESTION:
            return {
                ...state,
                answers: [...state.answers, action.payload.answer]
            };
        case RESET_GAME:
            return initialState;
        default:
            return state;
    }
};

export default reducer;