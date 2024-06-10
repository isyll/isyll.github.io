import { useTranslation } from 'react-i18next'

function Bio() {
  const { t } = useTranslation()

  return (
    <div>
      <p>{t('my_bio')}</p>
    </div>
  )
}

export default Bio
