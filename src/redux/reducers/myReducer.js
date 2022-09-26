import { ADD_INFORMATION, ADD_PROFISSIONAL } from '../actions';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  uf: '',
  curriculum: '',
  job: '',
  description: '',
};

function teste(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
  case ADD_INFORMATION:
    return {
      ...state,
      name: action.payload.name,
      email: action.payload.email,
      cpf: action.payload.cpf,
      address: action.payload.address,
      city: action.payload.city,
      uf: action.payload.uf,
    };
  case ADD_PROFISSIONAL:
    return {
      ...state,
      curriculum: action.payload.curriculum,
      job: action.payload.job,
      description: action.payload.description,
    };

  default:
    return state;
  }
}

export default teste;
