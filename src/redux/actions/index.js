export const ADD_INFORMATION = 'ADD_INFORMATION';
export const ADD_PROFISSIONAL = 'ADD_PROFISSIONAL';

export const addInfo = (payload) => ({
  type: ADD_INFORMATION,
  payload,
});

export const addProfessionInfo = (payload) => ({
  type: ADD_PROFISSIONAL,
  payload,
});
