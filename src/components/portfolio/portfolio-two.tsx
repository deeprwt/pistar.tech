"use client";
import React, { useRef,useState, useEffect  } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
// internal
import portfolio_data from "@/data/portfolio-data";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/database/firebase";
// import ArticleWebsiteCard from "./articlewebsitecard";
import ArticleWebsiteCard from "../dynamic/articledesigndata/articlewebsitecard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import BlogItemTwo from "../blogs/blog-item/blog-item-two";
import BlogItemSlider from "../blogs/blog-item/blog-item-slider";

type Article = {
  id?: string;
  image: string;
  imageUrl?: string;
  date: string;
  title: string;
  author: string;
  post_info: string;
  category: string;
  metaKeywords: string;
  metaDescription: string;
  link: string;
  draft: boolean; // Add this line
};

// slider setting
const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

// img style
const imgStyle = {
  height: "auto",
};

const PortfolioTwo = () => {

  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articlesSnapshot = await getDocs(collection(db, "articles"));
        const articlesData = articlesSnapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() } as Article)
        );
        setArticles(articlesData);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const parseDate = (dateString: string): Date => {
    return new Date(dateString);
  };

  // Filter out draft articles and sort the remaining articles
  const filteredArticles = articles.filter((article) => !article.draft);

  const sortedArticles = filteredArticles.sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  // Limit to 3 articles
  const limitedArticles = sortedArticles.slice(0, 6);


  const portfolio_items = portfolio_data.filter(
    (p) => p.portfolio === "portfolio-two"
  );
  const sliderRef = useRef<Slider | null>(null);

  const sliderPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const sliderNext = () => {
    sliderRef.current?.slickNext();
  };
  return (
    <div className="portfolio-two service-details position-relative pt-150 lg-pt-80 pb-150 lg-pb-80" style={{background:"#f5f5f5"}}>
      <div className="container">
        <div className="position-relative mb-80 lg-mb-40 details-meta">
          {/* ---------------------------------Section staring-------------------------------*/}
          <div className="d-flex justify-content-between align-items-center">
            <div className="title-one">
              <h3 className="color-deep m0">Latest Article.</h3>
            </div>
            <ul className="slider-arrows slick-arrow-one d-flex justify-content-center style-none">
              <li onClick={sliderPrev} className="prev_b slick-arrow">
                <i className="bi bi-arrow-left"></i>
              </li>
              <li onClick={sliderNext} className="next_b slick-arrow">
                <i className="bi bi-arrow-right"></i>
              </li>
            </ul>
          </div>
          {/* ---------------------------------Section End------------------------------*/}
        </div>
      </div>
      {/* ---------------------------------Slider section Staring-------------------------------*/}
      <div className="slider-wrapper">
        <Slider
          {...slider_setting}
          ref={sliderRef}
          className="project-slider-one"
        >
           {loading ? (
              Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="col-md-4 mb-5">
                  <Skeleton height={250} />
                  <Skeleton count={4} />
                </div>
              ))
            ) : (
              limitedArticles.map((article) => (
                <div key={article.id} className="col-md-4">
                  <BlogItemSlider article={article} />
                  {/* <BlogItemTwo article={article} /> */}
                  {/* <ArticleWebsiteCard article={article} /> */}
                </div>
              ))
            )}
        </Slider>
      </div>
      {/* ---------------------------------Slider Section End-------------------------------*/}
    </div>
  );
};

export default PortfolioTwo;
