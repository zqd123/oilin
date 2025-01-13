import i18n from '@/locales'
import { serviceImgs } from '@/views/home/serviceImgs'
import reservoirGeologyIcon1 from '@/assets/images/reservoir-geology/icon1.png'
import reservoirGeologyIcon2 from '@/assets/images/reservoir-geology/icon2.png'
import reservoirGeologyIcon3 from '@/assets/images/reservoir-geology/icon3.png'
import reservoirGeologyIcon4 from '@/assets/images/reservoir-geology/icon4.png'
import reservoirGeologyIcon5 from '@/assets/images/reservoir-geology/icon5.png'
import drillingTechnologyIcon1 from '@/assets/images/drilling-technology/icon1.png'
import drillingTechnologyIcon2 from '@/assets/images/drilling-technology/icon2.png'
import drillingTechnologyIcon3 from '@/assets/images/drilling-technology/icon3.png'
import stimulationIcon1 from '@/assets/images/stimulation/icon1.png'
import stimulationIcon2 from '@/assets/images/stimulation/icon2.png'
import stimulationIcon3 from '@/assets/images/stimulation/icon3.png'
import stimulationIcon4 from '@/assets/images/stimulation/icon4.png'
import stimulationIcon5 from '@/assets/images/stimulation/icon5.png'
import reservoirManagementIcon1 from '@/assets/images/reservoir-management/icon1.png'
import reservoirManagementIcon2 from '@/assets/images/reservoir-management/icon2.png'
import productionFieldMaintenanceIcon1 from '@/assets/images/production-field-maintenance/icon1.png'
import productionFieldMaintenanceIcon2 from '@/assets/images/production-field-maintenance/icon2.png'
import productionFieldMaintenanceIcon3 from '@/assets/images/production-field-maintenance/icon3.png'
import productionFieldMaintenanceIcon4 from '@/assets/images/production-field-maintenance/icon4.png'
import productionFieldMaintenanceIcon5 from '@/assets/images/production-field-maintenance/icon5.png'
import chemicalTechnologyProductsIcon1 from '@/assets/images/chemical-technology-products/icon1.png'
import chemicalTechnologyProductsIcon2 from '@/assets/images/chemical-technology-products/icon2.png'
import chemicalTechnologyProductsIcon3 from '@/assets/images/chemical-technology-products/icon3.png'
import chemicalTechnologyProductsIcon4 from '@/assets/images/chemical-technology-products/icon4.png'
import chemicalTechnologyProductsIcon5 from '@/assets/images/chemical-technology-products/icon5.png'
import chemicalTechnologyProductsIcon6 from '@/assets/images/chemical-technology-products/icon6.png'
import oilBlendingTradingIcon1 from '@/assets/images/oil-blending-trading/icon1.png'
import oilBlendingTradingIcon2 from '@/assets/images/oil-blending-trading/icon2.png'
import oilBlendingTradingIcon3 from '@/assets/images/oil-blending-trading/icon3.png'
import assetsLeasingServicesIcon1 from '@/assets/images/assets-leasing-services/icon1.png'
import assetsLeasingServicesIcon2 from '@/assets/images/assets-leasing-services/icon2.png'
import assetsLeasingServicesIcon3 from '@/assets/images/assets-leasing-services/icon3.png'
import assetsLeasingServicesIcon4 from '@/assets/images/assets-leasing-services/icon4.png'
import digitalTechnologyServicesIcon1 from '@/assets/images/digital-technology-services/icon1.png'
import digitalTechnologyServicesIcon2 from '@/assets/images/digital-technology-services/icon2.png'
import digitalTechnologyServicesIcon3 from '@/assets/images/digital-technology-services/icon3.png'
import digitalTechnologyServicesIcon4 from '@/assets/images/digital-technology-services/icon4.png'
import digitalTechnologyServicesIcon5 from '@/assets/images/digital-technology-services/icon5.png'
import digitalTechnologyServicesIcon6 from '@/assets/images/digital-technology-services/icon6.png'

export const secondData = {
  reservoirGeology: {
    title: serviceImgs[0].imgTitle,
    contentText: i18n.global.t('ccrg'),
    imgPath: serviceImgs[0].imgPath,
    advantages: [
      {
        index: 1,
        iconPath: reservoirGeologyIcon1,
        textContent: i18n.global.t('afmv'),
      },
      {
        index: 2,
        iconPath: reservoirGeologyIcon2,
        textContent: i18n.global.t('twsc'),
      },
      {
        index: 3,
        iconPath: reservoirGeologyIcon3,
        textContent: i18n.global.t('aoec'),
      },
      {
        index: 4,
        iconPath: reservoirGeologyIcon4,
        textContent: i18n.global.t('dcmi'),
      },
      {
        index: 5,
        iconPath: reservoirGeologyIcon5,
        textContent: i18n.global.t('reio'),
      },
    ],
  },
  drillingTechnology: {
    title: serviceImgs[1].imgTitle,
    contentText: i18n.global.t('wpsc'),
    imgPath: serviceImgs[1].imgPath,
    advantages: [
      {
        index: 1,
        iconPath: drillingTechnologyIcon1,
        textContent: i18n.global.t('ihal'),
      },
      {
        index: 2,
        iconPath: drillingTechnologyIcon2,
        textContent: i18n.global.t('icpr'),
      },
      {
        index: 3,
        iconPath: drillingTechnologyIcon3,
        textContent: i18n.global.t('ihab'),
      },
    ],
  },
  stimulation: {
    title: i18n.global.t('stimulation'),
    contentText: i18n.global.t('ocia'),
    imgPath: serviceImgs[2].imgPath,
    advantages: [
      {
        index: 1,
        iconPath: stimulationIcon1,
        textContent: i18n.global.t('fotr'),
      },
      {
        index: 2,
        iconPath: stimulationIcon2,
        textContent: i18n.global.t('whrs'),
      },
      {
        index: 3,
        iconPath: stimulationIcon3,
        textContent: i18n.global.t('lnctt'),
      },
      {
        index: 4,
        iconPath: stimulationIcon4,
        textContent: i18n.global.t('lnct'),
      },
      {
        index: 5,
        iconPath: stimulationIcon5,
        textContent: i18n.global.t('cosr'),
      },
    ],
  },
  reservoirManagement: {
    title: i18n.global.t('reservoir-management'),
    contentText: i18n.global.t('gqoh'),
    imgPath: serviceImgs[3].imgPath,
    advantages: [
      {
        index: 1,
        iconPath: reservoirManagementIcon1,
        textContent: i18n.global.t('srmr'),
      },
      {
        index: 2,
        iconPath: reservoirManagementIcon2,
        textContent: i18n.global.t('gqou'),
      },
    ],
  },
  ProductionFieldMaintenance: {
    title: i18n.global.t('production-and-field-maintenance-0'),
    contentText: i18n.global.t('iwcd'),
    imgPath: serviceImgs[4].imgPath,
    advantages: [
      {
        index: 1,
        iconPath: productionFieldMaintenanceIcon1,
        textContent: i18n.global.t('completion-technologies'),
      },
      {
        index: 2,
        iconPath: productionFieldMaintenanceIcon2,
        textContent: i18n.global.t('intelligent-completion'),
      },
      {
        index: 3,
        iconPath: productionFieldMaintenanceIcon3,
        textContent: i18n.global.t('completion-tools'),
      },
      {
        index: 4,
        iconPath: productionFieldMaintenanceIcon4,
        textContent: i18n.global.t('sand-control'),
      },
      {
        index: 5,
        iconPath: productionFieldMaintenanceIcon5,
        textContent: i18n.global.t('artificail-lift'),
      },
    ],
  },
  chemicalTechnologyProducts: {
    title: i18n.global.t('chemical-technology-and-products'),
    contentText: i18n.global.t('tcta'),
    imgPath: serviceImgs[5].imgPath,
    advantages: [
      {
        index: 1,
        iconPath: chemicalTechnologyProductsIcon1,
        textContent: i18n.global.t('drilling-fluid-treatment'),
      },
      {
        index: 2,
        iconPath: chemicalTechnologyProductsIcon2,
        textContent: i18n.global.t('cementing-admixture'),
      },
      {
        index: 3,
        iconPath: chemicalTechnologyProductsIcon3,
        textContent: i18n.global.t('stimulation-chemical-product'),
      },
      {
        index: 4,
        iconPath: chemicalTechnologyProductsIcon4,
        textContent: i18n.global.t('oil-production-chemical-product'),
      },
      {
        index: 5,
        iconPath: chemicalTechnologyProductsIcon5,
        textContent: i18n.global.t('oil-and-gas-gathering-chemical-product'),
      },
      {
        index: 6,
        iconPath: chemicalTechnologyProductsIcon6,
        textContent: i18n.global.t('general-bulk-chemical-product'),
      },
    ],
  },
  oilBlendingTrading: {
    title: i18n.global.t('oil-blending-and-trading-0'),
    contentText: i18n.global.t('boim'),
    imgPath: serviceImgs[6].imgPath,
    advantages: [
      {
        index: 1,
        iconPath: oilBlendingTradingIcon1,
        textContent: i18n.global.t('gqoa'),
      },
      {
        index: 2,
        iconPath: oilBlendingTradingIcon2,
        textContent: i18n.global.t('tocv'),
      },
      {
        index: 3,
        iconPath: oilBlendingTradingIcon3,
        textContent: i18n.global.t('stoc'),
      },
    ],
  },
  assetsLeasingServices: {
    title: i18n.global.t('assets-leasing-services'),
    contentText: i18n.global.t('als'),
    imgPath: serviceImgs[7].imgPath,
    advantages: [
      {
        index: 1,
        iconPath: assetsLeasingServicesIcon1,
        textContent: i18n.global.t('poag'),
      },
      {
        index: 2,
        iconPath: assetsLeasingServicesIcon2,
        textContent: i18n.global.t('bpmi'),
      },
      {
        index: 3,
        iconPath: assetsLeasingServicesIcon3,
        textContent: i18n.global.t('poagf'),
      },
      {
        index: 4,
        iconPath: assetsLeasingServicesIcon4,
        textContent: i18n.global.t('beas'),
      },
    ],
  },
  digitalTechnologyServices: {
    title: i18n.global.t('digital-technology-services'),
    contentText: i18n.global.t('gqoi'),
    imgPath: serviceImgs[8].imgPath,
    advantages: [
      {
        index: 1,
        iconPath: digitalTechnologyServicesIcon1,
        textContent: i18n.global.t(
          'oil-and-gas-production-intelligent-management-and-control-platform',
        ),
      },
      {
        index: 2,
        iconPath: digitalTechnologyServicesIcon2,
        textContent: i18n.global.t('intelligent-security-and-emergency-management'),
      },
      {
        index: 3,
        iconPath: digitalTechnologyServicesIcon3,
        textContent: i18n.global.t('equipment-and-facilities-digital-technology-services'),
      },
      {
        index: 4,
        iconPath: digitalTechnologyServicesIcon4,
        textContent: i18n.global.t('multimedia-services'),
      },
      {
        index: 5,
        iconPath: digitalTechnologyServicesIcon5,
        textContent: i18n.global.t('iope'),
      },
      {
        index: 6,
        iconPath: digitalTechnologyServicesIcon6,
        textContent: i18n.global.t('odks'),
      },
    ],
  },
  investmentNewBusiness: {
    title: i18n.global.t('investment-and-new-business'),
    contentText: i18n.global.t('amoe'),
    imgPath: serviceImgs[9].imgPath,
    advantages: [
      {
        index: 1,
        textContent: i18n.global.t('aaot'),
      },
    ],
  },
}
