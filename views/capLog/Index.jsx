import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Index(props) {
  // can't use hooks or state
  // can't use event listeners in the same way
  return (
    <DefaultLayout>
      <div className="container">
        <div className="container2">
          <h1>Captain's Log</h1>
        </div>
        {/* buttons */}
        <div className="container3">
          <a href="/capLog/new">
            <button className="button" type="button">
              Add...
            </button>
          </a>
          <form action="/capLog/clear?_method=DELETE" method="POST">
            <button className="button" >CLEAR</button>
          </form>
        </div>
        
        <ul
          className="container4"
          style={{ listStyle: "none" }}
        >
          {props.capLog.map((capLog, index) => (
            <div className="container5">
              <li
                className="six"
                key={index}>
                <a href={`/capLog/${capLog._id}`}>
                  <strong>Title: {capLog.title}</strong>
                  <br />
                  <br />
                  <strong>Entry: {capLog.entry}</strong>
                  <br />
                  <br />
                  <strong>USS Enterprise: {capLog.shipIsBroken}</strong> <strong className="broken" >{capLog.shipIsBroken ? 'is not broken' : 'Broken'}</strong>
                  <br />
                  <br />
                  <strong>Time Stamp: {capLog.ts}</strong>
                </a>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </DefaultLayout>
  );
}

export default Index;
