import React from 'react';
import { Grid, Card} from 'semantic-ui-react'
import './article-text-brick.styles.scss';

export const ArticleTextBrick = (props) => (
  <Grid.Column mobile={8} tablet={6} computer={4} className ='card-container'>
    <Card>
      <Card.Description>
        {props.paragraph}
      </Card.Description>
    </Card>
  </Grid.Column>
);