export default {
  namespace: 'count',
  state: 0,
  reducers: {
    increase(state: number) {
      return state + 1;
    },
    decrease(state: number) {
      return state - 1;
    }
  }
}
