export const getSlackCode = state => {
  const search = state.getIn(['router', 'location', 'search']);
  const code = /=([^;]+)&/.exec(search)[1];
  return code;
}
