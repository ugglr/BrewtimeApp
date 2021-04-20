import React from 'react';
import {getTranslations, AvailableLocales} from '../locale';

import {FormsScreen} from './components';
import LoginForm from './forms/LoginForm';

const {loginScreenTranslations} = getTranslations(AvailableLocales.en);

const Login = ({navigation}) => {
  return (
    <FormsScreen
      title={loginScreenTranslations.title}
      subtitle={loginScreenTranslations.subtitle}
      bottomCTA={{
        text: loginScreenTranslations.bottomCTA.text,
        linkText: loginScreenTranslations.bottomCTA.linkText,
        destination: 'signUp',
      }}
      {...{navigation}}>
      <LoginForm />
    </FormsScreen>
  );
};

export default Login;
