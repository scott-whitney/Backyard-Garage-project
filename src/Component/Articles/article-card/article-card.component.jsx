import React from 'react';
import { Grid } from 'semantic-ui-react'

import { Link } from 'react-router-dom';
import './article-card.styles.scss';

export const Card = (props) => (
  <Grid.Column mobile={16} tablet={8} computer={4} className ='card-container'>
    <Link to={props.article.link}>
    
    <h2>{props.article.title}</h2>
    
    </Link>
    
    
  </Grid.Column>
);