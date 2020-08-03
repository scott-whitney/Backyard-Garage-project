import React from 'react';
import { Card, Icon, Image, Grid, Table, Menu, Label } from "semantic-ui-react";
import './article-shop-space.styles.scss';
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

      <div className='shop-space'>
      <div className='title'>
        <h2>{selectedArticle.title}</h2>
        <span>nothings stopping you, well...except everything you can think of (Template for Basic Recycled Article)</span>
      </div>
      <div className='hero-image'>
  
      </div>
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Image className='article-image' alt='article' src={selectedArticle.previewImage} />
            <Card>
              <Card.Header></Card.Header>
              <Card.Meta></Card.Meta>
              <Card.Description></Card.Description>
            </Card>
          </Grid.Column>
          <Grid.Column>
  
          </Grid.Column>
        </Grid.Row>
  
        <Grid.Row>
          <Grid.Column>
  
          </Grid.Column>
        </Grid.Row>
  
  
  
  
  
  
      </Grid>
    </div>
  
  
  
  
      <div className='article-body-paragraphs'>
      <p> 
        Probably the biggest problem facing anyone wanting to build a car will be, where? Space is at a premium? When you're a kid living with your parents this problem is even more persistent.
        Unless you can afford to rent out a shop or your parents have spare space in their garage you need to start looking else where. That elsewhere for me was the backyard. Now not everyone will have the same space available this is just to help you start thinking about how you can repurpose a space for yourself.
      </p>
      <p>
        Behind my parents house when they bought it was a half court set up on a roughy twenty five by twenty five foot slab of concrete with a basketball hoop. It was perfect for my intentions minus a few obvious obstacles.
      </p>
      <p>
        The first of which was simply, it's outside! luckily the California weather allows me to ignore this to some point. It will never be so hot outside that I can't power through the sweat and never too cold that I couldn't bundle up and keep working. The only real issue was the elements such as rain interfering with my build.
        Nobody wants to watch their car rust while they're in the process of building it. 
      </p>
      <p>
        Luckily this coud be solved through a tent harbor freight sells called their 20ft by 10ft portable garage. It's really just a glorified tarp with some tubing. Actually it's just a tarp and some tubing. Still - enough.
      </p>
      <p>
        Now the tarp itself did survive almost a year and a half before sucumbing to the wind. But the tarp is easy to replace. The tubes remained in fairly good condition.
      </p>
      <p>
        the second problem was that the workspace i'd chosen was infact behind the house and nowhere near the road. There is a dirt path leading around the side of the house just barely wide enough for a small car but this path lead right up to a wooden fence. There was a gate but it was barely big enough for a city distributed trash bin to be wheeled through, certainly not big enough for a car.
      </p>
      <p>
        This is where having that art degree I got was finally going to pay off. Not the degree itself, but the connections I'd gained while attending there. The college luckily had a furniture and architecture department some of whom's members I was still close with. I called one of them up and we set about designing and building an extension to the gate which would allow me enough room to bring a car
        into my shop space.
      </p>
      <p>
        I left most of the details up to them since I'm not an architect and just helped them in anyway I could such as building the metal bracets that would hold the gate in tension while swung open. It would have to be strong and yet light enough to swing out over the edge of a small hill on the side of the house that lead to the court below. The last thing i wanted was to have the gate blow away in the wind into the street.
      </p>
      <p>
        once this was built I was left with the final obstacle. A one foot high step leading up to the concrete slab. With money in mind I first used some roll up jack stands from harbor freight that cost me around forty dollars. But due to the angle of entry from the gate this only worked while bringing the car into the back and wouldn't work if I wanted to drive in and out more than once so I'd need to build a ramp.
      </p>
      <p>
        in the interest of saving materials I settled on using the frame of my first project car as a surrogate to lay wood across. I welded some metal legs onto it to allow it to sit at an angle and poof a rather shoddy ramp was made. 
      </p>
      <p>
        this work wasn't all done at the same time but over the course of about a year and a half. I must admit that I started building the car the second I managed to convince my parents that I could put the space to use. I figured out how to actually get the car out of the backyard garage after I'd already built a car to excavate. 
      </p>
      </div>
      <div className='photos-projects'>
  
      </div>
    </div>
  
    )
  }


} 


  

export default ShopSpace;