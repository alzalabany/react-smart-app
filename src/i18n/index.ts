export function resolveLocale(locale = 'de') {
  if (locale === 'de') {
    return import('./de').then(module => module.default);
  }
  if (locale === 'en') {
    return import('./en').then(module => module.default);
  }

  console.error(Error('locale only support de and en languages'));
  return import('./de').then(module => module.default);
}
