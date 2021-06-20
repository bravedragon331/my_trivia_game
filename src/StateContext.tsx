import * as React from 'react'
import { initialState } from './state/reducers/quiz'
import reducer from './state/reducers/quiz'
import { STORE_QUIZ, ANSWER_QUESTION, RESET_GAME } from './state/types/quiz';


const QUIZ_ENDPOINT =
  "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

const fetchQuiz = async () => {
  try {
    const response = await fetch(QUIZ_ENDPOINT);
    const json = await response.json();
    return json.results;
  } catch (e) {
    console.error(e);
  }
};


export const StateContext = React.createContext<any>(initialState)

export const StateProvider = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal; }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <StateContext.Provider
      value={{
        state,
        fetchQuiz,
        storeQuiz: quiz => {
          return dispatch({ type: STORE_QUIZ, payload: { quiz } });
        },
        answerQuestion: answer => {
          return dispatch({ type: ANSWER_QUESTION, payload: { answer } });
        },
        resetGame: () => {
          return dispatch({ type: RESET_GAME });
        }
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

export default StateContext;