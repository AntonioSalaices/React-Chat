import React from "react";
import Spinner from "@Components/basics/Spinner";
import { CommonProps } from "./withLoadingLogic.props";
import { PURPLE } from "@Utils/colors";
import Message from "@Components/basics/Message";
import { GenericObject } from "@Utils/types";

export default function withLoadingLogic<T extends CommonProps<GenericObject>>(
  WrappedComponent: React.ComponentType<T>
) {
  return (props: T) => {
    if (props.isLoading) return <Spinner singleColor={PURPLE} size={50} />;
    if (props.isShownNoFoundMessage) return <Message message="No gifs found" />;

    return <WrappedComponent {...props} />;
  };
}
