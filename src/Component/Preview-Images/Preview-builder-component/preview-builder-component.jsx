import React from 'react';

export const Card = (props) => (
  <div className ='card-container'>
    <img alt ="article" src='#'/>
    <h2>{props.article.title}</h2>
    <p>{props.article.preview}</p>
  </div>
)

