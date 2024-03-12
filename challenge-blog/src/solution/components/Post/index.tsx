import './styles.css'

export type PostProp = {
    id: string
    title: string
    body: string
}

type PostDataProps = {
    postData: PostProp[]
    setPostData: React.Dispatch<React.SetStateAction<PostProp[]>>
}

const Post = ({ postData, setPostData }: PostDataProps) => {
    const handleRemovePost = (id: string) => {
        const updatedData = postData.filter(post => post.id !== id)
        setPostData(updatedData)
    }

    return (
        <div className='post-wrapper'>
            <div className='post-item'>
                {postData.map(({ id, title, body }, index) => (
                    <div key={id} className={index > 0 ? 'align-right-posts' : 'posts'}>
                        <div className={`item ${index === 0 ? 'item-large' : 'item-small'}`}>
                            <img src="img-default.png" />
                            <div className='item-content'>
                                <strong>{title}</strong>
                                <p>{body}</p>
                                <button onClick={() => handleRemovePost(id)}>Delete post</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Post
