import React from 'react';
import {getTranslations, AvailableLocales} from '../locale';

import {FormsScreen} from './components';
import SignUpForm from './forms/SignUpForm';

const {signUpScreenTranslations} = getTranslations(AvailableLocales.en);

const SignUp = ({navigation}) => {
  return (
    <FormsScreen
      title={signUpScreenTranslations.title}
      subtitle={signUpScreenTranslations.subtitle}
      bottomCTA={{
        text: signUpScreenTranslations.bottomCTA.text,
        linkText: signUpScreenTranslations.bottomCTA.linkText,
        destination: 'login',
      }}
      {...{navigation}}>
      <SignUpForm />
    </FormsScreen>
  );
};

export default SignUp;
