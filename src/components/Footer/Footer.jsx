import React from "react";

import phonePack from "../../assets/images/phone-pack.png";
import qrCode from "../../assets/images/qr-code.png";
import playStore from "../../assets/icons/playStore.svg";
import appStore from "../../assets/icons/appStore.svg";
import logo from "../../assets/icons/logo.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import youtube from "../../assets/icons/youtube.svg";
import blog from "../../assets/icons/blog.svg";

const Footer = () => {
  return (
    <footer className="footer container">
      <section className="footer__top">
        <img
          src={phonePack}
          className="footer__top__image"
          alt="phone__image"
        />
        <div className="footer__top__right">
          <div className="footer__top__right__upper">
            <img src={qrCode} alt="qrCode__image" />
            <div className="footer__top__right__upper__text">
              <h4>Ecommerce Mobil Uygulamayı İndirin</h4>
              <p>Mobil Uygulamayı QR Kod ile İndirin</p>
            </div>
          </div>
          <div className="footer__top__right__lower">
            <a href="https://play.google.com/store/apps/details?id=com.ecommerce.react.app">
              <img src={playStore} alt="playStore__icon" />
            </a>
            <a href="https://apps.apple.com/app/id723715907">
              <img src={appStore} alt="appStore__icon" />
            </a>
          </div>
        </div>
      </section>
      <section className="footer__bottom">
        <div className="footer__bottom__left">
          <img src={logo} alt="ecommerce__logo" />
          <div className="footer__bottom__left__social">
            <a href="https://www.facebook.com/ecommerce-react-app">
              <img src={facebook} alt="facebook__icon" />
            </a>
            <a href="https://twitter.com/ecommerce-react-app">
              <img src={twitter} alt="twitter__icon" />
            </a>
            <a href="https://www.instagram.com/ecommerce-react-app/">
              <img src={instagram} alt="instagram__icon" />
            </a>
            <a href="https://www.youtube.com/user/ecommerce-react-app">
              <img src={youtube} alt="youtube__icon" />
            </a>
            <a href="https://blog.ecommerce-react-app/">
              <img src={blog} alt="ecommerce__blog__icon" />
            </a>
          </div>
          <p className="footer__bottom__left__text">
            EcommerceReactApp olarak kişisel verilerinizin gizliliğini
            önemsiyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu
            kapsamında oluşturduğumuz aydınlatma metnine&nbsp;
            <span>buradan</span>&nbsp;ulaşabilirsiniz.
          </p>
        </div>
        <hr />
        <div className="footer__bottom__right">
          <div className="footer__bottom__right__subheading">
            <h4>Faydalı Bilgiler</h4>
            <ul>
              <li>Plant Care</li>
              <li>Plant Notes</li>
              <li>Plant Meaning</li>
              <li>Özel Günler</li>
              <li>Plants for Seasons</li>
              <li>BonnyFood Saklama Koşulları</li>
              <li>Site Haritası</li>
            </ul>
          </div>
          <div className="footer__bottom__right__subheading">
            <h4>Kurumsal</h4>
            <ul>
              <li>Hakkımızda</li>
              <li>Kariyer</li>
              <li>EcommerceReact’de Satış Yap</li>
              <li>Kurumsal Müşterilerimiz</li>
              <li>Reklamlarımız</li>
              <li>Basında Biz</li>
              <li>Kampanyalar</li>
              <li>Vizyonumuz</li>
            </ul>
          </div>
          <div className="footer__bottom__right__subheading">
            <h4>İletişim</h4>
            <ul>
              <li>Bize Ulaşın</li>
              <li>Sıkça Sorulan Sorular</li>
            </ul>
          </div>
          <div className="footer__bottom__right__subheading">
            <h4>Gizlilik Sözleşmesi</h4>
            <ul>
              <li>Mesafeli Satış Sözleşmesi</li>
              <li>Bilgi Toplumu Hizmetleri</li>
              <li>Gizlilik Sözleşmesi</li>
              <li>Ödeme Seçenekleri</li>
              <li>Hesap Bilgileri</li>
            </ul>
          </div>
        </div>
      </section>
      <summary>
        Ecommerce React App, learning and practice project.
      </summary>
      <p className="footer__copyright">
        Copyright © 2287 EcommerceReactApp Inc.
      </p>
    </footer>
  );
};

export default Footer;
