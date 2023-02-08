const logout = (state) => {
    sessionStorage.removeItem('user');
    state.user = {}
}

export default logout