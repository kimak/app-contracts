export const defaultLocale = 'en-GB'

import enGB from './locales/en-GB.json'

type Translations = keyof typeof enGB.phrases

// simple abstraction that could be replace later
export const useT = () => (value: Translations) => enGB.phrases[value] || value
