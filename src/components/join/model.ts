import xs from 'xstream';

export default function model (props$, action$) {
  const join$ = action$
    .filter((action) => action.type === 'join')
    .map((action) => {
      if (action.payload.screenName && action.payload.screenName.trim().length > 0) {
        return {
          joined: true,
          payload: action.payload,
          error: '',
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
