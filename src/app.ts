import xs from 'xstream';

import { div, label, input, hr, h1, makeDOMDriver } from '@cycle/dom';
import { makeHTTPDriver } from '@cycle/http';
import { timeDriver } from '@cycle/time';
import { run } from '@cycle/run';

import { normalize, setupPage } from 'csstips'; 

import { ISources, ISinks } from "../typings/app.d";

import Join from './components/join';

const rootSelector = '#app-root';

// set up css
normalize();
setupPage(rootSelector);

function main (sources: ISources): ISinks {
  const join = Join({
    DOM: sources.DOM,
    props$: xs.of({
      joined: false,
      error: '',
    }),
  });

  const vDOM$ = xs.combine(join.DOM)
    .map(([joinVTree]) => joinVTree);

  const sinks = {
    DOM: vDOM$,
  }

  return sinks;
}

run(main, {
  DOM: makeDOMDriver(rootSelector),
  HTTP: makeHTTPDriver(),
  Time: timeDriver,
});
