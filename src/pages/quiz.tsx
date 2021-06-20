import React from "react";
import { navigate } from "gatsby"
import StateContext from "../StateContext";
import QuizContent from "../components/QuizContent";
import Container from "../components/Container";
import RadioButtons from "../components/RadioButtons";

const Quiz = () => {
  const { state, fetchQuiz, storeQuiz, answerQuestion } = React.useContext(StateContext);
  const [idx, setIdx] = React.useState(0);
  const [quiz, setQuiz] = React.useState(null);
  const [answerState, setSelectedAnswer] = React.useState();

  React.useEffect(() => {
    if (state.quiz && state.quiz[idx]) {
      setQuiz(state.quiz[idx])
    }
  }, [state, idx]);

  React.useEffect(() => {
    loadQuiz();
  }, [])

  const loadQuiz = async () => {
    let quizes = await fetchQuiz();
    storeQuiz(quizes);
  }

  const handleAnswerChange = event => {
    setSelectedAnswer(event.target.value);
  };

  const handleNextClick = async () => {
    answerQuestion({ ...quiz, answer: answerState });
    if (idx + 1 < state.quiz.length) {
      setIdx(idx + 1);
    } else if (idx + 1 == state.quiz.length) {
      navigate("/result");
    }
  };

  const disabledButton = status => {
    return status === undefined;
  };

  return quiz ? (
    <Container>
      <h1>{quiz.category}</h1>
      <QuizContent>
        <p dangerouslySetInnerHTML={{ __html: quiz.question }} />
        <RadioButtons
          items={[
            {
              id: 1,
              value: "True",
              onChange: handleAnswerChange,
              label: "True"
            },
            {
              id: 2,
              value: "True",
              onChange: handleAnswerChange,
              label: "False"
            }
          ]}
        />

        <button
          onClick={handleNextClick}
          disabled={disabledButton(answerState)}
        >Next</button>
      </QuizContent>
      <p>
        {idx + 1} of {state.quiz.length}
      </p>
    </Container>
  ) : (<div></div>)
};

export default Quiz;