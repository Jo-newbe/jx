import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Aside from "../../components/Aside";
import Content from "../../components/Content";

export default class extends Component {
  state = {
    title: {
      main: "教学",
      sub: "主页"
    }
  };

  render() {
    return (
      <>
        <Header />
        <Aside />
        <Content title={this.state.title}>
          <div className="col-12">
            <h1>主页</h1>
          </div>
        </Content>
        <Footer />
      </>
    );
  }
}
