import React, { useState } from 'react'
import './Destacados.scss'
import { ButtonList } from './ButtonList'
import { ArticleList } from './ArticleList'
import data from '../../data/data'

export const Destacados = () => {

  const allCategories = ['All',...new Set(data.map(article => article.category))];

  const [categories] = useState(allCategories)
  const [articles, setArticles] = useState(data)

  const filterCategory = (category) => {
    if(category === "All"){
      setArticles(data)
      return
    }

    const filteredData = data.filter(article => article.category === category);
    setArticles(filteredData);
  }

  return (
    <>
    <section className='destacados'>
      <h3 className='destacados_title'>Trabajos <br/> destacados</h3>
      <div className='destacados_box'>
        <div>
          <ButtonList categories={categories} filterCategory={filterCategory}/>
        </div>
        <div className='destacados_articles'>
          <ArticleList articles={articles}/>
        </div>
      </div>
    </section>
    </>
  )
}
