import React from "react";
import Spinner from "@Components/basics/Spinner";
import { CommonProps } from "./withLoadingLogic.props";
import { PURPLE } from "@Utils/colors";
import Message from "@Components/basics/Message";
import { GenericObject } from "@Utils/types";

export default function withLoadingLogic(
  WrappedComponent: React.ComponentType<GenericObject>
) {
  return (props: CommonProps<Record<string, any>>) => {
    if (props.isLoading) return <Spinner singleColor={PURPLE} size={50} />;
    if (props.isShownNoFoundMessage) return <Message message="No gifs found" />;

    return <WrappedComponent {...props} />;
  };
}
