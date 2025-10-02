<script>
    import '../app.css';
    import LeftPanel from '../lib/components/LeftPanel.svelte';
    import RightPanel from '../lib/components/RightPanel.svelte';
    
    let isMenuOpen = false;
    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };
    const closeMenu = () => {
        isMenuOpen = false;
    };
</script>

<svelte:head>
	<title>Ayush Saksena</title>
	<meta name="description" content="Personal website showcasing experience, projects, and skills" />
	<link rel="icon" type="image/png" href="/favicon.png" />
</svelte:head>

<div class="min-h-screen bg-gray-50">
    <div class="md:hidden sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div class="flex items-center justify-between px-4 py-3">
            <div class="flex items-center gap-2">
                <img src="/images/logos/title.png" alt="Ayush Saksena" class="h-6 w-auto" />
            </div>
            <button aria-label="Open menu" class="p-2 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors" on:click={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                </svg>
            </button>
        </div>
    </div>

    <div class="flex">
        <div class="hidden md:block md:w-1/3 bg-white border-r border-gray-200 fixed h-screen overflow-y-auto">
            <LeftPanel />
        </div>

        {#if isMenuOpen}
        <div class="md:hidden fixed inset-0 z-40" aria-modal="true" role="dialog">
            <button aria-label="Close menu overlay" class="absolute inset-0 bg-black/40 backdrop-blur-sm" on:click={closeMenu}></button>
            <div class="absolute left-0 top-0 bottom-0 w-4/5 max-w-xs bg-white shadow-2xl overflow-y-auto">
                <div class="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
                    <span class="font-semibold text-gray-900">Menu</span>
                    <button aria-label="Close menu" class="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors" on:click={closeMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <LeftPanel onNavigate={closeMenu} />
            </div>
        </div>
        {/if}

        <div class="w-full md:w-2/3 md:ml-auto overflow-y-auto overflow-x-hidden">
            <RightPanel />
        </div>
    </div>
    <slot />
</div>