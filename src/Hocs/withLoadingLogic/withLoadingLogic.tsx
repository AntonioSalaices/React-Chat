import React from 'react';
import Spinner from '@Components/basics/Spinner';
import { PURPLE } from '@Utils/colors';
import Message from '@Components/basics/Message';
import Container from '@Components/composed/Container';
import { List } from '@Components/composed/List/List';
import { PropsFrom } from '@Utils/types';

export const renderContent = (children: React.ReactElement) => {
  return (
    <Container>
      <div className="row justify-center">{children}</div>
    </Container>
  );
};

export default function withLoadingLogic<P extends Record<string, any>>(WrappedComponent: React.FC<P>) {
  return (props: P & PropsFrom<typeof List>) => {
    if (props.isLoading) return renderContent(<Spinner singleColor={PURPLE} size={50} />);
    if (props.isShownNoFoundMessage) return renderContent(<Message tx="noFound.message" />);

    return <WrappedComponent {...(props as P)} />;
  };
}
