import { Link } from 'react-router-dom';

import { useCustomDate } from '../../customHooks/date.hook';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea, CardActions } from '@mui/material';

import './CardItem.scss'
import "@fontsource/montserrat"

import CalendarIcon from '../../img/calendar-icon.png'
import Arrow from '../../img/Arrow.png'

import Highlighter from "react-highlight-words";





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

  const {day,month,year,daySuffix} = useCustomDate(date)

    return (
      <Card className='card' sx={{ maxWidth: 400, width:'full'}}>
        <Link to={`/acticles/${id}`}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="217"
              image={image}
              alt="thumbnail image"
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
              <img src={Arrow} alt="arrow" />
          </Link>
        </CardActions>
      </Card>
    );
  }