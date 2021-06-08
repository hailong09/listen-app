import React from 'react'
import SongItem from './SongItem';
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const SongList = ({title, items}) => {

  const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
         
        }
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
        <Container>
        <Content>
            <div>
              <h1>Your {title}</h1>
              <p>Listen Your {title}</p>
            </div>
        
          
        </Content>
        <Songscontainer>
        <Slider {...settings}>
          {items.map(item => (
            <SongItem key={item.id} item={item} title={title} />
          ))}
        </Slider>

        </Songscontainer>

      

        
      </Container> 
    )
}

export default SongList

export const Container = styled.div`
   
    margin-right: 20px;
    margin-left: 20px;
    padding: 0 40px;
    margin-bottom: 20px;

`

export const Content= styled.div`
    position: relative;
    width: 95%;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  

    h1{
      margin-bottom: 5px;
    }
    p{
      margin: 0;
    }
`

const Songscontainer = styled.div`
  .slick-slider {
    width: 95%;
  }
  
  .slick-next:before, .slick-prev:before {
    color: #000;
}

  .slick-next{
    right: 0px;
  }
  
`