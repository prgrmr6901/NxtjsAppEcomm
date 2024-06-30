import React from "react";
function AboutUs() {
  return (
    <>
      <div>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col d-flex flex-column justify-content-center">
              <h1>About Us</h1>
              <p className="fw-normal">
                Welcome to our E-Store! We are passionate about providing
                high-quality products and exceptional customer service to our
                valued customers. <br></br> Our goal is to offer a seamless
                online shopping experience with a wide range of products,
                competitive prices, and reliable delivery.
              </p>
              <p className="fw-normal">
                we're so happy in bringing you the latest and greatest in
                industry. Our mission is to offer high-quality products that
                cater to your unique tastes and preferences, making your
                shopping experience enjoyable and hassle-free.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="container d-flex flex-wrap">
            <div className="col">
              <img src="/princp.png" />
            </div>
            <div className="col d-flex flex-column justify-content-center">
              <div className="pb-2 fw-bold fs-1">
                <span>Our Principles</span>
              </div>
              <div className="text-secondary pb-2">
                <span>
                  We are dedicated to providing only the best products that meet
                  our stringent quality standards.Your satisfaction is at the
                  heart of everything we do. We strive to offer exceptional
                  customer service and a seamless shopping experience.We
                  constantly seek out new trends and innovations to keep our
                  product range fresh and exciting.
                </span>
              </div>
              <div>
                <button className="btn btn-primary fw-bold">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5 pb-5">
          <div className="container d-flex flex-wrap">
            <div className="col d-flex flex-column justify-content-center">
              <div className="pb-2 fw-bold fs-1">
                <span>What Sets Us Apart?</span>
              </div>
              <div className="text-secondary pb-2">
                <span>
                  We offer a carefully curated selection of products ensuring
                  there's something for everyone.Your privacy and security are
                  paramount. Shop with confidence, knowing your personal
                  information is protected.Our customer service team is here to
                  assist you with any questions or concerns, ensuring a smooth
                  and pleasant shopping experience.
                </span>
              </div>
              <div>
                <button className="btn btn-primary fw-bold">KNOW MORE</button>
              </div>
            </div>
            <div className="col pt-1">
              <img src="/new1.jpg" className="rounded-3" />
            </div>
          </div>
        </div>
        <div>
          <div className="container pt-5 pb-5" style={{ textAlign: "center" }}>
            <p className="fw-bold">
              Thank you for choosing us for your shopping needs. We appreciate
              your trust and support, and we look forward to serving you!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;