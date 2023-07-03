import { ChangeEvent, ComponentProps } from 'react';
import Card from '../components/basics/Card/Card';

export enum HTMLElements {
  INPUT = 'input',
  SPAN = 'span',
}

export enum HTMLType {
  text = 'text',
  number = 'number',
  date = 'date',
  color = 'color',
  range = 'range',
  password = 'password',
}

export type InputType = typeof HTMLType;

export type SingleInputType = {
  [K in keyof InputType]: {};
}[keyof InputType];

export type InputProps = ComponentProps<HTMLElements.INPUT>;
export type SpanProps = ComponentProps<HTMLElements.SPAN>;

export type CardProps = ComponentProps<typeof Card>;

export type OnChangeType = ChangeEvent<HTMLInputElement>;
