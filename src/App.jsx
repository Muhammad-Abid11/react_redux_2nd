import React from "react"
import { connect } from 'react-redux';  //method
import { set_data } from './store/action/index'
class App extends React.Component {
  render() {
    console.log("redux===>", this.props)
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Hello React Redux`</h1>

        <button onClick={() => this.props.data_set("Data from App.jsx")}>SetData dispatch Function</button>
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
    data_set: (data) =>           //return_function_onclick
      // console.log("hello Dispatch")
      // set_data()      //from action 
      dispatch(set_data(data))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
