const fetchCreateGif = async (gif, token) => {
    console.log(gif)
    console.log(token)
    try {
        
        const formData = new FormData()

        formData.append('file', gif.file[0])
        formData.append('name', gif.name)
        formData.append('ownership', gif.ownership)
        formData.append('moods', gif.moods)

        const options = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData,
        }
        
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/gifts`, options)
        const data = await res.json()
        console.log('gif successfully created:', data)
        return data
    } catch (error) {
        console.log(error.message)
        console.warn('An error occurred when creating the gif');

    }
}

export default fetchCreateGif