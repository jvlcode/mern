export default function PostDetail() {
    return  <main class="container my-4">
    <div class="row">
        <article class="col-lg-8">
            <h2 class="blog-post-title">Blog Post Title</h2>
            <p class="blog-post-meta">January 1, 2024 by <a href="#">Author</a></p>

            <div class="blog-post-content">
                <p>This is where your blog post content goes. You can write your content here and format it as needed.</p>
                <p>You can include text, images, videos, and any other media that enriches your blog post.</p>
            </div>

         

          
        </article>

        <aside class="col-lg-4">
            <div class="p-4 bg-light">
                <h3 class="mb-4">Related Posts</h3>

                <div class="mb-4">
                    <div class="row align-items-center">
                        <div class="col-auto">
                            <img src="https://via.placeholder.com/100" class="img-fluid rounded" alt="Related Post Image" />
                        </div>
                        <div class="col">
                            <h4><a href="#" class="text-decoration-none">Related Post Title 1</a></h4>
                            <p>Short description or excerpt of the related post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>

                <div class="mb-4">
                    <div class="row align-items-center">
                        <div class="col-auto">
                            <img src="https://via.placeholder.com/100" class="img-fluid rounded" alt="Related Post Image" />
                        </div>
                        <div class="col">
                            <h4><a href="#" class="text-decoration-none">Related Post Title 2</a></h4>
                            <p>Short description or excerpt of the related post. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    </div>
</main>
}