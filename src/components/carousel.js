import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdnb.artstation.com/p/assets/images/images/001/207/413/4k/suke-1.jpg?1443929441"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>League of Legends</h3>
          <p>League of Legends is a team-based game with over 140 champions to make epic plays with. Play now for free.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.esportsedition.com/wp-content/uploads/2019/02/Apex-Banner.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Apex Legends</h3>
          <p>Apex Legends is a free-to-play hero shooter game where legendary competitors battle for glory, fame, and fortune on the fringes of the Frontier.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://elvortex.com/wp-content/uploads/2019/09/call-of-duty-modern-warfare-hero-banner.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Call Of Duty : Modern Warfare</h3>
          <p>
          Call of Duty: Modern Warfare is a 2019 first-person shooter game developed by Infinity Ward and published by Activision
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;