// store 

const Initial_data = {
    username: "Sajid",
    email: "sajid@gmail.com",
}

export default (state = Initial_data, action) => {
    console.log("action from auth==>", action)

    return state;
}