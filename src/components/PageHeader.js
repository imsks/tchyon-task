import React from "react";

const PageHeader = ({ heading, paragraph }) => {
  return (
    <div className="page__container__content__header">
      <h1 className="heading-main page__container__content__header__heading">{heading}</h1>
      <p className="paragraph page__container__content__header__paragraph">{paragraph}</p>
    </div>
  );
};

export default PageHeader;
