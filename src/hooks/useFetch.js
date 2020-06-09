import { useReducer } from "react";

const INITIAL_STATE = {
  isLoading: false,
  iseError: false,
  data: [],
};

function fetchReducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return {
        isLoading: true,
        isError: false,
        data: [],
      };
    case "SET_ERROR":
      return {
        isLoading: false,
        isError: true,
        data: [],
      };
    case "SET_DATA":
      return {
        isLoading: false,
        isError: false,
        data: action.value,
      };
    default:
      return state;
  }
}

function useFetch(endpoint) {
  const [reducerState, dispatch] = useReducer(fetchReducer, INITIAL_STATE);

  const fetchAPI = () => {
    dispatch({ type: "SET_LOADING" });
    fetch(endpoint)
      .then((response) => response.json())
      .then((response) =>
        dispatch({ type: "SET_DATA", value: response.results })
      )
      .catch(() => dispatch({ type: "SET_ERROR" }));
  };

  return [
    reducerState.data,
    reducerState.isLoading,
    reducerState.isError,
    fetchAPI,
  ];
}

export default useFetch;
