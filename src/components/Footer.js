import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  padding: 0 0 30px 0px;
  color: white;
  font-size: 14px;
  background-color: rgb(67 0 86);
  margin-top: 100px;

  .footer-top {
    padding: 60px 0 30px 0;
    background-color: rgb(67 0 86);
    color: white;
  }

  .footer-top .footer-contact {
    margin-bottom: 30px;
  }

  .footer-top .footer-contact h3 {
    color: #ffc800;
  }

  .footer-top .footer-contact h4 {
    font-size: 22px;
    margin: 0 0 30px 0;
    padding: 2px 0 2px 0;
    line-height: 1;
    font-weight: 700;
  }

  .footer-top .footer-contact p {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 0;
    color: white;
  }

  .footer-top h4 {
    font-size: 16px;
    font-weight: bold;
    position: relative;
    padding-bottom: 12px;
  }

  .footer-top .footer-links {
    margin-bottom: 30px;
    margin-top: 10px;
  }

  .footer-top .footer-links h4 {
    color: #ffc800;
  }

  .footer-top .footer-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-top .footer-links ul li {
    padding: 10px 0;
    display: flex;
    align-items: center;
  }

  .footer-top .footer-links ul li a {
    text-decoration: none;
    color: white;
    display: inline-block;
    line-height: 1;
    font-weight: bold;
    transition: 0.5s ease;
  }

  .footer-top .footer-links ul li a:hover {
    color: #ffc800;
  }

  .footer-top .socail-links a {
    font-size: 18px;
    display: inline-block;
    text-decoration: none;
    background-color: #373737;
    color: white;
    line-height: 1;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    transition: 0.5s ease;
  }

  .footer-top .socail-links a:hover {
    background-color: #ffc800;
    color: white;
  }

  .copyright {
    text-align: center;
    float: left;
  }

  .credits {
    float: right;
    text-align: center;
    font-size: 13px;
  }

  .credits a {
    color: #ffc800;
  }
`;

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>Thrift Shop</h3>
                <p>
                  Karachi <br />
                  Sindh <br />
                  Pakistan <br />
                </p>
                <strong>Phone:</strong> +000000000000000 <br />
                <strong>Email:</strong> electronicshop@example.com <br />
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><a href="#">PS 5</a></li>
                  <li><a href="#">Computer</a></li>
                  <li><a href="#">Gaming Laptop</a></li>
                  <li><a href="#">Mobile Phone</a></li>
                  <li><a href="#">Gaming Gadget</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quibusdam.</p>
                <div className="social-links mt-3">
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-skype"></i></a>
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container py-4">
          <div className="copyright">
            &copy; Copyright <strong><span>ThriftShop Shop</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="#">SA coding</a>
          </div>
        </div>
    </footer>
    </div>
  );
};

export default Footer;
