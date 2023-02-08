
const fetchKey = async (key) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/${key}`, {
            
        })
        return res.json();

    } catch (e) {
        console.log(`Fail fetching ${key}`)
    }
}

export default fetchKey