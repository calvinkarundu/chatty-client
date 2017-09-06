import xs from 'xstream';

import { ISources } from "../../../typings/components/join.d";

export default function intent (sources: ISources) {
  const join$ = sources.DOM.select('.join-chatty-form')
    .events('submit')
    .map((evt) => {
      evt.preventDefault();
      return evt;
    })
    .map((evt) => {
      const formData = new FormData((evt.target as HTMLFormElement));
      return { username: formData.get('username')};
    })
    .map(payload => ({ type: 'join', payload }));

  const leave$ = sources.DOM.select('.leave-btn')
    .events('click')
    .map(() => ({ type: 'leave' }));

  const action$ = xs.merge(join$, leave$);

  return action$;
};
