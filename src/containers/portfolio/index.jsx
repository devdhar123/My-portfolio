import React from "react"
import { useState } from "react";
import { BsInfoCircle } from 'react-icons/bs'
import PageHaeaderContainer from "../../components/pageHeaderContainer";
import ImageOne from '../../images/Cal.png'
import ImageTwo from '../../images/coin.jpg'
import ImageThree from '../../images/expense.png'
import ImageFour from '../../images/joke.png'
import ImageFive from '../../images/real.jpg'
import ImageSix from '../../images/recipe.png'
import ImageSeven from '../../images/small.png'
import ImageEight from '../../images/todo.png'

import './style.scss'


const portfolioData = [

    {
        id: 2,
        name: "ExpenseManager",
        image: ImageThree,
         link :"https://devdhar-expense.netlify.app/"
    },
    {
        id: 2,
        name: "Todo",
        image: ImageEight,
         link :"https://dev-context-todo.netlify.app/"
    },
    {
        id: 3,
        name: "Calculator",
        image: ImageOne,
         link :"https://devdhar123.github.io/Calculator/"
    },
    {
        id: 3,
        name: "Coin-Cube-UI",
        image: ImageTwo,
         link :'https://devdhar123.github.io/Coin-Cube-Ui/'
    },
    {
        id: 3,
        name: "Joke Generator",
        image: ImageFour,
         link :'https://devdhar123.github.io/Joke-Generator/'
    },
    {
        id: 3,
        name: "Real-Estate-UI",
        image: ImageFive,
         link :'https://devdhar123.github.io/Real-Estate/'
    },
    {
        id: 3,
        name: "Reciepe",
        image: ImageSix,
         link :'https://devdhar123.github.io/Food-App/'
    },
    {
        id: 3,
        name: "Small-Brand-UI",
        image: ImageSeven,
         link :'https://devdhar123.github.io/Small-brand/'
    },
  

]


const filterData = [
    {
        filterId: 1,
        label: "All"
    },
    {
        filterId: 2,
        label: "Development"
    },
    {
        filterId: 3,
        label: "Design"
    },
]
const Portfolio = () => {

    const [filterValue , setFilterValue] =useState(1)
    const [hoverValue , setHoverValue] =useState(null)
    
    function handleFilter(currentId) {
        setFilterValue(currentId)
    } 

    function handleHover(index) {
        setHoverValue(index)       
    }
    console.log(filterValue)
     
    const filterItems = filterValue == 1 ? portfolioData :
    portfolioData.filter(item=>item.id === filterValue)
    console.log(hoverValue);

//    function handleVisit(e) {
//     e.target.portfolioData.link;
//    }
    
    return (
        <section id="portfolio" className="portfolio">
            <PageHaeaderContainer
                headerText='My Portfolio'
                icon={<BsInfoCircle size={40} />}
            />
            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                    {
                        filterData.map(item => (
                            <li className={item.filterId === filterValue? 'active' : ''} onClick={()=>handleFilter(item.filterId)} key={item.filterId}>
                                {
                                    item.label
                                }
                            </li>
                        ))
                    }
                </ul>
                <div className="portfolio__content__cards">
                       {
                        filterItems.map((item,index)=>(
                            <div key={`cardItem${item.name.trim()}`}
                             className='portfolio__content__cards__item'
                             onMouseEnter={()=>handleHover(index)}
                             onMouseLeave={()=>handleHover(null)}
                             >
                                <div className="portfolio__content__cards__item__img-wrapper">
                                    <a >
                                        <img src={item.image} alt="dummy data" />
                                    </a>
                                </div>
                                <div className="overlay">
                                    {
                                        index=== hoverValue && (
                                            <div>
                                                <p>{item.name}</p>
                                                <a className="button" href={item.link} target="_blank" >Visit</a>
                                                {/* <button variant="primary" onClick="item.link" target="_blank">Visit</button> */}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                       }
                </div>

            </div>
        </section>
    )
}
export default Portfolio;