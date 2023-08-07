import React from 'react';
import styled from 'styled-components';

/* footer */
const FooterContainer = styled.div`
  padding: 0 0 30px 0px;
  color: white;
  font-size: 14px;
  background-color: rgb(67 0 86);
  margin-top: 100px;
`;

const FooterTop = styled.div`
  padding: 60px 0 30px 0;
  background-color: rgb(67 0 86);
  color: white;
`;

const FooterContact = styled.div`
  margin-bottom: 30px;
`;

const FooterContactHeading = styled.h3`
  color: #ffc800;
`;

const FooterContactTitle = styled.h4`
  font-size: 22px;
  margin: 0 0 30px 0;
  padding: 2px 0 2px 0;
  line-height: 1;
  font-weight: 700;
`;

const FooterContactText = styled.p`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0;
  color: white;
`;

const FooterTopHeading = styled.h4`
  font-size: 16px;
  font-weight: bold;
  position: relative;
  padding-bottom: 12px;
`;

const FooterLinks = styled.div`
  margin-bottom: 30px;
  margin-top: 10px;
`;

const FooterLinksHeading = styled.h4`
  color: #ffc800;
`;

const FooterLinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLinksListItem = styled.li`
  padding: 10px 0;
  display: flex;
  align-items: center;
`;

const FooterLinksListItemLink = styled.a`
  text-decoration: none;
  color: white;
  display: inline-block;
  line-height: 1;
  font-weight: bold;
  transition: 0.5s ease;

  &:hover {
    color: #ffc800;
  }
`;

const SocialLinks = styled.div`
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

  &:hover {
    background-color: #ffc800;
    color: white;
  }
`;

const Copyright = styled.div`
  text-align: center;
  float: left;
`;

const Credits = styled.div`
  float: right;
  text-align: center;
  font-size: 13px;
`;

/* footer */

const Footer = () => {
  return (
    <FooterContainer>
      <footer id="footer">
        <FooterTop>
          <div className="container">
            <div className="row">
              <FooterContact className="col-lg-3 col-md-6">
                <FooterContactHeading>Thrift Shop</FooterContactHeading>
                <FooterContactText>
                  Nairobi <br />
                  Africa <br />
                  Kenya <br />
                </FooterContactText>
                <strong>Phone:</strong> +254724567904 <br />
                <strong>Email:</strong> thriftshop@gmail.com <br />
              </FooterContact>

              <FooterLinks className="col-lg-3 col-md-6">
                <FooterLinksHeading>Useful Links</FooterLinksHeading>
                <FooterLinksList>
                  <FooterLinksListItem>
                    <FooterLinksListItemLink href="#">Home</FooterLinksListItemLink>
                  </FooterLinksListItem>
                  <FooterLinksListItem>
                    <FooterLinksListItemLink href="#">About Us</FooterLinksListItemLink>
                  </FooterLinksListItem>
                  <FooterLinksListItem>
                    <FooterLinksListItemLink href="#">Services</FooterLinksListItemLink>
                  </FooterLinksListItem>
                  <FooterLinksListItem>
                    <FooterLinksListItemLink href="#">Terms of Conditions</FooterLinksListItemLink>
                  </FooterLinksListItem>
                  <FooterLinksListItem>
                    <FooterLinksListItemLink href="#">Privacy Policy</FooterLinksListItemLink>
                  </FooterLinksListItem>
                </FooterLinksList>
              </FooterLinks>

              <FooterLinks className="col-lg-3 col-md-6">
                <FooterLinksHeading>Our Services</FooterLinksHeading>
                <FooterLinksList>
                  <FooterLinksListItem>
                    <FooterLinksListItemLink href="#">Electronics</FooterLinksListItemLink>
                  </FooterLinksListItem>
                  <FooterLinksListItem>
                    <FooterLinksListItemLink href="#">Locomotives</FooterLinksListItemLink>
                  </FooterLinksListItem>
                  <FooterLinksListItem>
                    <FooterLinksListItemLink href="#">Clothing</FooterLinksListItemLink>
                  </FooterLinksListItem>
                  <FooterLinksListItem>
                    <FooterLinksListItemLink href="#">Furnitures</FooterLinksListItemLink>
                  </FooterLinksListItem>
                  <FooterLinksListItem>
                    <FooterLinksListItemLink href="#">Kitchen Utensils</FooterLinksListItemLink>
                  </FooterLinksListItem>
                </FooterLinksList>
              </FooterLinks>

              <FooterLinks className="col-lg-3 col-md-6">
                <FooterLinksHeading>Our Social Networks</FooterLinksHeading>
                <p>Find us on all social media by the name of @thriftshop.com</p>
                <div className="social-links mt-3">
                  <SocialLinks href="#"><i className="fab fa-twitter"></i></SocialLinks>
                  <SocialLinks href="#"><i className="fab fa-facebook-f"></i></SocialLinks>
                  <SocialLinks href="#"><i className="fab fa-instagram"></i></SocialLinks>
                  <SocialLinks href="#"><i className="fab fa-skype"></i></SocialLinks>
                  <SocialLinks href="#"><i className="fab fa-linkedin"></i></SocialLinks>
                </div>
              </FooterLinks>
            </div>
          </div>
        </FooterTop>
        <hr />
        <div className="container py-4">
          <Copyright>
            &copy; Copyright <strong><span>ThriftShop Shop</span></strong>. All Rights Reserved
          </Copyright>
          <Credits>
            Designed by <a href="#">SA coding</a>
          </Credits>
        </div>
      </footer>
    </FooterContainer>
  );
};

export default Footer;
