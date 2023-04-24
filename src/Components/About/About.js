import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function AboutUs() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src='./images/Image4.png' />
        <Card.Body>
        <h2><Card.Title className='textheader'>Luke Glenn</Card.Title></h2>
        <p4><Card.Text>Dept. of  Electrical and Computer Engineering</Card.Text></p4>
        <p4><Card.Text>Georgia Southern University</Card.Text></p4>
          <p4><Card.Text>Statesboro, USA</Card.Text></p4>
        </Card.Body>
        <Card.Footer>
        <Card.Text className='email'><a href="mailto:lg10422@georgiasouthern.edu">Send Email</a></Card.Text>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src= './images/Image1.png'/>
        <Card.Body>
          <h2><Card.Title>Chase Haggard</Card.Title></h2>
          <p4><Card.Text>Dept. of  Electrical and Computer Engineering</Card.Text></p4>
          <p4><Card.Text>Georgia Southern University</Card.Text></p4>
          <p4><Card.Text>Statesboro, USA</Card.Text></p4>
        </Card.Body>
        <Card.Footer>
        <Card.Text className='email'><a href="mailto:ch29174@georgiasouthern.edu">Send Email</a></Card.Text>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src='./images/Image3.png'/>
        <Card.Body>
        <h2><Card.Title>Joyel Brimidge </Card.Title></h2>
        <p4><Card.Text>Dept. of  Electrical and Computer Engineering</Card.Text></p4>
        <p4><Card.Text>Georgia Southern University</Card.Text></p4>
        <p4><Card.Text>Statesboro, USA</Card.Text></p4>
        </Card.Body>
        <Card.Footer>
        <Card.Text className='email'><a href="mailto:jb52788@georgiasouthern.edu">Send Email</a></Card.Text>
        </Card.Footer>
      </Card>
      <Card >
        <Card.Img variant="top" src="./images/Image2.png"/>
        <Card.Body>
        <h2><Card.Title className='textheader'>Rayan Alhabardi</Card.Title></h2>
        <p4><Card.Text>Dept. of  Electrical and Computer Engineering</Card.Text></p4>
        <p4><Card.Text>Georgia Southern University</Card.Text></p4>
        <p4><Card.Text>Statesboro, USA</Card.Text></p4>
        </Card.Body>
        <Card.Footer>
        <Card.Text className='email'><a href="mailto:ra0787@georgiasouthern.edu">Send Email</a></Card.Text>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default AboutUs;