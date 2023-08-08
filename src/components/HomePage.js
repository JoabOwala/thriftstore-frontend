import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';


const HomeSection = styled.section`
  width: 86%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  background-color: #a9a9a92b;
  z-index: 0;
  margin-left: 90px;

  @media screen and (max-width: 1200px) {
    height: 90vh;
  }

  @media screen and (max-width: 799px) {
    height: 140vh;
  }

  @media screen and (max-width: 550px) {
    height: 110vh;
  }
`;

const ImageContainer = styled.div`
  flex: 1 1 300px;
`;

const StyledImage = styled.img`
  margin-top: 30px;
  width: 100%;
`;

const Content = styled.div`
  flex: 1 1 400px;
  margin-top: 20px;

  @media screen and (max-width: 420px) {
    h1 {
      font-size: 45px;
    }
  }

  @media screen and (max-width: 320px) {
    h1 {
      font-size: 36px;
    }
  }
`;

const H1 = styled.h1`
  color: rgb(67 0 86);
  font-weight: bold;
  margin-left: 23px;
  font-size: 55px;
  text-shadow: -1px 1px 1px black;

  span {
    color: rgb(67 0 86);
    text-shadow: 1px 1px 1px black;
  }

  #span2 {
    color: #ffc800;
  }
`;

const P = styled.p`
  margin-left: 23px;
`;

const Button = styled.button`
  width: 150px;
  height: 32px;
  letter-spacing: 3px;
  background-color: blue; /* Change this to your desired blue color */
  color: white;
  border-radius: 5px;
  border: none;
  transition: 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: #ffc800;
    color: black;
    border: none;
  }
  
`;
const ProductCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin-top: 30px;
`;

const ProductCard = styled.div`
  width: 100%;
  max-width: 300px; /* Set the maximum width of each card */
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  height: 100%; /* Set a fixed height for each card */

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ProductCardImage = styled.img`
  width: 100%;
  height: 200px; /* Set a fixed height for the image */
  object-fit: cover;
  border-radius: 5px;
`;

const ProductCardBody = styled.div`
  margin-top: 10px;
  height: 100%; /* Set a fixed height for the card body */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ProductCardHeading = styled.h3`
  font-size: 20px;
  color: black;
  text-align: center;
`;

const ProductCardText = styled.p`
  font-size: 12px;
  margin-top: 5px;
  color: black;
  text-align: center;
`;

const ProductCardStars = styled.div`
  margin-top: 10px;
  text-align: center;

  .checked {
    color: #ffc800;
  }
`;

const ProductCardPrice = styled.h2`
  font-size: 20px;
  color: black;
  margin-top: 20px;
  text-align: center;

  span {
    float: right;
    color: black;
    cursor: pointer;
  }
`;
const ProductsHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 20px;
`;
const ProductsHeading = styled.h1`
  font-size: 28px;
  color: #333;
  padding: 0 20px;
  background-color: #fff;
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
`;


function HomePage({ addToCart }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend API
    fetch("http://127.0.0.1:3001/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Update the state with the received products
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);


  return (
    <div>
      <HomeSection>
        <Content>
          <H1>
            <span>Electronic Products</span>
            <br />
            Up To <span id="span2">50%</span> Off
          </H1>
          <P>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, saepe.
            <br />
            Lorem ipsum dolor sit amet consectetur.
          </P>
          <div className="btn">
            <Button>Shop Now</Button>
          </div>
        </Content>
        <ImageContainer>
          <StyledImage src="https://o.remove.bg/downloads/5d7fae5c-9a6a-412c-b3ec-7ba2910dd7aa/774-7744281_samsung-electronics-samsung-electronic-product-png-removebg-preview.png" alt="" />
        </ImageContainer>
      </HomeSection>

      <ProductCardsContainer className="container" id="product-cards">
      <h1 className="text-center">PRODUCTS</h1>
      <div className="row" style={{ marginTop: "30px" }}>
        {products.map((product) => (
          <div key={product.id} className="col-md-3 py-3 py-md-0">
            <ProductCard className="card">
              {/* Wrap the product image in a Link component */}
              <Link to={`/products/${product.id}`}>
                <ProductCardImage src={product.photo_url} alt=""  />
              </Link>
              <ProductCardBody className="card-body">
                <ProductCardHeading className="text-center">{product.title}</ProductCardHeading>
                <ProductCardText className="text-center">{product.description}</ProductCardText>
                <ProductCardStars className="star text-center">
                  {/* Display star icons here */}
                  {Array.from({ length: 5 }).map((_, index) => (
                    <i key={index} className={`fa-solid fa-star ${index < product.rating ? "checked" : ""}`} />
                  ))}
                </ProductCardStars>
                <ProductCardPrice>
                  ${product.price} {""}

                  <button className="btn btn-primary" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>

                  <span><i className="bi bi-cart"></i></span>
                </ProductCardPrice>
              </ProductCardBody>
            </ProductCard>
          </div>
        ))}
      </div>
    </ProductCardsContainer>

  </div>
  );
}

export default HomePage;