import React from 'react';
import './article-card.styles.scss';

export const Card = (props) => (
  <div className ='card-container'>
    
    <h2>{props.article.title}</h2>
    
  </div>
);