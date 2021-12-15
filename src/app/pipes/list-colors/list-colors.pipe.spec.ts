import { Color } from 'src/app/models/color';
import { ListColorsPipe } from './list-colors.pipe';

describe('ListColorsPipe', () => {
  let pipe: ListColorsPipe;
  let colors: Color[];
  
  beforeAll( () => {
    pipe = new ListColorsPipe();

    colors = [
      {
        name: 'bleu',
      },
      {
        name: 'rouge',
      },
      {
        name: 'vert',
      },
    ] as Color[];
  });
  
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('return a string with color names', () => {
    const colorNames = pipe.transform(colors);
    expect(colorNames).toBe('bleu - rouge - vert');
  });

  it('return an empty string if "colors" is empty', () => {
    const emptyColors: Color[] = []
    const colorName = pipe.transform(emptyColors);
    expect(colorName).toBe('');
  });
});
