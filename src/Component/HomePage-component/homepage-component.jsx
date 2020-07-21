import React, {Component} from 'react';
import { SearchBox } from './../search-box/search-box-component';
import { previewImages } from './../Preview-Images/preview-images-component';


class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      articles : [],
      searchField: '',
      title: '',
      preview: ''
    };

  }
  componentDidMount() {

  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value,
    
    });
  
  }
  render() {
    const { articles, searchField } = this.state;
    const filteredArticles = articles.filter(article => 
     article.title.toLowerCase().includes(searchField.toLowerCase())
     )
   return (
     <div className="HomePage">
       <h1> Backyard Garage </h1>
             <SearchBox
       placeholder='search articles'
       handlechange={this.handleChange}
       />
  {/* passing down the filtered list of articles from the search box to be re rendered */}
       <previewImages articles = {filteredArticles}/>      
  
       
 
 
     </div>
   );
   }

}

export default Homepage;