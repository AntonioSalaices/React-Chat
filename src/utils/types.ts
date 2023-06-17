import { ChangeEvent, ComponentProps } from "react";
import Card from "../components/basics/Card/Card";

export type DeepPartial<Thing> = Thing extends Function
  ? Thing
  : Thing extends Array<infer InferredArrayMember>
  ? DeepPartialArray<InferredArrayMember>
  : Thing extends object
  ? DeepPartialObject<Thing>
  : Thing | undefined;

type DeepPartialArray<Thing> = Array<DeepPartial<Thing>>;

type DeepPartialObject<Thing> = {
  [Key in keyof Thing]?: DeepPartial<Thing[Key]>;
};

export enum HTMLElements {
  INPUT = "input",
  SPAN = "span",
}

export type InputProps = ComponentProps<HTMLElements.INPUT>;
export type SpanProps = ComponentProps<HTMLElements.SPAN>;

export type CardProps = ComponentProps<typeof Card>;

export type OnChangeType = ChangeEvent<HTMLInputElement>;
export type GenericObject = Record<string, any>;
