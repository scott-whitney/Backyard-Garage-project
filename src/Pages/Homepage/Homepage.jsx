import React from "react";
import Hero1 from "./../../Assets/Images/Homepage-images/Home-page.image1.jpeg";
import Hero2 from "./../../Assets/Images/Homepage-images/Home-page.image2.jpeg";
import Hero3 from "./../../Assets/Images/Homepage-images/Home-page.image3.jpeg";
import Hero4 from "./../../Assets/Images/Homepage-images/Home-page.image4.jpeg";
import Hero5 from "./../../Assets/Images/Homepage-images/Home-page.image5.jpeg";
import { Card, Icon, Image, Grid, Table, Menu, Label } from "semantic-ui-react";
import "./Homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="title">
      <h2>Backyard Garage</h2>
    </div>
    <div className="hero-image">
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={5}>
            <Card>
              <Image src={Hero3} />
            </Card>
          </Grid.Column>
          <Grid.Column width={5}>
            <Card>
              <Card.Content>
                <Card.Header>
                  Before you begin
                </Card.Header>
                <Card.Meta>
                  Just so you know
                </Card.Meta>
                <Card.Description>
                  This is not a tutorial on how to build a car from scratch with no skills, tools or space. 
                  Rather think of it as a series of mistakes 
                  sprinkled with the occassional success and a dash of inginuiety that may inspire you to take a stab at your own hobby.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>



        <Grid.Row>
          <Grid.Column width={5}>
            {/* <Card>
              <Image src={Hero4} />
            </Card>
          </Grid.Column>
          <Grid.Column width={5}>
            <Card>
              <Image src={Hero5} />
            </Card>
          </Grid.Column>
          <Grid.Column width={5}>
            <Card>
              <Image src={Hero3} />
            </Card> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    <div className="introduction">
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={5}>
        


          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    <div className="photos-projects"></div>
  </div>
);

export default HomePage;
