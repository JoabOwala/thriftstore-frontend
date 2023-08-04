import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">

              <div class="col-lg-3 col-md-6 footer-contact">
                <h3>Thrift Shop</h3>
                <p>
                  Karachi <br />
                  Sindh <br />
                  Pakistan <br />
                </p>
                <strong>Phone:</strong> +000000000000000 <br />
                <strong>Email:</strong> electronicshop@.com <br />
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Terms of service</a></li>
                  <li><a href="#">Privacy policey</a></li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><a href="#">PS 5</a></li>
                  <li><a href="#">Computer</a></li>
                  <li><a href="#">Gaming Laptop</a></li>
                  <li><a href="#">Mobile Phone</a></li>
                  <li><a href="#">Gaming Gadget</a></li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quibusdam.</p>
                <div class="social-links mt-3">
                  <a href="#"><i class="fa-brands fa-twitter"></i></a>
                  <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i class="fa-brands fa-instagram"></i></a>
                  <a href="#"><i class="fa-brands fa-skype"></i></a>
                  <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                </div>
              </div>

            </div>
          </div>
        </div>
        <hr />
        <div class="container py-4">
          <div class="copyright">
            &copy; Copyright <strong><span>Electronic Shop</span></strong>. All Rights Reserved
          </div>
          <div class="credits">
            Designed by <a href="#">SA coding</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
