import React from "react";
import { CSS_QUESTIONS } from "../data/cssquestions";

const CssQuestions = () => {
  const question = (question, index) => (
    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{question}</td>
    </tr>
  );
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header">
            <h5>CSS Interview Questions</h5>
          </div>
          <div className="card-block table-border-style">
            <div className="table-responsive">
              <table className="table table-hover">
                <tbody>{CSS_QUESTIONS.map(question)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CssQuestions;
