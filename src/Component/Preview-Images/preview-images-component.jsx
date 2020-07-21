import React from 'react';
import { Card } from './Preview-builder-component/preview-builder-component.jsx'

export const previewImages = (props) => (
  <div className = 'card-list'>
    {props.articles.map(article => (
      <Card key={article.id} article={article}/>
    ))}

  </div>
);
