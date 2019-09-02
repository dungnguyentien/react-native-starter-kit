export default function combineReducerHandlers(initialState, handlers) {
  return (state = initialState, action) => {
    let newState = null;
    const handlerKey = Object.keys(handlers).find(key => {
      // use root state for `_`
      if (key === '_') {
        return (newState = handlers[key](state, action)) != state;
      }
      //
      return (newState = handlers[key](state[key], action)) != state;
    });

    // the root state
    if (handlerKey === '_') {
      return (
        {
          ...state,
          ...newState,
        } || state
      );
    }

    // child state
    return (
      {
        ...state,
        [handlerKey]: newState,
      } || state
    );
  };
}
