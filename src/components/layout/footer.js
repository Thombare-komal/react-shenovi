import React from "react";
import LayoutHoc from "../../hoc/LayoutHoc";

const Footer = props => (
  <LayoutHoc>
    <div className="container-fluid">
      <div className="footer">
        <div className="row">
          <div className="col-md-6">
            <div className="row footer-links">
              <div className="col-md-1"></div>
              <div className="col-md-3">
                <p>Questions&nbsp;|</p>
              </div>
              <div className="col-md-4">
                <p>Advanced Seacrh&nbsp;|</p>
              </div>
              <div className="col-md-4">
                <p>Privacy Policy</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-11">
                <p>© Copyright Shenovi.</p>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-2">
                <button className="ui circular facebook icon button">
                  <i className="facebook icon"></i>
                </button>
              </div>
              <div className="col-md-2">
                <button className="ui circular twitter icon button">
                  <i className="twitter icon"></i>
                </button>
              </div>
              <div className="col-md-2">
                <button className="ui circular linkedin icon button">
                  <i className="linkedin icon"></i>
                </button>
              </div>
              <div className="col-md-2">
                <button className="ui circular wechat icon button">
                  <i className="wechat icon"></i>
                </button>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <main>{props.children}</main> */}
    {/* </section> */}
  </LayoutHoc>
);
export default Footer;
