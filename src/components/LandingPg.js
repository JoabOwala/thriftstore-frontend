import React from "react";
import { Link } from "react-router-dom";
import background from "../images/background.png"
import c4 from "../images/c4.png"
import download from "../images/download.jpg"
import ladies from "../images/ladies.jpg"
import man from "../images/man.jpg"
import './Landing.css';



function LandingPg() {
  return (
    
	<div>
	<div class="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicators">
		<div class="carousel-indicators">
			<button aria-label="Slide 1" class="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" type="button"></button>
		</div>
		<div class="carousel-inner">
		<div class="carousel-item active">
    <img alt="..." class="d-block w-100" src={download} />
			<div class="carousel-caption">
					<h5>Welcome to ThriftShop</h5>
					<p>Explore a world of stylish and affordable products handpicked just for you. Discover unique items that fit your lifestyle.</p>
					<p><a class="btn btn-warning mt-3" href="#">Shop Now</a></p>
				</div>
			</div>
			<div class="carousel-item">
				<img alt="..." class="d-block w-100" src={ladies} />
				<div class="carousel-caption">
					<h5>Fashionable Clothing</h5>
					<p>Step up your style game with our wide range of trendy clothing. From casual to formal, find the perfect outfit for every occasion.</p>
					<p><a class="btn btn-warning mt-3" href="#">Explore Collection</a></p>
				</div>
			</div>
			<div class="carousel-item">
				<img alt="..." class="d-block w-100" src={man}  />
				<div class="carousel-caption">
					<h5>Upgrade Your Home</h5>
					<p>Enhance your living space with our selection of high-quality electrical appliances. Transform your home into a haven of comfort.</p>
					<p><a class="btn btn-warning mt-3" href="#">Discover Appliances</a></p>
				</div>
			</div>

		</div><button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" class="carousel-control-prev-icon"></span> <span class="visually-hidden">Previous</span></button> <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" class="carousel-control-next-icon"></span> <span class="visually-hidden">Next</span></button>
	</div>
	<section class="about section-padding" id="about">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-12 col-12">
					<div class="about-img"><img alt="" class="img-fluid" src={c4}/></div>
				</div>
				<div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
					<div class="about-text">
					<h2>Experience Unmatched Excellence<br />
						in Quality Services</h2>
						<p>At ThriftShop, we take pride in offering you services of the highest caliber. Our commitment to perfection, attention to detail, and dedication to customer satisfaction set us apart.</p>
						<p>From fashion-forward clothing to cutting-edge home appliances, our curated selection ensures that you get nothing but the best. We believe in delivering value that exceeds expectations.</p>
						<a class="btn btn-warning" href="#">Discover Our Services</a>
					</div>
				</div>
			</div>
		</div>
	</section>


	<section class="services section-padding" id="services">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="section-header text-center pb-5">
                    <h2>Our Services</h2>
                    <p>Experience the ThriftShop Difference</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-12 col-lg-4">
                <div class="card text-white text-center bg-dark pb-2">
                    <div class="card-body">
                        <i class="bi bi-truck"></i>
                        <h3 class="card-title">Free Shipping</h3>
                        <p class="lead">Enjoy hassle-free shopping with our complimentary shipping service. Your orders will be delivered to your doorstep without any additional cost.</p>
                        <button class="btn bg-warning text-dark">Learn More</button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-12 col-lg-4">
                <div class="card text-white text-center bg-dark pb-2">
                    <div class="card-body">
                        <i class="bi bi-lock"></i>
                        <h3 class="card-title">Secure Payment</h3>
                        <p class="lead">Shop with confidence knowing that your payments are secure. We prioritize the safety of your personal and financial information.</p>
                        <button class="btn bg-warning text-dark">Learn More</button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-12 col-lg-4">
                <div class="card text-white text-center bg-dark pb-2">
                    <div class="card-body">
                        <i class="bi bi-headset"></i>
                        <h3 class="card-title">24/7 Customer Service</h3>
                        <p class="lead">We're here to assist you around the clock. Our dedicated customer service team is available 24/7 to address your queries and concerns.</p>
                        <button class="btn bg-warning text-dark">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section class="testimonials section-padding" id="testimonials">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="section-header text-center pb-5">
                    <h2>Testimonials</h2>
                    <p>What Our Customers Say About Us</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card text-center">
                    <div class="card-body">
                        <i class="bi bi-chat-quote-fill text-dark"></i>
                        <p class="testimonial-text">
                            "ThriftShop has completely transformed my shopping experience. Their dedication to quality and customer satisfaction is unmatched!"
                        </p>
                        <h3 class="testimonial-author py-2">Joab Owala</h3>
                    </div>
                </div>
            </div>
            
           <div class="col-12 col-md-6 col-lg-4">
                <div class="card text-center">
                    <div class="card-body">
                        <i class="bi bi-chat-quote-fill text-dark"></i>
                        <p class="testimonial-text">
                            "I've never encountered such a seamless online shopping platform. ThriftShop's commitment to excellence is truly commendable."
                        </p>
                        <h3 class="testimonial-author py-2">Cynthia Adhiambo</h3>
                    </div>
                </div>
            </div> 
			<div class="col-12 col-md-6 col-lg-4">
                <div class="card text-center">
                    <div class="card-body">
                        <i class="bi bi-chat-quote-fill text-dark"></i>
                        <p class="testimonial-text">
						"ThriftShop offers an amazing range of products at great prices. Their free shipping and 24-hour customer service make shopping here a breeze!
                        </p>
                        <h3 class="testimonial-author py-2">Jesse Thuku</h3>
                    </div>
                </div>
            </div> 
			<div class="col-12 col-md-6 col-lg-4">
                <div class="card text-center">
                    <div class="card-body">
                        <i class="bi bi-chat-quote-fill text-dark"></i>
                        <p class="testimonial-text">
						I'm impressed with ThriftShop's secure payment options. It's reassuring to know that my personal information is kept safe while making purchases online
                        </p>
                        <h3 class="testimonial-author py-2">Ocholla Levin</h3>
                    </div>
                </div>
            </div> 
            
        </div>
    </div>
</section>





	
<section class="contact section-padding" id="contact">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="section-header text-center pb-5">
                    <h2>Contact Us</h2>
                    <p>Get in Touch with Us</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 mx-auto">
                <div class="contact-form">
                    <form>
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="Your Name" required />
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Your Email" required />
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" rows="5" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-warning">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

	
	</div>


  );
}

export default LandingPg;



