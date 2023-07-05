import { ChangeEvent, ComponentProps } from 'react';
import { Card } from '@Components/Core';

export enum HTMLElements {
  Input = 'input',
  Span = 'span',
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

export type InputProps = ComponentProps<HTMLElements.Input>;
export type SpanProps = ComponentProps<HTMLElements.Span>;

export type CardProps = ComponentProps<typeof Card>;

export type OnChangeType = ChangeEvent<HTMLInputElement>;

export type InputRef = HTMLInputElement;
