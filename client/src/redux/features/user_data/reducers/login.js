const login = (state, action) => {
    const loggedUser = {
        ...action.payload
    }
    sessionStorage.setItem('user', JSON.stringify(loggedUser));
    state.user = { ...loggedUser };
}

export default login