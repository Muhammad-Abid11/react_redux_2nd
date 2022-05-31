// store 

const Initial_data = {
    name: "redux_Sajid",
}

export default (state = Initial_data, action) => {

    console.log("action from reducer==>", action)
    switch (action.type) {      // switch to check which type data receive
        case "SetData":
            return (
                {
                    ...state,       //state=Initial_data
                    name: action.data,
                }
            )
    }
    return state;
}