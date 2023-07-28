import React from "react";
import { RESOURCES_QUESTIONS } from "../data/resources";

const ResourcesList = () => {
  const question = (item, index) => (
    <tr key={index}>
      <th scope="row">{item.name}</th>
      <td>
        <ul>
          {item.links.map((ele) => (
            <li>
              <a href={ele} target="_blank" rel="noreferrer">
                {ele}
              </a>
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header">
            <h5>Important Resources</h5>
          </div>
          <div className="card-block table-border-style">
            <div className="table-responsive">
              <table className="table table-hover">
                <tbody>{RESOURCES_QUESTIONS.map(question)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesList;
