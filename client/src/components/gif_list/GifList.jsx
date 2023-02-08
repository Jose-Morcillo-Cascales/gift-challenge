import { useQuery } from '@tanstack/react-query';
import fetchKey from '../../api/fetchKey';

const GifList = () => {
    const {data, status} =useQuery(["gifts","gifts"],async () => {
           return await fetchKey("gifts")
    })
    console.log(data)
  return (
    <>
        {data?.gifts.map(gift =>{
            return <img key ={gift.id} src={gift.file.url}/>
        })}
    </>
    
    
  )
}

export default GifList