import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { addProfessionInfo } from '../redux/actions';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculum: '',
      job: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick = (e) => {
    e.preventDefault();
    const { dispatch, history } = this.props;

    dispatch(addProfessionInfo(this.state));
    history.push('/formdisplay');
  }

  render() {
    const { curriculum, job, description } = this.state;
    return (
      <form
        className="box column is-half is-offset-one-quarter"
        onSubmit={ () => console.log('Envia as informações para a store') }
      >
        <h1 className="title">Informações Profissionais</h1>
        <TextArea
          label="Resumo do currículo: "
          value={ curriculum }
          name="curriculum"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="job"
          type="text"
          value={ job }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="description"
          maxLength="500"
          onChange={ this.handleChange }
          value={ description }
          required
        />
        <Button
          type="submit"
          label="Enviar"
          onClick={ this.handleClick }
          moreClasses="is-fullwidth is-info"
        />
      </form>
    );
  }
}

ProfessionalForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  info: state.teste,
});

export default connect(mapStateToProps)(ProfessionalForm);
