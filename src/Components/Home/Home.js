import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div>
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          src='./images/Home5.png'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Edit Me</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          src='./images/electronics1.png'
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Edit Me</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          src='./images/Home3.png'
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Edit Me</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          src='./images/Home4.png'
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Edit Me</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          src='./images/Home2.png'
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>Edit Me</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}
export default Home;