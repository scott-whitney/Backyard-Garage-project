import React from 'react';
import { Grid } from 'semantic-ui-react'
import './article-creator.styles.scss'
import { ArticleImageBrick } from './../article-image-brick/article-image-brick.component';
import { ArticleTextBrick } from './../article-text-brick/article-text-brick.component';

export const ArticleCreator = (props) => (
<Grid container textAlign='center' centered divided>
    {props.selectedArticle.bodyParagraphs.map(brick => (

<Grid.Row key={brick.id}>

{ !brick.image ? null : <ArticleImageBrick key={brick.id} image={brick.image}/>}
{ !brick.paragraph ? null : <ArticleTextBrick key={brick.id * 2} paragraph={brick.paragraph} /> }
</Grid.Row>


    ))}

 </Grid>
);