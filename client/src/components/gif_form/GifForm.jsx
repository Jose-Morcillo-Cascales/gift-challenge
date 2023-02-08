import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import fetchCreateGif from '../../api/fetchCreateGif'
import { UPDATE } from '../../redux/features/user_data/userSlice'

const GifForm = () => {
  const { getAccessTokenSilently} = useAuth0()
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [uploadType, setUploadType] = useState('')
  const id = useSelector((state) => state.userData.user._id);
  const [gifData,setGifData] = useState({
    name:'',
    moods:'',
    file:'',
    ownership:id,
  })
  const createGif = async (data) =>{
    const newGift = {...gifData}
    newGift.name=data.name
    newGift.moods=data.moods
    const type = typeof(data.file)
    console.log(type)
    type ==="string"?newGift.file=[data.file] : newGift.file=data.file
    setGifData({
      ...newGift
    })
    const token = await getAccessTokenSilently()
    const gift = await fetchCreateGif(gifData,token)
    dispatch(UPDATE(gift.updatedUser))
  }
  
  return (
    <form onSubmit = {handleSubmit(data=>createGif(data))}>
      <label>Name</label>
      <input
        type="text"
        placeholder="insert name"
        required
        {
        ...register('name', {
          required: true
        })
        }
      />
      {(watch("name")?.length > 20 || watch("name")?.length < 2) && <p>Please enter a valid name</p>}
      <label>Mood</label>
      <input
        type="text"
        placeholder="insert moods"
        {
        ...register('moods', {
          required: true
        })
        }
      />
      {(watch("mood")?.length > 20 || watch("mood")?.length < 2) && <p>Please enter a valid mood</p>}
      <button type="button" onClick={() => setUploadType(prev => prev = 'file')}>upload File</button>
      <button type="button" onClick={() => setUploadType(prev => prev = 'url')}>Insert Url</button>
      {uploadType === 'file' ?
        <>
          <input type='file'
            {...register('file', {
              required: false
            })}
          />
          <button type="submit" disabled={(watch("file") === undefined) || (watch("file").length === 0)}>Upload Gif with file</button>
        </>

        :
        uploadType === 'url' ?
          <>
            <input type='text'
              {...register('file', {
                required: false
              })}
            />
            <button type="submit" disabled={(watch("file") === undefined) || (watch("file").length === 0)}>Upload Gif with url</button>
          </>
          :
          <h1>Choose an option</h1>}

    </form>
  )
}

export default GifForm