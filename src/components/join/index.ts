import xs from 'xstream';

import { ISources, ISinks } from "../../../typings/components/join.d";

import intent from './intent';
import model from './model';
import view from './view';

export default function main (sources: ISources): ISinks {
  const action$ = intent(sources);
  const state$ = model(sources.props$, action$);
  const vTree$ = view(state$);

  const sinks = {
    DOM: vTree$,
  };

  return sinks;
}
