import { atom } from 'recoil';

const modeClassState = atom({
  key: 'modeClassState',
  default: false,
});

export { modeClassState };
