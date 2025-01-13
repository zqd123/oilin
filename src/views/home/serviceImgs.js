import i18n from '@/locales'
import service1 from '@/assets/home/service-1.jpg'
import service2 from '@/assets/home/service-2.png'
import service3 from '@/assets/home/service-3.png'
import service4 from '@/assets/home/service-4.png'
import service5 from '@/assets/home/service-5.jpg'
import service6 from '@/assets/home/service-6.png'
import service7 from '@/assets/home/service-7.png'
import service8 from '@/assets/home/service-8.png'
import service9 from '@/assets/home/service-9.png'
import service10 from '@/assets/home/service-10.png'
export const serviceImgs = [
  {
    id: 1,
    imgPath: service1,
    imgTitle: i18n.global.t('geological-technical-services'),
    spanWidth: 1,
    routerPath: '/ReservoirGeology',
  },
  {
    id: 2,
    imgPath: service2,
    imgTitle: i18n.global.t('drilling-technology'),
    spanWidth: 1,
    routerPath: '/DrillingTechnology',
  },
  {
    id: 3,
    imgPath: service3,
    imgTitle: i18n.global.t('stimulation'),
    spanWidth: 1,
    routerPath: '/Stimulation',
  },
  {
    id: 4,
    imgPath: service4,
    imgTitle: i18n.global.t('reservoir-management'),
    spanWidth: 1,
    routerPath: '/ReservoirManagement',
  },
  {
    id: 5,
    imgPath: service5,
    imgTitle: i18n.global.t('production-and-field-maintenance'),
    spanWidth: 1,
    routerPath: '/ProductionFieldMaintenance',
  },
  {
    id: 6,
    imgPath: service6,
    imgTitle: i18n.global.t('chemical-technology-and-products'),
    spanWidth: 1,
    routerPath: '/ChemicalTechnologyProducts',
  },
  {
    id: 7,
    imgPath: service7,
    imgTitle: i18n.global.t('oil-blending-and-trading'),
    spanWidth: 1,
    routerPath: '/OilBlendingTrading',
  },
  {
    id: 8,
    imgPath: service8,
    imgTitle: i18n.global.t('assets-leasing-services'),
    spanWidth: 1,
    routerPath: '/AssetsLeasingServices',
  },
  {
    id: 9,
    imgPath: service9,
    imgTitle: i18n.global.t('digital-technology-services'),
    spanWidth: 2,
    routerPath: '/DigitalTechnologyServices',
  },
  {
    id: 10,
    imgPath: service10,
    imgTitle: i18n.global.t('investment-and-new-business'),
    spanWidth: 2,
    routerPath: '/InvestmentNewBusiness',
  },
]
