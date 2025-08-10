<script>
  export let onNavigate = () => {};
  const handleNavigate = () => {
    onNavigate();
  };
</script>

<div class="p-8">
	<div class="mb-6 text-center">
		<div class="w-20 h-20 mx-auto mb-4">
			<img src="/images/logos/logo.jpg" alt="Ayush Saksena" class="w-full h-full rounded-full object-cover" />
		</div>
		<h1 class="text-2xl font-bold text-gray-900 mb-2">Ayush Saksena</h1>
		<p class="text-gray-600 text-md mb-2">Lucknow, India</p>
    <a href="mailto:asaksena100@gmail.com" class="text-gray-600 text-md mb-2 underline hover:text-gray-900">
      asaksena100@gmail.com
    </a>
	</div>

	<div class="mb-8 text-center">
		<p class="text-gray-700 text-md leading-relaxed">
			Hey, I am Software Developer with interest in Web3, Android, ML.
		</p>
	</div>

	<div class="mb-8 pb-6 border-b border-gray-100">
		<div class="grid grid-cols-2 xl:grid-cols-4 gap-2 xl:gap-4 justify-items-center">
			<a 
				href="https://leetcode.com/ayushsaksena" 
				target="_blank" 
				rel="noopener noreferrer"
				class="flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-md transition-colors"
			>
				<img src="/images/icons/leetcode.svg" alt="LeetCode" class="w-4 h-4" />
				<span class="text-md">LeetCode</span>
			</a>
			
			<a 
				href="https://github.com/ayushsaksena30" 
				target="_blank" 
				rel="noopener noreferrer"
				class="flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-md transition-colors"
			>
				<img src="/images/icons/github.svg" alt="GitHub" class="w-4 h-4" />
				<span class="text-sm">GitHub</span>
			</a>
			
			<a 
				href="https://linkedin.com/in/ayush-saksena" 
				target="_blank" 
				rel="noopener noreferrer"
				class="flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-md transition-colors"
			>
				<img src="/images/icons/linkedin.svg" alt="LinkedIn" class="w-4 h-4" />
				<span class="text-md">LinkedIn</span>
			</a>

			<a 
				href="http://discordapp.com/users/westernxyz" 
				target="_blank" 
				rel="noopener noreferrer"
				class="flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-md transition-colors"
			>
				<img src="/images/icons/discord.svg" alt="Discord" class="w-4 h-4" />
				<span class="text-md">Discord</span>
			</a>
		</div>
	</div>

	<div class="mb-8">
		<h3 class="text-md font-semibold text-gray-900 mb-4">Navigation</h3>
		<nav class="space-y-2">
      <a href="#about" on:click={handleNavigate} class="block text-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-md transition-colors">About</a>
      <a href="#experience" on:click={handleNavigate} class="block text-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-md transition-colors">Experience</a>
      <a href="#tech-stack" on:click={handleNavigate} class="block text-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-md transition-colors">Tech Stack</a>
      <a href="#projects" on:click={handleNavigate} class="block text-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-md transition-colors">Projects</a>
      <a href="#resume" on:click={handleNavigate} class="block text-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-md transition-colors">Resume</a>
      <a href="#contact" on:click={handleNavigate} class="block text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-md transition-colors">Contact</a>
		</nav>
	</div>
</div>