export const getScore = state => {
    const { answers } = state;
    return answers.filter(answer => {
        return answer.correct_answer === answer.answer;
    }).length;
};

export const isCorrect = quiz => {
    return quiz.correct_answer === quiz.answer;
};
