<script>
</script>

<nav class="navbar bg-base-100 border-b border-beige-300 flex-auto">
	<div class="navbar-start">
		<img src="logo.gif" alt="Logo" class="mr-4 h-12 ml-4 w-6" />
		<a href="#" class="font-mono italic font-semibold text-3xl w-full">g<u>tu forum</u></a>

		<ul class="rounded-full menu menu-horizontal px-1 mr-4">
			<li tabindex="1" class="bg-beige rounded-full">
				<a style="border-radius: 9999px;">
					topics
					<svg
						class="fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
					>
				</a>
				<ul class="p-2 bg-white">
					<li><a>siyaset</a></li>
					<li><a>ders</a></li>
					<li><a>aboooo</a></li>
					<li><a>kütüphane</a></li>
				</ul>
			</li>
		</ul>
	</div>
	<div class="form-control w-1/3 navbar-center relative">
		<input
			type="text"
			placeholder="  search for posts.."
			class="w-full bg-beige input rounded-full placeholder-gray-300 border-r pl-10"
		/>
		<span class="search-icon absolute left-3 top-1/2 transform -translate-y-1/2">
			<svg class="w-6 h-6 text-logo" fill="currentColor" viewBox="0 0 20 20"
				><path
					d="M18.707,17.293l-4.4,-4.4c1.093,-1.34 1.707,-3.031 1.707,-4.793c0,-4.418 -3.582,-8 -8,-8s-8,3.582 -8,8s3.582,8 8,8c1.762,0 3.453,-0.614 4.793,-1.707l4.4,4.4c0.391,0.391 1.023,0.391 1.414,0l1.414,-1.414c0.391,-0.391 0.391,-1.023 0,-1.414zM2,8c0,-3.309 2.691,-6 6,-6s6,2.691 6,6s-2.691,6 -6,6s-6,-2.691 -6,-6z"
				/></svg
			>
		</span>
	</div>

	<div class="navbar-end">
		<a href="#" class="mx-2"><img src="settings.png" alt="Settings" class="h-8 w-8" /></a>
		<a href="#" class="mx-2"><img src="notifications.png" alt="Notifications" class="h-8" /></a>
	</div>
	<div class="mx-2">
		<p id="username">username</p>
	</div>
	<div class="mx-2 dropdown dropdown-end">
		<label tabindex="0" class="btn btn-ghost btn-circle avatar">
			<div class="w-10 rounded-full">
				<img id="profilePhoto" src="" />
			</div>
		</label>
		<ul
			tabindex="0"
			class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
		>
			<li>
				<a class="justify-between"> Profile </a>
			</li>
			<li><a>Posts and Comments</a></li>
			<li><a>Logout</a></li>
		</ul>
	</div>
</nav>
