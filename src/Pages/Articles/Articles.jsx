import React, { Component } from 'react';
import { SearchBox } from '../../Component/search-box/search-box-component';
import { CardList } from '../../Component/Articles/preview-article-list/preview-article-list.component';
import ARTICLE_DATA from './article.data';
import { Grid } from 'semantic-ui-react';

// import the array of article data here

class Articles extends Component {
  constructor() {
    super();
    this.state = {
      articles: ARTICLE_DATA,
      searchField: '',
      title: '',
    };
  }



  componentDidMount() {

  }
  handleChange = (e) => {
    console.log('change detected')
    this.setState({
      searchField: e.target.value,
    });
  }

  render() {
    const { articles, searchField } = this.state;
    const filteredArticles = articles.filter(article =>
      article.title.toLowerCase().includes(searchField.toLowerCase()))
      return (
        <div className='Articles'>
          <h1> Backyard Garage Articles</h1>
          <SearchBox placeholder='search articles'
          handlechange={this.handleChange}
          />
          
          <Grid container textAlign='center'  centered columns={3}>
          <CardList articles = {filteredArticles}/>
          </Grid>
          


        </div>
      );
  }


}

export default Articles;