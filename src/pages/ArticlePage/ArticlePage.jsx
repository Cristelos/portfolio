import React, { useEffect, useState } from 'react'
import { Nav } from '../../components/Header/Nav'
import { Footer } from '../../components/Footer/Footer'
import { Contact } from '../../components/Contact/Contact'
import { useParams } from 'react-router-dom'
import data from '../../data/data'
import './ArticlePage.scss'
// import axios from 'axios';

export const ArticlePage = () => {

    // const idArticle = [...new Set(data.map(article => article.id))];

    const {id} = useParams();

    const [details, setDetails] = useState({});

    console.log(id);
    
    const getArticleById = () => {
      const article = data.find((article) => article.id === parseInt(id));
      if (article) {
        console.log(article);
        setDetails({ ...article });
      }
    };    

    useEffect(() => {
      getArticleById(id);
    },[id])
    
  return (
    <>
        <Nav/>
        <section className='article'>
          <img src={details.image} alt={details.title} className='article_cover'/>
          <div className='boxs'>
            <div className='box'>
              <img src={details.image} alt={details.title} className='article_img'/>
            </div>
            <div className='box'>
              <h2>{details.title}</h2>
              <p className='date'>{details.date}</p>
              <p>{details.description}</p>
              <a href={details.url}><button className='btn'>Ver más</button></a>
            </div>
          </div>
        </section>
        <Contact/>
        <Footer/>
    </>
  )
}
