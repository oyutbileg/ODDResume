import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import ENLocale from '../locales/en'
import MNLocale from '../locales/mn'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources: {
            mn: {
                translation: MNLocale
            },
            en: {
                translation: ENLocale
            }
        },
        supportedLngs: ['mn', 'en'],
        react: {
            useSuspense: false
        },
        interpolation: {
            escapeValue: false
        }
    })

export default i18n
