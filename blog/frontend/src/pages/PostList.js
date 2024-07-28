export default function PostList() {
    return <>
        <header>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container">
				<a class="navbar-brand" href="#">My Blog</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
					aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav ms-auto">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Posts</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">About</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>

	<main>
		<div class="container mt-4">
			<div class="row">
				<div class="col-lg-8">
					<h1 class="mb-4">Latest Posts</h1>

					<div class="card mb-4">
						<div class="row">
							<div class="col-sm-12 col-md-3">
								<img class="img-fluid h-100 card-img-top" src="https://via.placeholder.com/800x400"
									 alt="..." />
							</div>
							<div class="card-body col-md-8">
								<h5 class="card-title">Post Title 1</h5>
								<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								<a href="#" class="btn btn-primary">Read More</a>
							</div>
						</div>

					</div>

					<div class="card mb-4">
						<div class="row">
							<div class="col-sm-12 col-md-3">
								<img class="img-fluid h-100 card-img-top" src="https://via.placeholder.com/800x400"
									 alt="..." />
							</div>
							<div class="card-body col-md-8">
								<h5 class="card-title">Post Title 2</h5>
								<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								<a href="#" class="btn btn-primary">Read More</a>
							</div>
						</div>

					</div>

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

	<footer class="bg-dark text-white text-center py-3 fixed-bottom">
		<div class="container">
			<p>&copy; 2024 My Blog. All rights reserved.</p>
		</div>
	</footer>
    </>
}