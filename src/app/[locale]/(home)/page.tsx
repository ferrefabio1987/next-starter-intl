import { getTranslations } from 'next-intl/server'

export default async function Home() {
  const t = await getTranslations('Index')

  return (
    <div>
      <h1>{t('welcome')}</h1>
    </div>
  )
}