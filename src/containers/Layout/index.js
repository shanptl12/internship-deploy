import Layout from './Layout'
import { connect } from 'react-redux'

const mapStateToProps = ({ runtime })=> {
  return {
    sidebarOpen: runtime.sidebarOpen
  }
}


export default connect(mapStateToProps)(Layout)
