import { Link } from "react-router-dom"
import { GifForm } from "../components"

const GifUpload = () => {
  return (
    <>
    <div>GifUpload</div>
    <GifForm />
    <Link to="/">Back</Link>
    </>
  )
}

export default GifUpload