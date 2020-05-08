export enum AspectualType {
  IMPERFECTIVE,
  PERFECTIVE,
}

interface Conjugation {
  present?: Forms;
  past: Forms;
  future: Forms;
}

interface Forms {
  я: string;
  ты: string;
  вы: string;
  она: string;
  он: string;
  оно: string;
  мы: string;
  они: string;
}

export interface Verb {
  id: number;
  infinitive: string;
  type: AspectualType;
  definition: string;
  aspectualPair: number;
  conjugation: Conjugation;
}
