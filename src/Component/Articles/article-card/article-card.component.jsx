import React from 'react';
import { Grid, Card, Image} from 'semantic-ui-react'

import { Link } from 'react-router-dom';
import './article-card.styles.scss';

export const CardView = (props) => (
  <Grid.Column mobile={16} tablet={8} computer={4} className ='card-container'>
    <Link to={props.article.link}>
      <Image alt='preview' src={props.article.previewImage}/>
    <Card>
      <Card.Header>{props.article.title}</Card.Header>
      <Card.Meta>Date</Card.Meta>
      <Card.Description>
        Article Description
      </Card.Description>
    </Card>

    
    </Link>
    
    
  </Grid.Column>
);