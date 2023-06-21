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

export type GenericObject = Record<string, any>;

export type Func = (...args: any[]) => any;

// interface Person {
//   name: string;
//   age: number;
// }

// //This is going to extract every key in person
// type PersonKeys = keyof Person;
