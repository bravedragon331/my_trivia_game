import React from "react";
import Link from 'gatsby-link'

const Index = () => {
  return (
    <div>
      <h1>Welcome to the trivia challenge</h1>
      <p>
        You will be presented with 10 True or False questions.
      </p>
      <p>Can you score 100%?</p>
      <button><Link to="/quiz/" style={{ textDecoration: 'none' }}>BEGIN</Link></button>

    </div>
  )
};

export default Index;
