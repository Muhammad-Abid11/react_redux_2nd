const set_data = (data) => {
    return (dispatch) => {
        // console.log("Hello from action")
        dispatch(           //anything pass from it receive in every reducers Action
            {
                type: "SetDAta",
                data: data,
            }
        )
    }
}
export {
    set_data,
} 