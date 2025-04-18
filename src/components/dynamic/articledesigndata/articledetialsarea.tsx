"use client";
import React, { useEffect, useState } from "react";
import UseSocialShare from "@/components/socail-media/socialshare";
import BlogSidebar from "@/components/blogs/blog-sidebar";

type Article = {
  id?: string;
  image: string;
  imageUrl?: string;
  date: string;
  title: string;
  author: string;
  post_info: string;
  category: string;
  metaTitle: string;
  metaKeywords: string;
  metaDescription: string;
  link: string;
};

const ArticleDetailsArea: React.FC<{ article: Article }> = ({ article }) => {
  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-details position-relative mt-150 lg-mt-80 mb-150 lg-mb-80">
      <div className="container">
        <div className="row gx-xl-5">
          <div className="col-lg-8">
            <article className="blog-meta-two style-two">
              <figure
                className="post-img position-relative d-flex align-items-end m0"
                style={{ backgroundImage: `url(${article.imageUrl || article.image})` }}
              >
                <div className="date">{article.date}</div>
              </figure>
              <div className="post-data">
                <div className="post-info">{article.category}</div>
                <div className="blog-title">
                  <h1>{article.title}</h1>
                </div>
                <div className="post-details-meta">
                  <div dangerouslySetInnerHTML={{ __html: article.post_info }} />
                </div>
                <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                  <UseSocialShare />
                </div>
              </div>
            </article>
          </div>
          <div className="col-lg-4 col-md-8">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailsArea;
