import Carousel from 'react-bootstrap/Carousel';

export default function CareerlinkCarousel() {
  return (
    <div style={{height: "auto", width:"70vw", margin: "4rem", marginLeft:"auto", marginRight:"auto", color:"white"}}>
      <Carousel>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://i.postimg.cc/zXfvGJjS/Career-Link.png"
            alt="Image One"
            style={{borderRadius:"2rem"}}
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://i.postimg.cc/CLK5xFNs/Carousal2.png"
            alt="Image Two"
            style={{borderRadius:"2rem"}}
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://i.postimg.cc/bNvrwzTQ/Carousal3.png"
            alt="Image Three"
            style={{borderRadius:"2rem"}}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
