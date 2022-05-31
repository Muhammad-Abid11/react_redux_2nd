// store 

const Initial_data = {
    name: "red_Sajid",
}

export default (state = Initial_data, action) => {
    console.log("action from reducer==>", action)
    return state;
}