interface VerbBase<C> {
  infinitive: string;
  definition: string;
  conjugation: C;
}

export interface Tenses {
  present: Persons; 
  past: Persons;
  future: Persons;
}

export interface PerfectiveTenses {
  past: Persons;
  future: Persons;
}

export interface Persons {
  я: string;
  ты: string;
  вы: string;
  она: string;
  он: string;
  оно: string;
  мы: string;
  они: string;
}

export interface Verb extends VerbBase<Tenses>{
  id: number;
  perfectiveSibling: VerbBase<PerfectiveTenses>;
}

export type MySelections = string[];

export const PERSONS = ['я', 'ты', 'вы', 'она', 'он', 'оно', 'мы', 'они'];

