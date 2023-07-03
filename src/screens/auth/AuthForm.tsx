import { HTMLType } from '@Constans/htmlConstants';
import { translate } from '@Translate/translate';
import { AuthFormProps } from './AuthForm.props';
import { Container, FormField } from '@Components/Core';
import { useRef, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const AuthForm: React.FC<AuthFormProps> = () => {
  const [isShownPassword, setIsShownPassword] = useState<boolean>(false);
  const email = useRef<React.RefObject<HTMLInputElement>>(null);
  const password = useRef<React.RefObject<HTMLInputElement>>(null);

  const onSubmit = (e) => {
    e.preventDefault();
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
