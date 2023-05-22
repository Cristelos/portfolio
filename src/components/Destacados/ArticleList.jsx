import { motion } from "framer-motion";
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
                <motion.div className='article-conteiner' key={article.id}
                initial={{
                    scale: 0.5,
                    opacity: 0 }}
                transition={{
                    ease: "easeOut",
                    duration: 1.5
                }}
                animate={{
                    scale: 1,
                    opacity: 100 }}
                >
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
                </motion.div>
            ))}
            
        </div>
        {expShown < articles.length && (
                    <button className='btn-seeMore' onClick={addMore}> Mostrar más </button>
                    )}
        
    </>
  )
}
