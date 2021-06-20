import { STORE_QUIZ, ANSWER_QUESTION, RESET_GAME } from '../types/quiz';

export const answerQuestion = (answer: any) => ({
    type: ANSWER_QUESTION,
    payload: answer
});

export const storeQuiz = (quizData: { data: any[] }) => {
    return {
        type: STORE_QUIZ,
        payload: quizData.data,
    };
};

export const resetGame = () => ({
    type: RESET_GAME,
});