import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea, CardActions } from '@mui/material';

import './CardItem.scss'
import CalendarIcon from '../../img/calendar-icon.png'
import Arrow from '../../img/Arrow.png'
import { Link } from 'react-router-dom';
import Highlighter from "react-highlight-words";

import "@fontsource/montserrat";


type CardItemProps = {
  id:number,
  title:string,
  image:string,
  description:string,
  date:string,
  searchWords:string[]
}


export default function CardItem({id,title,image,description,date,searchWords}:CardItemProps) {

  const descriptionEtc = description.length > 100 ? '...' : ''
  const titleEtc = title.length > 100 ? '...' : ''

  const shortDescription = description.slice(0,100) + descriptionEtc
  const shortTitle = title.slice(0,100) + titleEtc

  const customDate = new Date(date)

  const day = customDate.getDate();
  const month = customDate.toLocaleString('default', { month: 'long' });
  const year = customDate.getFullYear();

  const daySuffix = function(day:number) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }

    return (
      <Card className='card' sx={{ maxWidth: 400, width:'full'}}>
        <Link to={`/acticles/${id}`}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="217"
              image={image}
              alt="green iguana"
            />
            <CardContent>
              <div className='card_date'>
                <img src={CalendarIcon}/>
                {`${month} ${day}${daySuffix(day)}, ${year}`}
              </div>
              <div className='card_title'>
                <Highlighter
                    searchWords={searchWords}
                    textToHighlight={shortTitle}
                  />
              </div>
              <div className='card_description'>
                <Highlighter
                  searchWords={searchWords}
                  textToHighlight={shortDescription}
                />
              </div>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions sx={{padding:'16px', paddingBottom:0}}>
          <Link to={`/acticles/${id}`} className='card_link'>
              <p>Read more</p>
              <img src={Arrow} alt="" />
          </Link>
        </CardActions>
      </Card>
    );
  }