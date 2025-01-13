import i18n from '@/locales'
export const headerMenus = [
  {
    title: i18n.global.t('about-us'),
    path: '/developing',
    children: [
      {
        title: i18n.global.t('corporate-profile'),
        path: '/developing',
      },
      {
        title: i18n.global.t('corporate-culture'),
        path: '/developing',
      },
      {
        title: i18n.global.t('our-strategy'),
        path: '/developing',
      },
      {
        title: i18n.global.t('our-partners'),
        path: '/developing',
      },
    ],
  },
  {
    title: i18n.global.t('news'),
    path: '/about',
  },
  {
    title: i18n.global.t('our-business'),
    path: '/careers',
  },
  {
    title: i18n.global.t('communication'),
    path: '/contact',
  },
  {
    title: i18n.global.t('our-project'),
    path: '/contact',
  },
  {
    title: i18n.global.t('careers'),
    path: '/contact',
  },
  {
    title: i18n.global.t('contact-us'),
    path: '/contact',
  },
]
