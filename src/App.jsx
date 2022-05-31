import React from "react"
import { connect } from 'react-redux';  //method
class App extends React.Component {
  render() {
    console.log("redux===>", this.props)
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Hello React Redux`</h1>

        <button onClick={() => this.props.data_set()}>SetData dispatch Function</button>
      </div>
    )
  }
}

// mapStateToProps  
//  it contains values 


const mapStateToProps = (state) => (  //function
  {                                 // return Oject save it to initial state
    wel: "Hello Abid from mapState",
    name: state.reducer.name,
    Application_Name: state.app.app_name,
    UserName: state.auth.username,
    Email: state.auth.email,
  }
)

// for state Update USE   "mapDispatchToProps"
//  it contains functions 
const mapDispatchToProps = (dispatch) => (  //function
  {                                         //object
    data_set: () => {           //object_function
      console.log("hello Dispatch")
    }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
