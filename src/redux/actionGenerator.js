import { INCREMENT, DECREMENT, INCREMENT_BY_VALUE } from "./actions";

export const increment = async (dispatch) => {
  dispatch({
    type: INCREMENT,
  });
};

export const decrement = async (dispatch) => {
  dispatch({
    type: DECREMENT,
  });
};

export const incrementByValue = (dispatch, value) => {
  dispatch({
    type: INCREMENT_BY_VALUE,
    data: value,
  });
};
