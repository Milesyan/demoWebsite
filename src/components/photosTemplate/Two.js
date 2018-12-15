import React, { Component } from 'react'

type Props = {
  photo: Object,
  mode: string,
  date: String,
  text: String
}
export default class One extends Component<Props> {
  componentDidMount() {
  }
 
  render() {
    const photos = this.props.photos;
    
    return (
      <div>
      {photos.map(p=>(
        <img
          key={p.url}
          style={{ margin: 10, objectFit: 'contain', backgroundColor: '#eee'}}
          alt="nothing" src={p.url}
        />
      ))}

      </div>
    )
  }
}
