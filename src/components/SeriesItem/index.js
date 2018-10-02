import React from 'react'

const SeriesItem = (props) => {
  console.log(props)
  const { 
    name, 
    image, 
    summary, 
    premiered, 
    rating, 
    _embedded 
  } = props.show

  return (
    <div>
      <p>{name}</p>
      <img src={image.medium} alt="{name}"/>
      <p dangerouslySetInnerHTML={{__html: summary}} />
      <p>Premiered - {premiered}</p>
      <p>Rating - {rating.average}</p>
      <p>Episoded - {_embedded.episodes.length}</p>

    </div>

  )
}

export default SeriesItem