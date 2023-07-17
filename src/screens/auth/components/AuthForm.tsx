import { useContext, useRef, useState } from 'react';
import classNames from 'classnames';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

import { color } from '@Utils/colors';

import { HTMLType, OnChangeType } from '@Constans/htmlConstants';

import { Container, FormField, Spinner } from '@Components/Core';

import { User } from 'models/User';
import { AuthFormProps } from './AuthForm.props';

import { translate } from '@Translate/translate';
import styles from './AuthForm.module.scss';
import { AuthContext } from 'auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const AuthForm: React.FC<AuthFormProps> = () => {
  const navigate = useNavigate();
  const { loading, login } = useContext(AuthContext);

  const [isShownPassword, setIsShownPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const email = useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = {
      email: email?.current?.value,
      password: password,
    } as User;
    login(body);
    navigate('/dashboard');
  };

  const handlePassword = ({ target: { value } }: OnChangeType) => {
    setPassword(value);
  };

  const isSubmitButtonDisabled = !email.current?.value || !password;

  const buttonStyle = classNames('btn-primary text-white', {
    [styles.btnDisabled]: isSubmitButtonDisabled,
  });

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <div className="col justify-center align-center">
          <FormField
            ref={email}
            type={HTMLType.text}
            subTx="subPlaceholder.email"
            tx="form.inputs.email"
            testID="emailInput"
          />
          <FormField
            type={isShownPassword ? HTMLType.text : HTMLType.password}
            tx="form.inputs.password"
            testID="passwordInput"
            onChange={handlePassword}
            right={
              isShownPassword ? (
                <FaRegEyeSlash className="pointer" onClick={() => setIsShownPassword(false)} />
              ) : (
                <FaRegEye className="pointer" onClick={() => setIsShownPassword(true)} />
              )
            }
          />
          <button disabled={isSubmitButtonDisabled} className={buttonStyle} onClick={onSubmit}>
            {loading ? <Spinner size={20} singleColor={color.background} /> : translate('buttons.signIn')}
          </button>
        </div>
      </form>
    </Container>
  );
};

export default AuthForm;
