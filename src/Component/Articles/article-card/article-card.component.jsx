import React from 'react';
import { Grid } from 'semantic-ui-react'
import './article-card.styles.scss';

export const Card = (props) => (
  <Grid.Column mobile={16} tablet={8} computer={4} className ='card-container'>
    
    <h2>{props.article.title}</h2>
    
  </Grid.Column>
);