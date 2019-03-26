import React from "react";

export default function({ title }) {
  return (
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">教学后台管理系统</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="#/">{title.main}</a>
              </li>
              <li className="breadcrumb-item active">{title.sub}</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
