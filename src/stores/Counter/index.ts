/* eslint-disable no-param-reassign */
import { types } from 'mobx-state-tree';

export const Counter = types
  .model({
    count: types.number,
  })
  .actions((self) => ({
    increment() {
      self.count += 1;
    },
    decrement() {
      self.count -= 1;
    },
  }));
