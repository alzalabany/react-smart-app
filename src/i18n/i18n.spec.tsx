import de from './de';
import en from './en';
import { resolveLocale } from './index';
describe('i18n', () => {
  it('return promise that resovle with requested lang', async () => {
    const r = await resolveLocale('en');

    expect(r.app).toEqual(en.app);
  });
  it('return promise that resovle default to de', async () => {
    const r = await resolveLocale();

    expect(r.app).toEqual(de.app);
  });

  it('resovle default if unknown locale given', async () => {
    const spy = jest.spyOn(console, 'error').mockImplementation();
    const noLang = await resolveLocale('n/a');
    const defaultLang = await resolveLocale();

    expect(console.error).toBeCalled();
    expect(noLang.app).toEqual(defaultLang.app);

    spy.mockRestore();
  });
});
