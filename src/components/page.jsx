import React from "react";
import {Header} from "./header";
import { BannerTop } from "./bannerTop";
import { AccumulatedGrid } from "./accumulatedGrid";
import { BannerAside } from "./bannerAside";
import { Footer } from "./footer";


function Page() {
  return (
    <>
      <Header />
      <main>
        <BannerTop />
        <div className="lay-sidebar">
          <AccumulatedGrid />
          <BannerAside />
        </div>
      </main>
      <Footer />
    </>
  );
}

export {Page};