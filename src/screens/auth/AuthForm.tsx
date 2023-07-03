import { HTMLType } from '@Constans/htmlConstants';
import { translate } from '@Translate/translate';
import { AuthFormProps } from './AuthForm.props';
import { Container, FormField } from '@Components/Core';
import { useRef, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { usePostQuery } from '@Hooks/usePost/usePost';

const { VITE_BASE_API_URL, VITE_BASE_AUTH_URL } = import.meta.env;

const AuthForm: React.FC<AuthFormProps> = () => {
  const { responseData, loading, error, post } = usePostQuery(`${VITE_BASE_API_URL}${VITE_BASE_AUTH_URL}`);
  const [isShownPassword, setIsShownPassword] = useState<boolean>(false);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  console.log('response', responseData, loading, error);
  const onSubmit = (e) => {
    e.preventDefault();
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
          {translate('buttons.signIn')}
        </button>
      </div>
    </Container>
  );
};

export default AuthForm;
