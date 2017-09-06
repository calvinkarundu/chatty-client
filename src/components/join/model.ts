import xs from 'xstream';

export default function model (props$, action$) {
  const join$ = action$
    .filter((action) => action.type === 'join')
    .map((action) => {
      if (action.payload.username && action.payload.username.trim().length > 0) {
        return {
          joined: true,
          payload: action.payload,
        }
      }

      return {
        joined: false,
        payload: action.payload,
        error: 'Screen Name is required',
      }
    });

  const reducer$ = xs.merge(join$);

  const state$ = props$.map(props => reducer$
    .map(state => state)
    .startWith(props)
  )
  .flatten()
  .remember();

  return state$;
};
