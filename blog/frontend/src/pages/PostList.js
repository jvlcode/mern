import Post from "../components/Post";
import {useEffect, useState} from 'react';
import axios from 'axios';

export default function PostList() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:8000/api/posts')
        setPosts(response.data);
    }


    useEffect(() => {
        fetchPosts();
    }, [])



    return <>

	<main>
		<div class="container mt-4">
			<div class="row">
				<div class="col-lg-8">
					<h1 class="mb-4">Latest Posts</h1>
                    {
                        posts.length > 0 ? posts.map((post) => <Post post={post} />) : <h4>No posts available</h4>
                    }
				</div>
				<div class="col-lg-4">
					<div class="card mb-4">
						<div class="card-body">
							<h5 class="card-title">About Me</h5>
							<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</div>
					</div>

					<div class="card mb-4">
						<div class="card-body">
							<h5 class="card-title">Categories</h5>
							<ul class="list-group">
								<li class="list-group-item"><a href="#" class="text-black">Category 1</a></li>
								<li class="list-group-item"><a href="#"  class="text-black">Category 2</a></li>
								<li class="list-group-item"><a href="#"  class="text-black">Category 3</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
        </div>
	</main>

    </>
}