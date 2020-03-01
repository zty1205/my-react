
import React from 'react';
import { Link } from 'react-router-dom'
import './index.css';

export default class index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      route: [{
          name: 'Gerber',
          path: '/gerber'
        }
      ]
    }
  }
  goLink(path) {
    console.log('this = ', this)
    console.log('route = ', this.$route)
    console.log('route = ', this.props.history)
    this.props.history.push(path)
  }
  render() {
    return (
      <div className="container">
        <h2 className="title">
          首页
        </h2>
        <ul className="route-list">
          {
            this.state.route.map(rou => 
              <li key={rou.name}>
                <Link to={`${rou.path}`}>{rou.name}</Link>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}
