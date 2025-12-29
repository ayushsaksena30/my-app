<script lang="ts">
  export let title: string;
  export let link: string;
  export let pubDate: string;
  export let thumbnail: string | null = null;
</script>

<div class="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 p-6 h-full flex flex-col">
  <div class="flex flex-col flex-grow">
    {#if thumbnail}
      <img 
        src={thumbnail} 
        alt={title}
        class="w-full h-48 object-cover rounded-md mb-4"
      />
    {/if}
    <div>
      <h3 class="text-xl font-bold text-gray-900 mb-2">
        {title}
      </h3>
      <div class="mt-2">
        <span class="text-xs text-gray-500">
          {new Date(pubDate).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </span>
      </div>
    </div>
  </div>
  
  <div class="flex flex-wrap gap-2 pt-4 mt-auto">
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-md transition-colors border border-gray-300 hover:border-gray-400"
    >
      <img src="/images/logos/medium-icon.svg" alt="Medium" class="w-4 h-4" />
      <span class="text-sm">Medium</span>
    </a>
  </div>
</div>