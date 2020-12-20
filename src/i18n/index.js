export function resolveLocale(locale = 'de') {
  if (locale === 'de') {
    return import('./de.json');
  }
  if (locale === 'en') {
    return import('./en.json');
  }

  console.error(Error('locale only support de and en languages'));
  return import('./de.json');
}
