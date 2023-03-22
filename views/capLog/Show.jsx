import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Show(props) {
  console.log(props)
  return (
    <DefaultLayout>
      <div className="showContainer">
        <h1>Ship Name: {props.caplog.shipIsBroken}</h1>
        <h1>Entry Title: {props.caplog.title}</h1>
        <h1>Entry: {props.caplog.entry}</h1>
        <h1>Ship Status: {props.caplog.shipIsBroken ? 'is NOT broken' : 'Broken'}</h1>
        <br />
        <br />
        <div className="showContainer2">
          <a href={`/caplog/${props.caplog._id}/edit`}>
            <button className="btn btn-outline-primary">Edit</button>
          </a>
          <form
            action={`/caplog/${props.caplog._id}?_method=DELETE`}
            method="POST"
          >
            <button className="showButton">Delete</button>
          </form>
          <a href="/caplog">
            <button className="showButton">Back</button>
          </a>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Show;
