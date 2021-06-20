import React from "react";
import { navigate } from "gatsby"
import styled from "styled-components";
import StateContext from "../StateContext";
import QuizContent from "../components/QuizContent";
import Container from "../components/Container";
import { getScore, isCorrect } from "../logic";

const QuizList = styled.ul`
  list-style: none;
  margin-bottom: 1rem;
`;

const QuizItem = styled.li`
  margin-bottom: 15px;
  margin-left: -15px;
  &::before {
    font-size: 20px;
    content: "-";
    color: red;
    margin-left: -20px;
    margin-right: 10px;
    margin-bottom: 20px;
    text-align: left;
  }
  &.correct {
    font-weight: bold;
    &::before {
      content: "+";
      color: green;
    }
  }
`;

const Results = () => {
    const { state, resetGame } = React.useContext(StateContext);
    const onClickPlayAgain = () => {
        resetGame();
        navigate("/");
    };

    return (
        <Container>
            <h1>
                You Scored {getScore(state)}/{state.quiz.length}
            </h1>
            <QuizContent>
                <QuizList>
                    {state.answers.map(item => {
                        return (
                            <QuizItem
                                key={item.question}
                                className={isCorrect(item) ? "correct" : ""}
                            >
                                <span dangerouslySetInnerHTML={{ __html: item.question }} />
                            </QuizItem>
                        );
                    })}
                </QuizList>
            </QuizContent>
            <button onClick={onClickPlayAgain} > Play Again </button>
        </Container>
    );
};

export default Results;
