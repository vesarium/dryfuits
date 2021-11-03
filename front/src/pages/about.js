import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";

const Faq = () => {
  const [openItem, setOpenItem] = useState(1);
  return (
    <>
      <PageWrapper>
        <div className="jobDetails-section bg-default pt-md-30 pt-sm-25 pt-23 pb-md-27 pb-sm-20 pb-17">
          <div className="container">
             Страница о нас
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default Faq;
