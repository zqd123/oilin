import { serviceImgs } from '@/views/home/serviceImgs'
import icon1 from '@/assets/images/reservoir-geology/icon1.png'
import icon2 from '@/assets/images/reservoir-geology/icon2.png'
import icon3 from '@/assets/images/reservoir-geology/icon3.png'
import icon4 from '@/assets/images/reservoir-geology/icon4.png'
import icon5 from '@/assets/images/reservoir-geology/icon5.png'
export const secondData = {
  reservoirGeology: {
    title: 'Reservoir Geology Technical Services',
    contentText:
      'Combining comprehensive reservoir geological research services, advanced formation monitoring visualization technology and full-process engineering services, we provide clients with sweet spot tracking services and precise engineering technology solutions for the entire lifecycle of reservoirs to improve sweet spot hitting rates for economic efficiency enhancement of oilfield development.',
    imgPath: serviceImgs[0].imgPath,
    advantages: [
      {
        index: 1,
        iconPath: icon1,
        textContent:
          'Advanced formation monitoring visualization technology and reservoir digital technology, providing accurate identification of sweet spot.',
      },
      {
        index: 2,
        iconPath: icon2,
        textContent:
          'The whole service chain consisting of reservoir and geology research, drilling, completion, stimulation and oil recovery, provides conditions for the combination of geology and engineering, and makes resources allocation efficiently.',
      },
      {
        index: 3,
        iconPath: icon3,
        textContent:
          'An open ecological cooperation platform attracting advanced technologies and high-quality partners worldwide.',
      },
      {
        index: 4,
        iconPath: icon4,
        textContent:
          'Diversified cooperation modes, including conventional services, general contracting service and risk-taking general contract service, etc.',
      },
      {
        index: 5,
        iconPath: icon5,
        textContent:
          'Rich experiences in oil and gas reservoir research in worldwide, covering oil and gas fields in China, Iraq, Iran and etc, involving various types of reservoirs such as conventional sandstone, carbonate, tight sandstone, coal seam, shale, etc.',
      },
    ],
  },
}
