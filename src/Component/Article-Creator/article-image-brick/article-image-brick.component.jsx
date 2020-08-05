import React from 'react';
import { Grid, Card, Image} from 'semantic-ui-react'
import './article-image-brick.styles.scss';

export const ArticleImageBrick = (props) => (
  <Grid.Column mobile={8} tablet={6} computer={4} className ='card-container'>
    <Card>
        <Image src={props.image}/>
    </Card>
  </Grid.Column>
);