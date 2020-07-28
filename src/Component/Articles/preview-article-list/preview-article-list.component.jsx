import React from 'react';

import './preview-article-card.styles.scss';

export const CardList = (props) => (
  <div className ='card-list'>
    {props.articles.map(article => (
      <Card key={article.id} article={article}/>
    ))}

  </div>
);