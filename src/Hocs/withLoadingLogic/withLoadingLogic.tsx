import React from "react";
import Spinner from "@Components/basics/Spinner";
import { CommonProps } from "./withLoadingLogic.props";
import { PURPLE } from "@Utils/colors";
import Message from "@Components/basics/Message";
import { translate } from "@Translate/translate";

export default function withLoadingLogic<P extends Record<string, any>>(
  WrappedComponent: React.FC<P>
) {
  return (props: P & CommonProps) => {
    if (props.isLoading) return <Spinner singleColor={PURPLE} size={50} />;
    if (props.isShownNoFoundMessage)
      return <Message message={translate("noFound.message")} />;

    return <WrappedComponent {...(props as P)} />;
  };
}
