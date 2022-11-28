import React, { useState } from "react";
import TabBar from "../components/tabs/TabBar";
import Gallery from "../components/gallery/gallery.component";
import SectionHero from "../components/hero/SectionHero";

export default function Homepage() {
  const [filter, setFilter] = useState({ type: "", with: "" }); //  // "filter" to pass data through the component tree (filter the request)

  return (
    <>
      <div className="flex-row h-full">
        <div>
          <SectionHero />
          {/* <Header /> */}
        </div>
        <TabBar filter={filter} setFilter={setFilter} />
        <div>
          <container className="container mx-auto ">
            <Gallery filter={filter} />
          </container>
        </div>
      </div>
    </>
  );
}
