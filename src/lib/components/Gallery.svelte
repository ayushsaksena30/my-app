<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	interface GalleryItem {
		filename: string;
		type: 'image' | 'video';
		location?: string;
	}

	const assetBaseUrl = 'https://gallery-shield.asaksena100.workers.dev/';

	let items: GalleryItem[] = [];
	let isLoading = true;
	let errorMessage = '';
	let isWallOpen = false;
	let previousBodyOverflow = '';

	onMount(() => {
		void loadGallery();
	});

	async function loadGallery(): Promise<void> {
		try {
			const response = await fetch('/api/gallery');
			if (!response.ok) {
				throw new Error(`Gallery request failed with status ${response.status}`);
			}

			items = await response.json();
			isLoading = false;
		} catch (error) {
			console.error('Error fetching gallery:', error);
			errorMessage = 'The gallery could not be loaded. Please try again later.';
			isLoading = false;
		}
	}

	onDestroy(() => {
		if (isWallOpen) {
			document.body.style.overflow = previousBodyOverflow;
		}
	});

	function mediaUrl(filename: string): string {
		return (
			assetBaseUrl +
			filename
				.split('/')
				.map((part) => encodeURIComponent(part))
				.join('/')
		);
	}

	function openWall(): void {
		if (isWallOpen) return;
		previousBodyOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		isWallOpen = true;
	}

	function closeWall(): void {
		isWallOpen = false;
		document.body.style.overflow = previousBodyOverflow;
	}

	function lazyVideo(
		node: HTMLVideoElement,
		isOpen: boolean
	): { update: (nextIsOpen: boolean) => void; destroy: () => void } {
		let wallIsOpen = isOpen;
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting && wallIsOpen) {
						node.preload = 'metadata';
						void node.play().catch(() => {});
					} else {
						node.pause();
						node.preload = 'none';
					}
				}
			},
			{ rootMargin: '100px' }
		);

		node.muted = true;
		node.preload = 'none';
		observer.observe(node);

		return {
			update(nextIsOpen) {
				wallIsOpen = nextIsOpen;
				observer.unobserve(node);
				observer.observe(node);
			},
			destroy() {
				observer.disconnect();
				node.pause();
			}
		};
	}
</script>

<button
	type="button"
	class="fixed right-5 top-5 z-40 inline-flex items-center gap-2 rounded-2xl border border-gray-200/80 bg-white/85 px-4 py-2.5 text-sm font-medium text-gray-800 shadow-lg shadow-black/5 backdrop-blur-md transition hover:bg-white hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700 md:right-8 md:top-8"
	aria-label="Open photo wall"
	on:click={openWall}
>
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" class="h-4 w-4">
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5z"
		/>
		<circle cx="9" cy="10" r="1.25" />
		<path stroke-linecap="round" stroke-linejoin="round" d="m5 17 4.5-4 3 2.5 2.5-2 4 3" />
	</svg>
	Random moments
</button>

<div
	class={`fixed inset-0 z-50 overflow-y-auto bg-black/75 text-white backdrop-blur-md transition-opacity duration-200 ${isWallOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
	aria-hidden={!isWallOpen}
	inert={!isWallOpen}
	role="presentation"
	on:click={(event) => {
		if (event.target === event.currentTarget) closeWall();
	}}
>
	<div class="mx-auto min-h-full w-full max-w-6xl px-4 py-8">
		<header class="mb-6 flex items-center justify-between">
			<h2 class="text-2xl font-semibold tracking-tight text-white">random moments</h2>
			<button
				type="button"
				class="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white shadow-lg backdrop-blur-md transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
				aria-label="Close photo wall"
				on:click={closeWall}
			>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.7"
					class="h-5 w-5"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6 6 18" />
				</svg>
			</button>
		</header>
		{#if isLoading}
			<p class="py-20 text-center text-sm text-white/70">Loading photos...</p>
		{:else if errorMessage}
			<p
				class="mx-auto max-w-lg rounded-xl border border-white/15 bg-white/5 px-5 py-6 text-center text-sm text-white/80"
			>
				{errorMessage}
			</p>
		{:else if items.length === 0}
			<p class="py-20 text-center text-sm text-white/70">There are no moments to show just yet.</p>
		{:else}
			<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
				{#each items as item (item.filename)}
					<div
						class="group relative aspect-square overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
					>
						{#if item.type === 'video'}
							<!-- svelte-ignore a11y_media_has_caption: Gallery videos are muted visual previews. -->
							<video
								src={mediaUrl(item.filename)}
								preload="none"
								playsinline
								muted
								loop
								crossorigin="anonymous"
								class="pointer-events-none h-full w-full object-cover"
								aria-label="Gallery video"
								use:lazyVideo={isWallOpen}
							></video>
						{:else}
							<img
								src={mediaUrl(item.filename)}
								alt=""
								loading="lazy"
								class="pointer-events-none h-full w-full object-cover"
							/>
						{/if}
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
