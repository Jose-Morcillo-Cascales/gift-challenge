const logout = (state) => {
    sessionStorage.removeItem('user');
    state.user = { isLogged: false}
}

export default logout