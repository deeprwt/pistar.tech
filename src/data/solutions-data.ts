import { StaticImageData } from 'next/image';
import user_1 from '@/assets/images/media/test.jpeg';
import user_2 from '@/assets/images/media/test.jpeg';
import user_3 from '@/assets/images/media/test.jpeg';
import user_4 from '@/assets/images/media/test.jpeg';

// testimonial type 
type ITestimonial = {
  id: number;
  user?: StaticImageData;
  name: string;
  location: string;
  desc: string;
  rating:number;
}

export const solutions_data:ITestimonial[] = [
  {
    id:1,
    user:user_1,
    name:'James Bond.',
    location:'Thailad',
    desc:'We are absolutely thrilled with the services provided by Babun! Their team went above and beyond to transform our outdated website into a stunning, user-friendly masterpiece.',
    rating:5
  },
  {
    id:2,
    user:user_2,
    name:'James Bond.',
    location:'Thailad',
    desc:'It has been an absolute pleasure working with Babun on our brand identity overhaul. Their ability to capture the essence of our culinary vision and translate it into a visual identity has been commendable.',
    rating:4
  },
  {
    id:3,
    user:user_1,
    name:'Mark Smith',
    location:'United state',
    desc:'It has been an absolute pleasure working with Babun on our brand identity overhaul. Their ability to capture the essence of our culinary vision and translate it into a visual identity has been commendable.',
    rating:5
  },
  {
    id:4,
    user:user_2,
    name:'Jon Doe',
    location:'Dubai',
    desc:'Babun thumbs up to the team! Their personalized approach to fitness training has been a breath of fresh air. The trainers are not only knowledgeable but also genuinely invested in their clients well-being',
    rating:3
  },
]

// feedback one start
export const feedback_one = [
  {
    id:1,
    user:user_1,
    name:'Dr. Kiran Malhotra',
    location:'FootCare Clinic',
    desc:`"PiStarTech's FlePS Mat has revolutionized how I diagnose foot issues. The detailed pressure data leads to better, faster treatment decisions."`
  },
  {
    id:2,
    user:user_1,
    name:'Dr. Amit Verma',
    location:'Gait & Mobility Center',
    desc:`"The FlePS Mat is incredibly accurate and easy to use. It's become an essential tool in my practice for assessing foot function."`
  },
  {
    id:3,
    user:user_1,
    name:'Dr. Neha Kapoor',
    location:'Peak Performance Clinic',
    desc:`"With the FlePS Mat, I can quickly evaluate athletes' foot pressure patterns, helping to prevent injuries and optimize performance."`
  }
]
// feedback one end

// feedback three
export const feedback_three:{id: number;desc: string}[] = [
  {
    id:1,
    desc:'Quick solutions coupled with extraordinary performance—a recommendation thats unequivocal.'
  },
  {
    id:2,
    desc:'We are absolutely thrilled with the services provided by Babun! Their team went above and beyond to transform.'
  },
  {
    id:3,
    desc:'Babun Solutions has truly been a game changer for our business. Their expertise in developing our mobile app'
  },
]

// feedback four 
export const feedback_four:ITestimonial[] = [
  {
    id:1,
    desc:'Game-changer! Boosted efficiency, simplified tasks, and saved time. Highly recommended!',
    name:'John Smith',
    location:'Claifornia',
    user:user_1,
    rating:5
  },
  {
    id:2,
    desc:'Game-changer! Boosted efficiency, simplified tasks, and saved time. Highly recommended!',
    name:'Zephyrlyn',
    location:'Valeria',
    user:user_3,
    rating:4
  },
  {
    id:3,
    desc:'Game-changer! Boosted efficiency, simplified tasks, and saved time. Highly recommended!',
    name:'Quinvera',
    location:'Aqualuna',
    user:user_4,
    rating:4.5
  },
]

// feedback five 
export const feedback_five:ITestimonial[] = [
  {
    id:1,
    desc:`"Extraordinary performance!  Quick solutions. Highly recommended."`,
    name:'James Bond.',
    location:'CEO & Head of Sky Tech Inc.',
    rating:5
  },
  {
    id:2,
    desc:`"Babun Solutions has truly been a game changer for our business."`,
    name:'John Smith',
    location:'CEO & Head of Sky Tech Inc.',
    rating:4
  },
  {
    id:3,
    desc:`"Quick solutions coupled with extraordinary performance—a recommendation."`,
    name:'Mark John',
    location:'CEO & Head of Sky Tech Inc.',
    rating:4.5
  }
]

// feedback six 
export const feedback_six:ITestimonial[] = [
  {
    id:1,
    desc:"Having a home based business is  wonderful asset to your life. The problem still stands comes time your business. Quis lorem elite.",
    name:'James Bond.',
    location:'Moscow, Russia',
    rating:5
  },
  {
    id:2,
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga sed nobis eveniet nisi provident aut excepturi reiciendis tuo.",
    name:'John Smith',
    location:'Cairo, Egypt',
    rating:4
  },
  {
    id:3,
    desc:"Efficient problem-solving, insightful market analysis, and actionable plans made the consulting experience business's success.",
    name:'Jesica Harris',
    location:'Tokyo, Japan',
    rating:4.5
  }
]