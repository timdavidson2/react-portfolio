import React, { useEffect } from "react";

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import image1 from "../images/weatherApp.png"
import image2 from "../images/musicMatcher.jpeg"
import image3 from "../images/progressiveBudget.png"

import "../styles/Portfolio.css";




function Portfolio() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return <>
    <div className="container">
      <div className="portfolio-heading-wrapper my-5">
        <h1>Portfolio Page</h1> <p className="portfolio-heading-text">Please find examples of app that I have created both individually and with teams.</p>
      </div>

      <Card className="card m-2" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image1} />
        <Card.Body>
          <Card.Title>Weather Dashboard</Card.Title>
          <Card.Text>
            Simply put in a city and this app will return current weather and a 5 day forecast.
          </Card.Text>
          <Card.Text>GitHub: https://github.com/timdavidson2/06-weather-dashboard</Card.Text>
          <Button href="https://timdavidson2.github.io/06-weather-dashboard/" target="_blank" variant="primary">Visit Weather Dashboard</Button>
        </Card.Body>
      </Card>
      <Card className="card m-2" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image2} />
        <Card.Body>
          <Card.Title>Music Matcher</Card.Title>
          <Card.Text>
            Search for artists that are in the same genre as you like to listen to.
          </Card.Text>
          <Card.Text>GitHub: https://github.com/timdavidson2/musicMatcher</Card.Text>
          <Button href="https://timdavidson2.github.io/musicMatcher/" target="_blank" variant="primary">Visit Music Matcher</Button>
        </Card.Body>
      </Card>
      <Card className="card m-2" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image3} height="157px" />
        <Card.Body>
          <Card.Title>Progressive Budget</Card.Title>
          <Card.Text>
            Use this to track income and expenses when traveling.
          </Card.Text>
          <Card.Text>
            GitHub: https://github.com/timdavidson2/progressive-budget
          </Card.Text>
          <Button href="https://evening-savannah-22284.herokuapp.com/" target="_blank" variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      {/* 
      <Card className="card m-2" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="card m-2" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="card m-2" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="card m-2" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
    </div>






  </>;
}

export default Portfolio;

