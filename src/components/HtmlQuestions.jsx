import React from "react";
import { HTML_QUESTIONS } from "../data/htmlquestions";

const HtmlQuestions = () => {
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
            <h5>HTML Interview Questions</h5>
          </div>
          <div className="card-block table-border-style">
            <div className="table-responsive">
              <table className="table table-hover">
                <tbody>{HTML_QUESTIONS.map(question)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HtmlQuestions;
