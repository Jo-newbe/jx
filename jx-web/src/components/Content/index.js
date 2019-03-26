import React from "react";
import BreadCrumbs from "../BreadCrumb";

export default function({ children, title }) {
  return (
    <div className="content-wrapper">
      <BreadCrumbs title={title} />
      <section className="content">
        <div className="container-fluid">
          <div className="row">{children}</div>
        </div>
      </section>
    </div>
  );
}
