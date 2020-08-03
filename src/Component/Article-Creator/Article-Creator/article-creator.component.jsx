import React from 'react';
import { Grid } from 'semantic-ui-react'
import './article-creator.styles.scss'
import { ArticleImageBrick } from './../article-image-brick/article-image-brick.component';

export const ArticleCreator = (props) => (
  <Grid.Row className ='article-creation'>
    {props.selectedArticle.bodyParagraphs.map(brick => (


          <ArticleImageBrick key={brick.id} paragraph={brick.paragraph} image={brick.image}/>



      

  
        

    ))}

  </Grid.Row>
);