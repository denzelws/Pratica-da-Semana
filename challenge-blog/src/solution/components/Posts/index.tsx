import { useEffect, useState } from 'react'
import Post, { PostProp } from '../Post/index.tsx'
import './styles.css'

const url = 'https://jsonplaceholder.typicode.com'
const limit = '_limit=20'

const Posts = () => {
  const [data, setData] = useState<PostProp[]>([])

  const fetchData = async () => {
    const response = await fetch(`${url}/posts?${limit}`)
    const data = await response.json()
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
  <>
    <span className='title'>
      THE BLOG
    </span>

    <div className='posts'>
      <Post postData={data} setPostData={setData} />
    </div>

    {data.length === 0 && (
      <div className='refresh-button-container'>
          <button onClick={() => fetchData()}>Refresh</button>
      </div>
    )}
  </>
)}

export default Posts