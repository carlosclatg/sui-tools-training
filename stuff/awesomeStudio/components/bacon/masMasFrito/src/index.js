import React, {Component} from 'react'
import PropTypes from 'prop-types'

class BaconMasMasFrito extends Component {
  render() {
    return (
      <div className="sktest-BaconMasMasFrito">
        <h1>
          BaconMasMasFrito a un grado de fritura de {this.props.gradoDeFritura}
        </h1>
      </div>
    )
  }
}

BaconMasMasFrito.displayName = 'BaconMasMasFrito'

// Remove these comments if you need
// BaconMasMasFrito.contextTypes = {i18n: PropTypes.object}
BaconMasMasFrito.propTypes = {
  gradoDeFritura: PropTypes.number.isRequired
}
// BaconMasMasFrito.defaultProps = {}

export default BaconMasMasFrito
