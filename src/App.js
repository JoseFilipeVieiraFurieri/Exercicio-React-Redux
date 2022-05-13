import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PersonalForm from './pages/PersonalForm';
import ProfessionalForm from './pages/ProfessionalForm';
import FormDataDisplay from './pages/FormDataDisplay';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ PersonalForm } />
        <Route path="/professionalform" component={ ProfessionalForm } />
        <Route path="/formdisplay" component={ FormDataDisplay } />
      </Switch>
    );
  }
}

export default App;
