import { IProduct } from "@/types/product-d-t";
// images
import img_1 from "@/assets/images/shop/img_01.jpg";
import img_2 from "@/assets/images/shop/img_02.jpg";
import img_3 from "@/assets/images/shop/img_03.jpg";
import img_4 from "@/assets/images/shop/img_04.jpg";
// user
import user_1 from "@/assets/images/blog/avatar_01.jpg";
import user_2 from "@/assets/images/blog/avatar_02.jpg";

const product_data:IProduct[] = [
  {
    id: 1,
    img: img_1,
    title: "Podiascanner Mat",
    price: 80000,
    discount: 0,
    category:'books',
    quantity: 38,
    old_price: 100000,
    sm_desc:
      "Reality doesn't always give us the life that we desire, but we can always find what we desire between the pages of books.",
    related_images:[img_1,img_2,img_3],
    details: {
      specifications:
        "One touch of a red-hot stove is usually all we need to avoid that . The same is true as we experience in emotional sensation of stress from our first instances of social rejection ridicule.",
      main_features: [
        "We quickly learn to fear and automatically avoid potentially",
        "Lorem ipsum best lightweight bra cool rejection avoid text",
        "Lightweight bras cool rejection quickly quis.",
      ],
    },
    reviews: [
      {
        id: 1,
        user: user_2,
        name: "John Smith",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 3.5,
      },
      {
        id: 2,
        user: user_1,
        name: "Ronan Shadowdancer",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 4.5,
      },
    ],
  },
  {
    id: 2,
    img: img_2,
    title: "Smart Chair",
    price: 50000,
    discount: 0,
    category:'visiting-card',
    quantity: 25,
    old_price: 70000,
    related_images:[img_2,img_3,img_4],
    sm_desc:
      "Reality doesn’t always give us the life that we desire, but we can always find what we desire between the pages of books.",
    details: {
      specifications:
        "One touch of a red-hot stove is usually all we need to avoid that . The same is true as we experience in emotional sensation of stress from our first instances of social rejection ridicule.",
      main_features: [
        "We quickly learn to fear and automatically avoid potentially",
        "Lorem ipsum best lightweight bra cool rejection avoid text",
        "Lightweight bras cool rejection quickly quis.",
      ],
    },
    reviews: [
      {
        id: 1,
        user: user_2,
        name: "John Smith",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 3.5,
      },
      {
        id: 2,
        user: user_1,
        name: "Ronan Shadowdancer",
        review_text:
          "One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.",
        rating: 4.5,
      },
    ],
  },
];

export default product_data;
