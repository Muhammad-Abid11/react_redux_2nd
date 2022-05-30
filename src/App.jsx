import React from "react"
import { connect } from 'react-redux';  //method
class App extends React.Component {
  render() {
    console.log("redux===>", this.props)
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Hello React Redux`</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => (  //function
  {                                 // return Oject save it to initial state
    wel: "Hello Abid from mapState",
    name: state.name
  }
)


export default connect(mapStateToProps, null)(App);
