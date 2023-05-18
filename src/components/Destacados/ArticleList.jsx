import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const ArticleList = ({ articles }) => {
    
    const [expShown, setExpShown] = useState(6);

    const addMore = () => {
        setExpShown(expShown + 3)
    }
    const visibleArticles = articles.slice(0, expShown);
  return (
    <>
        <div className='article-list'>
            {visibleArticles.map(article => (
                <div className='article-conteiner' key={article.id}>
                    <div className='img-container'>
                       <NavLink to={`/article/${article.id}`}><img src={article.image} alt={article.title}/></NavLink>
                    </div>
                    <div className='article-body'>
                        <h3>{article.title}</h3>
                        <div className='article-footer'>
                            <span>{article.date} · </span>
                            <span>{article.ReadingTime}</span>
                        </div>
                    </div>
                </div>
            ))}
            
        </div>
        {expShown < articles.length && (
                    <button className='btn-seeMore' onClick={addMore}> Mostrar más </button>
                    )}
        
    </>
  )
}
