<script lang="ts">
  export let title: string;
  export let link: string;
  export let pubDate: string;
  export let thumbnail: string | null = null;
</script>

<div class="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 p-6">
  <div class="flex flex-col">
    {#if thumbnail}
      <img 
        src={thumbnail} 
        alt={title}
        class="w-full h-48 object-cover rounded-md mb-4"
      />
    {/if}
    <div>
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        class="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors block"
      >
        {title}
      </a>
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
</div>