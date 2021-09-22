import * as React from "react";
import { useState, useEffect } from "react";
import { render } from "react-dom";
import { todo } from "../../declarations/todo";

const MyHello = () => {
  const [todos, setTodos] = useState(false);
  const [addtodoinput, setaddtodoinput] = useState('');
  const [errorDisplay, setErrorDisplay] = useState(false);
  const [error, setError] = useState();

  const getTodos = async () => {
    const gettodo = await todo.getTodos();
    setTodos(gettodo);
  };
  const completeTodo = async (e) => {
    const comp = await todo.completeTodo(e);
  };
  const ClearCompTodo = async () => {
    const clearcomp = await todo.clearCompleted();
  };
  const addTodo = async () => {
    if (addtodoinput === "") {
      setError("You aeriously Dont have anything to do?!");
      setErrorDisplay(true);
      console.log("error");
    } else {
      const Addtodos = await todo.addTodo(addtodoinput);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        className="alert"
        style={{ display: `${errorDisplay ? "block" : "none"}` }}
      >
        <span
          class="closebtn"
          onClick={() => {
            setErrorDisplay(false);
          }}
        >
          &times;
        </span>
        <p>{error}</p>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <input
          value={addtodoinput}
          onChange={(e) => {
            setaddtodoinput(e.target.value);
          }}
          type="text"
          style={{
            width: "50%",
            margin: "50px 10px",
            border: "none",
            borderRadius: "20px 0px 20px 0px",
            fontSize: "large",
            backgroundColor: "white",
            padding: "10px 10px",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => {
              addTodo();
            }}
            style={{
              alignSelf: "center",
              backgroundColor: "white",
              border: "none",
              borderRadius: "20px 0px 20px 0px",
              padding: "15px 30px",
            }}
          >
            Add Todo
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 10px",
          }}
        >
          <button
            onClick={() => {
              getTodos();
            }}
            style={{
              alignSelf: "center",
              backgroundColor: "white",
              border: "none",
              borderRadius: "20px 0px 20px 0px",
              padding: "15px 30px",
            }}
          >
            Get All Todo
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => {
              ClearCompTodo();
            }}
            style={{
              alignSelf: "center",
              backgroundColor: "white",
              border: "none",
              borderRadius: "20px 0px 20px 0px",
              padding: "15px 30px",
            }}
          >
            Clear Completed Todo
          </button>
        </div>
      </div>
      {todos
        ? todos.map((e, i) => {
            return (
              <div
                style={{
                  backgroundColor: "rgb(255, 255, 255)",
                  width: "50%",
                  margin: "30px auto",
                  borderRadius: "0px 20px 0px 20px",
                  textAlign: "center",
                  padding: "10px 30px",
                  fontFamily: "sans-serif",
                }}
              >
                <h3>{e.description}</h3>{" "}
                <button
                  className="completebtn"
                  onClick={() => {
                    completeTodo(e.id);
                  }}
                  disabled={e.completed}
                  style={{
                    alignSelf: "center",
                    border: "none",
                    borderRadius: "20px 0px 20px 0px",
                    padding: "15px 30px",
                  }}
                >
                  {e.completed ? "Completed" : "Complete Todo"}
                </button>
              </div>
            );
          })
        : ""}
    </div>
  );
};

render(<MyHello />, document.getElementById("app"));
