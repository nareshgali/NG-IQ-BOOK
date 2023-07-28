import React from "react";
import { MISCELLANEOUS_QUESTIONS } from "../data/miscellaneous";

const MiscellaneousQuestoins = () => {
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
            <h5>Miscellaneous Interview Questions</h5>
          </div>
          <div className="card-block table-border-style">
            <div className="table-responsive">
              <table className="table table-hover">
                <tbody>{MISCELLANEOUS_QUESTIONS.map(question)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiscellaneousQuestoins;
