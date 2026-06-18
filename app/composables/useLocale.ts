import { ref, onMounted } from 'vue'
import { useState } from '#app'
import translations from '~/data/translations.json'

type TranslationKey = keyof typeof translations

export const useLocale = () => {
  // SSR-safe state defaulting to 'en'
  const locale = useState<'en' | 'id'>('locale', () => 'en')

  onMounted(() => {
    const saved = localStorage.getItem('locale')
    if (saved === 'en' || saved === 'id') {
      locale.value = saved
    } else {
      const browserLang = navigator.language || ''
      if (browserLang.toLowerCase().startsWith('id')) {
        locale.value = 'id'
      }
    }
  })

  const setLocale = (newLocale: 'en' | 'id') => {
    locale.value = newLocale
    localStorage.setItem('locale', newLocale)
    // Optional: set lang attribute on document element
    document.documentElement.setAttribute('lang', newLocale)
  }

  // Translation function helper
  const t = (key: string): string => {
    const translationGroup = (translations as any)[key]
    if (!translationGroup) {
      return key
    }
    return translationGroup[locale.value] || translationGroup['en'] || key
  }

  return {
    locale,
    setLocale,
    t
  }
}
