import React from 'react';

const Footer = props => {
  return (
    <>
      <footer className="footer">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center footerList">
            <span className="footerMain">
              알앤텍솔루션 경기도 용인시 기흥구 용구대로 2311 (경기도여성능력개발센타)
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-offset-2 col-md-2 col-lg-2 text-center footerList">
            <span className="footerTitle">
              회사명
            </span>
            <span className="footerExplain">
              VideoPlatform
            </span>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 text-center footerList">
            <span className="footerTitle">
              대표
            </span>
            <span className="footerExplain">
              GJS
            </span>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 text-center footerList">
            <span className="footerTitle">
              통신판매업신고번호
            </span>
            <span className="footerExplain">
              2018-ㅅㅅㅅ-1111
            </span>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 text-center footerList">
            <span className="footerTitle">
              사업자 등록번호
            </span>
            <span className="footerExplain">
              070-0000-0000
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-offset-2 col-md-2 col-lg-2 text-center footerList">
            <span className="footerTitle">
              대표번호
            </span>
            <span className="footerExplain">
              070-0000-0000
            </span>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 text-center footerList">
            <span className="footerTitle">
              팩스번호
            </span>
            <span className="footerExplain">
              0000-0000
            </span>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 text-center footerList">
            <span className="footerTitle">
              이메일
            </span>
            <span className="footerExplain">
              ㅇㅇㅇㅇㅇ@ㅇㅇㅇㅇ
            </span>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 text-center footerList">
            <span className="footerTitle">
              개인정보책임자
            </span>
            <span className="footerExplain">
              GJS
            </span>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
            <span className="footerCopyright">2018 Copyright © </span>
            <a className="footerCopyright" href="#">VideoPlatform</a>
            <span className="footerCopyright"> All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
