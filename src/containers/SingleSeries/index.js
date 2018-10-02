import React, { Component } from 'react'
import Loader from '../../components/Loader'
import SeriesItem from '../../components/SeriesItem'

class SingleSeries extends Component {
  state = {
    show: null
  }

  componentDidMount() {
    const { id } = this.props.match.params
    fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then((response) => response.json())
      .then(json => this.setState({ show: json }))
  }

  render() {
    const { show } = this.state
    console.log(show)
    return (
      <div>
        { show === null && <Loader />}
        { 
          show !== null 
          && 
          <SeriesItem show={show}/>
        }
      </div>
    )
  }
}

export default SingleSeries