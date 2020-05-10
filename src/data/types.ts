interface VerbBase {
  infinitive: string;
  definition: string;
  conjugation: Conjugation;
}

interface Conjugation {
  present?: Forms; //perfective verbs do not have a present tense
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

export interface Verb extends VerbBase{
  id: number;
  perfectiveSibling: VerbBase;
}

export type MySelections = string[];



