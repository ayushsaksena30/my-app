<script>
	import '../app.css';
	import LeftPanel from '../lib/components/LeftPanel.svelte';
</script>

<svelte:head>
	<title>Ayush Saksena</title>
	<meta name="description" content="Personal website showcasing experience, projects, and skills" />
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<div class="flex">
		<div class="w-1/3 bg-white border-r border-gray-200 fixed h-screen overflow-y-auto">
			<LeftPanel />
		</div>

		<div class="w-2/3 ml-1/3">
		</div>
	</div>
</div>