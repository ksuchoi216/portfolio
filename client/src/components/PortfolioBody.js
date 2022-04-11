import React from 'react'
import PortfolioData from '../data/portfolioData'

export default function PortfolioBody() {
  const [data, setData] = React.useState(PortfolioData.data)
  const cards = data

  const fetchFromData = (data) => {
    console.log(data);
    
    for (const item of data) {
      
    }
  }


  const portfolioCards = cards.map((card) => {
    return (
      <div class="d-flex ">
        <img src={card.imgPath} alt="project image"></img>
        <div>
          <p>{card.title}</p>
          <p>{card.content}</p>
          <p>{card.skills}</p>
          <a href={card.githublink}></a>
        </div>
      </div>
    )
  })

  return (
    <div>
      {portfolioCards}
    </div>
  )
}