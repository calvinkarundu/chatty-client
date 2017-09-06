import xs from 'xstream';

export default function model (props$, action$) {
  const join$ = action$
    .filter(action => action.type === 'join')
    .map(action => {
      if (action.payload.username && action.payload.username.length > 0) {
        return {
          joined: true,
          payload: action.payload,
        }
      }

      return {
        joined: false,
        error: 'Username is required',
      }
    });

  const leave$ = action$
    .filter(action => action.type === 'leave')
    .map(() => ({ joined: false }));

  const reducer$ = xs.merge(join$, leave$);

  const state$ = props$.map(props => reducer$
    .map(state => state)
    .startWith(props)
  )
  .flatten()
  .remember();

  return state$;
};
