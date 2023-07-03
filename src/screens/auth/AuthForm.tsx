import { HTMLType } from '@Constans/htmlConstants';
import { translate } from '@Translate/translate';
import { AuthFormProps } from './AuthForm.props';
import { Container, FormField, Spinner } from '@Components/Core';
import { useEffect, useRef, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { usePostQuery } from '@Hooks/usePost/usePost';
import { WHITE } from '@Utils/colors';
import { Security } from '@Constans/securityConstants';
import { User } from 'models/User';
import { isEmpty } from 'lodash';

const { VITE_BASE_API_URL, VITE_BASE_AUTH_URL } = import.meta.env;

const AuthForm: React.FC<AuthFormProps> = () => {
  const { responseData, loading, error, post } = usePostQuery(`${VITE_BASE_API_URL}${VITE_BASE_AUTH_URL}`);
  const [isShownPassword, setIsShownPassword] = useState<boolean>(false);

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saveResponse = () => {
      if (!isEmpty(responseData)) {
        const userData = responseData as User;
        localStorage.setItem(Security.USER_DATA, JSON.stringify(userData));
      }
    };
    saveResponse();
  }, [responseData]);

  const onSubmit = () => {
    const body = {
      email: email?.current?.value,
      password: password?.current?.value,
    };
    post(body);
  };

  return (
    <Container>
      <div className="col justify-center align-center">
        <FormField
          ref={email}
          type={HTMLType.text}
          subTx="subPlaceholder.email"
          tx="form.inputs.email"
          testID="emailInput"
        />
        <FormField
          ref={password}
          type={isShownPassword ? HTMLType.text : HTMLType.password}
          tx="form.inputs.password"
          testID="passwordInput"
          right={
            isShownPassword ? (
              <FaRegEyeSlash className="pointer" onClick={() => setIsShownPassword(false)} />
            ) : (
              <FaRegEye className="pointer" onClick={() => setIsShownPassword(true)} />
            )
          }
        />
        <button className="btn-primary text-white" onClick={onSubmit}>
          {loading ? <Spinner size={20} color1={WHITE} /> : translate('buttons.signIn')}
        </button>
      </div>
    </Container>
  );
};

export default AuthForm;
