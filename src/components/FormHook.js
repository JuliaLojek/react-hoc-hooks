import React, { useReducer } from "react";
// import styled from "styled-components";
import { Button, Input } from "./StyledComponents";

const INITIAL_STATE = {
  input1: "",
  input2: "",
  input3: "",
};

function inputReducer(state, action) {
  switch (action.type) {
    case "SET_INPUT_1":
      return {
        ...state,
        input1: action.value,
      };
    case "SET_INPUT_2":
      return {
        ...state,
        input2: action.value,
      };
    case "SET_INPUT_3":
      return {
        ...state,
        input3: action.value,
      };
    default:
      return state;
  }
}

function FormHook() {
  const [inputReducerState, dispatch] = useReducer(inputReducer, INITIAL_STATE);

  return (
    <div>
      <div>
        <h3>Form:</h3>
        <div>
          <Input
            type="text"
            value={inputReducerState.input1}
            onChange={(e) =>
              dispatch({ type: "SET_INPUT_1", value: e.target.value })
            }
            filled={inputReducerState.input1 ? true : false}
          />
        </div>
        <div>
          <Input
            type="text"
            value={inputReducerState.input2}
            onChange={(e) =>
              dispatch({ type: "SET_INPUT_2", value: e.target.value })
            }
            filled={inputReducerState.input2 ? true : false}
          />
        </div>
        <div>
          <Input
            type="text"
            value={inputReducerState.input3}
            onChange={(e) =>
              dispatch({ type: "SET_INPUT_3", value: e.target.value })
            }
            filled={inputReducerState.input3 ? true : false}
          />
        </div>
        <Button
          allowed={
            inputReducerState.input1 &&
            inputReducerState.input2 &&
            inputReducerState.input3
              ? true
              : false
          }
        >
          send
        </Button>
      </div>
    </div>
  );
}

export default FormHook;
