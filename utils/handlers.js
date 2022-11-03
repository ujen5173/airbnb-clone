/*
  In this file all handlers(onChange, textShortner, etc), async requests and other functions are defined, *axios* is already installed
*/

export const textHandler = (event, state, setState) => {
  setState({ ...state, [event.target.name]: event.target.value });
};

export const textResizer = (data, value = 10) => {
  if (data?.length > value) {
    return data.slice(0, value) + "...";
  } else {
    return data;
  }
};

export const getParams = () =>
  Object.fromEntries(new URL(window.location.href).searchParams);
