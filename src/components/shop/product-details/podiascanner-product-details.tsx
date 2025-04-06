"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { add_cart_product, decrement, increment } from "@/redux/features/cart";
import { add_to_wishlist } from "@/redux/features/wishlist";

// Import product images
import img_1 from "@/assets/images/shop/img_01.jpg";
import img_2 from "@/assets/images/shop/img_02.jpg";
import img_3 from "@/assets/images/shop/img_03.jpg";
import img_4 from "@/assets/images/shop/img_04.jpg";
import user_1 from "@/assets/images/blog/avatar_01.jpg";
import user_2 from "@/assets/images/blog/avatar_02.jpg";

// ✅ Hardcoded Product Object (Matching `IProduct` Type)
const product = {
  id: 1,
  img: img_1,
  title: "Podia Scanner Pro",
  price: 499.99,
  old_price: 599.99,
  quantity: 10,
  sm_desc: "A high-precision scanning device for professional use.",
  related_images: [img_1, img_2, img_3, img_4],
  category: "Scanning Equipment", // ✅ Added category
  discount: 10, // ✅ Added discount (percentage)
  details:
    "This scanner is designed for high-resolution 3D scanning with precision accuracy, making it ideal for medical and industrial applications.", // ✅ Added details
  reviews: [
    {
      id: 1,
      user: user_2,
      name: "John Doe",
      review_text: "Excellent product with high accuracy.",
      rating: 5,
    },
    {
      id: 2,
      user: user_1,
      name: "Jane Smith",
      review_text: "Works well for my needs. Highly recommended!",
      rating: 4.5,
    },
  ],
};

const PodiascannerDetailsArea = () => {
  const { orderQuantity } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [activeImg, setActiveImg] = useState<StaticImageData | null>(
    product.related_images[0] || null
  );

  // Handle Image Active State
  const handleImageActive = (img: StaticImageData) => setActiveImg(img);

  return (
    <div className="product-details-one mt-150 lg-mt-80 mb-150 lg-mb-80">
      <div className="container">
        <div className="row">
          {/* Product Image Display */}
          <div className="col-lg-5 order-lg-2">
            <div className="product-img-tab-content h-100">
              <div className="h-100">
                <a className="w-100 h-100 d-flex align-items-center justify-content-center">
                  {activeImg && (
                    <Image
                      src={activeImg}
                      alt="product-img"
                      className="lazy-img"
                    />
                  )}
                </a>
              </div>
            </div>
          </div>

          {/* Thumbnail Images */}
          <div className="col-lg-1 order-lg-1">
            <ul className="nav flex-lg-column product-img-tab">
              {product.related_images.map((img, i) => (
                <li key={i} className="nav-item">
                  <button
                    onClick={() => handleImageActive(img)}
                    className={`nav-link ${img === activeImg ? "active" : ""}`}
                  >
                    <Image
                      src={img}
                      alt="nav-img"
                      className="m-auto lazy-img"
                      width={58}
                      height={76}
                      style={{ objectFit: "cover" }}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Info */}
          <div className="col-lg-6 order-lg-3">
            <div className="product-info ps-xxl-5 md-mt-40">
              <div className="stock-tag">In Stock</div>
              <h2 className="product-name">{product.title}</h2>

              {/* Ratings */}
              <ul className="style-none d-flex align-items-center rating">
                <li>
                  <i className="bi bi-star-fill"></i>
                </li>
                <li>
                  <i className="bi bi-star-fill"></i>
                </li>
                <li>
                  <i className="bi bi-star-fill"></i>
                </li>
                <li>
                  <i className="bi bi-star-fill"></i>
                </li>
                <li>
                  <i className="bi bi-star"></i>
                </li>
                <li>
                  <Link href="#">
                    ({product.reviews.length} Customer Reviews)
                  </Link>
                </li>
              </ul>

              {/* Pricing */}
              <div className="price">
                {product.old_price && <del>${product.old_price}</del>} $
                {product.price}
              </div>
              <p className="availability">
                {product.quantity} Pieces Available
              </p>
              {/* <p className="description-text">{product.sm_desc}</p>
              <p className="description-text">
                <strong>Category:</strong> {product.category}
              </p>
              <p className="description-text">
                <strong>Discount:</strong> {product.discount}% Off
              </p>
              <p className="description-text">
                <strong>Details:</strong> {product.details}
              </p> */}

              {/* Quantity Selector */}
              <div className="customize-order">
                <div className="quantity d-flex align-items-center mt-40">
                  <h6>Quantity:</h6>
                  <div className="button-group">
                    <ul className="style-none d-flex align-items-center">
                      <li>
                        <button
                          onClick={() => dispatch(decrement())}
                          className="value-decrease"
                        >
                          -
                        </button>
                      </li>
                      <li>
                        <input
                          type="number"
                          value={orderQuantity}
                          readOnly
                          className="product-value val"
                        />
                      </li>
                      <li>
                        <button
                          onClick={() => dispatch(increment())}
                          className="value-increase"
                        >
                          +
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>


              <div className="button-group mt-30 d-sm-flex align-items-center">
                <button className="btn-four mt-15 me-sm-4 d-block">
                Buy Now 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodiascannerDetailsArea;
