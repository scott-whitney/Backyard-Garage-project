import React from 'react';
import { Card, Icon, Image, Grid, Table, Menu, Label } from "semantic-ui-react";
import './article-shop-space.styles.scss';
import { ArticleCreator } from './../../../Component/Article-Creator/Article-Creator/article-creator.component.jsx';
import ARTICLE_DATA from '../../Articles/article.data';

class ShopSpace extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: ARTICLE_DATA,
      articleId: 0,
      currentArticle: {},
    };
  }
  componentDidMount() {
      const url = window.location.href
      const _id = url[url.length - 1]

      this.setState({
        articleId: _id,
      })


      const articlesList = this.state.articles;
      const selectedArticle = articlesList[_id]
  
      this.setState({
        currentArticle: selectedArticle
      })

      
  }

 


  

  render() {
    const selectedArticle = this.state.articles[this.state.articleId]
    return (


      <Grid>
        <Grid.Row>
          <Grid.Column>
          <h2>
        {selectedArticle.title}
          </h2>
          </Grid.Column>
        </Grid.Row>
        <ArticleCreator selectedArticle={selectedArticle}/>

        
      </Grid>




  
    )
  }


} 


  

export default ShopSpace;