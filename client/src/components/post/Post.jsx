import { Link } from "react-router-dom"
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
                    <span className="postCat">
                        <Link className="link" to="/posts?cat=Music">Music</Link>
                    </span>
                    <span className="postCat">
                        <Link className="link" to="/posts?cat=Life">Life</Link>
                    </span>
                </div>
                <span className="postTitle">
                    <Link className="link" to="/post/abc">Lorem ipsum dolor sit amet.</Link>
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?
            </p>
        </div>
    )
}
