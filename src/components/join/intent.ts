import xs from 'xstream';

import { ISources } from "../../../typings/components/join.d";

import { preventDefault } from '../../utilities/helperFuncs';

export default function intent (sources: ISources) {
  const join$ = sources.DOM.select('.join-chatty-form')
    .events('submit')
    .map(preventDefault)
    .map((evt) => {
      const formData = new FormData((evt.target as HTMLFormElement));
      return { screenName: formData.get('screenName')};
    })
    .map(payload => ({ type: 'join', payload }));

  const action$ = xs.merge(join$);

  return action$;
};
