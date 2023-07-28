import React from "react";
import { UNIT_TESTING_QUESTIONS } from "../data/unittestingquestions";

const UnitTestingQuestions = () => {
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
            <h5>Unit Testing Interview Questions</h5>
          </div>
          <div className="card-block table-border-style">
            <div className="table-responsive">
              <table className="table table-hover">
                <tbody>{UNIT_TESTING_QUESTIONS.map(question)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitTestingQuestions;
