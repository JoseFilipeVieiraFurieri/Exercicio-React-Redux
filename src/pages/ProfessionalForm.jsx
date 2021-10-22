import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Importe o connect, e a action criada para o valores profissionais
// import { connect } from 'react-redux';

// import { setProfessionalValue } from '../redux/action/action';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculo: '',
      cargo: '',
      descricao: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  // Crie na função "onSubmitForm" a chamada do seu dispatch, que é executada ao clicar no botão e que vai redirecionar para a página seguinte
  onSubmitForm() {
    // const { history, dispatchSetValue } = this.props;
    // dispatchSetValue(this.state);
    // history.push('/formdisplay');
  }

  render() {
    const { curriculo, cargo, descricao } = this.state;
    return (
      <fieldset>
        <TextArea
          label="Resumo do currículo: "
          value={ curriculo }
          name="curriculo"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="cargo"
          type="text"
          value={ cargo }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="descricao"
          maxLength="500"
          onChange={ this.handleChange }
          value={ descricao }
          required
        />
        <Button label="enviar" onClick={ this.onSubmitForm } />
      </fieldset>
    );
  }
}

// Faça o propTypes

// Faça o mapDispatch e o mapState

// Faça a conexão com o connect
