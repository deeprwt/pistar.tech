import { StaticImageData } from 'next/image';
// home 1
import icon_1 from '@/assets/images/icon/icon_23.svg';
import icon_2 from '@/assets/images/icon/icon_24.svg';
import icon_3 from '@/assets/images/icon/icon_25.svg';
import icon_4 from '@/assets/images/icon/icon_26.svg';
// home 2
import icon_5 from '@/assets/images/icon/icon_06.svg';
import icon_6 from '@/assets/images/icon/icon_07.svg';
import icon_7 from '@/assets/images/icon/icon_08.svg';
// home 3
import icon_8 from '@/assets/images/icon/icon_32.svg';
import icon_9 from '@/assets/images/icon/icon_33.svg';
import icon_10 from '@/assets/images/icon/icon_34.svg';
import icon_11 from '@/assets/images/icon/icon_35.svg';
// home 4
import icon_12 from '@/assets/images/icon/icon_40.svg';
import icon_13 from '@/assets/images/icon/icon_41.svg';
import icon_14 from '@/assets/images/icon/icon_42.svg';
// home 5
import icon_15 from '@/assets/images/icon/icon_95.svg';
import icon_16 from '@/assets/images/icon/icon_95.png';
import icon_22 from '@/assets/images/icon/icon_95.png';
import icon_17 from '@/assets/images/icon/icon_10.svg';
import icon_18 from '@/assets/images/icon/icon_11.svg';
import icon_19 from '@/assets/images/icon/icon_12.png';
import icon_20 from '@/assets/images/icon/icon_12.png';
import icon_21 from '@/assets/images/icon/icon_23.svg';
import icon_23 from '@/assets/images/icon/icon_23.png';
import icon_24 from '@/assets/images/icon/icon_13.png';



interface IStaffing {
  id: number;
  icon: StaticImageData;
  title: string;
  desc: string;
  page: string;
  link: string;
}

const staffing_data:IStaffing[] = [
  // home 1
  {
    id:1,
    icon:icon_22,
    title:'Plantar Fasciitis',
    desc:' Identifies pressure points and gait abnormalities that contribute to heel pain and inflammation.',
    page:'staffing-1',
    link: '/contract-staffing'
  },
  {
    id:2,
    icon:icon_23,
    title:'Flat Feet',
    desc:'Detects improper foot arch and distribution of pressure that can lead to discomfort and functional problems.',
    page:'staffing-1',
    link: '/permanent-staffing'
  },
  {
    id:3,
    icon:icon_19,
    title:'High Arches',
    desc:'Analyzes pressure patterns that indicate excessive pressure on specific foot areas, causing pain and instability.',
    page:'staffing-1',
    link: '/hire-train-deploy'
  },
  {
    id:4,
    icon:icon_24,
    title:'Diabetic Foot Ulcers',
    desc:'Monitors high-pressure zones that can lead to ulcer formation in diabetic patients, aiding in prevention and treatment.',
    page:'staffing-1',
    link: '/rpo'
  },
  {
    id:5,
    icon:icon_24,
    title:'Metatarsalgia',
    desc:' Identifies abnormal pressure distribution that causes pain in the ball of the foot.',
    page:'staffing-1',
    link: '/rpo'
  },
  {
    id:6,
    icon:icon_24,
    title:'Bunions',
    desc:' Detects pressure and gait changes associated with bunions, helping in early intervention and management.',
    page:'staffing-1',
    link: '/rpo'
  },
]

export default staffing_data;