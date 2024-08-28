// we create a component that child state can change parent state using sitter function.

import React, { Component } from 'react'
import Dispaly from './Display'
export default class OneWayTraffic extends Component {
  render() {
    return (
      <div>
        <Dispaly />
      </div>
    )
  }
}
