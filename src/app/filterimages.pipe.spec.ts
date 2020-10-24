import { FilterimagesPipe } from './filterimages.pipe';

describe('FilterimagesPipe', () => {
  it('El componente debe existir al momento de cargar', () => {
    const pipe = new FilterimagesPipe();
      expect(pipe).toBeTruthy();
  });
});
