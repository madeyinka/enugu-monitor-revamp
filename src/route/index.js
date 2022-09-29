import React, { Suspense, useLayoutEffect} from "react"
import {Routes, Route} from "react-router-dom"
import Category from "../layout/Category";
import Home from "../layout/Home";
import Post from "../layout/Post";

function Pages() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

  return (
    <Suspense fallback={<div />}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/content/:slug" element={<Post />} />
            <Route path="/category/:slug" element={<Category />} />
        </Routes>
    </Suspense>
  )
}

export default Pages