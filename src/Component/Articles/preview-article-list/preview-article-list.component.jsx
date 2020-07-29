import React from 'react';
import { Grid } from 'semantic-ui-react'
import { Card } from './../article-card/article-card.component.jsx';
import './preview-article-card.styles.scss';

export const CardList = (props) => (
  <Grid.Row className ='card-list'>
    {props.articles.map(article => (
      <Card key={article.id} article={article}/>
    ))}

  </Grid.Row>
);