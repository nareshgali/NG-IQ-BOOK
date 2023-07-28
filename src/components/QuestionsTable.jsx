import React from "react";
import { JS_QUESTIONS } from "../data/jsquestions";

const QuestionsTable = () => {
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
            <h5>JavaScript Interview Questions</h5>
          </div>
          <div className="card-block table-border-style">
            <div className="table-responsive">
              <table className="table table-hover">
                <tbody>{JS_QUESTIONS.map(question)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsTable;
