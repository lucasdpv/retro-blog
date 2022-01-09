import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://i.pinimg.com/736x/cf/f2/fb/cff2fb94ac7ccacf3cdb61e6a9c6f1d2.jpg"
                alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet.</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A quas mollitia sint! Magnam, quibusdam
                accusantium?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A quas mollitia sint! Magnam, quibusdam
                accusantium?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A quas mollitia sint! Magnam, quibusdam
                accusantium?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A quas mollitia sint! Magnam, quibusdam
                accusantium?
            </p>
        </div>
    )
}
