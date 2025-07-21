<script lang="ts">
  export let title: string;
  export let subheading: string;
  export let features: string[] = [];
  export let techStack: Array<{imgPath: string, name: string}> = [];
  export let links: Array<{url: string, label: string, icon?: string}> = [];
  export let status: 'completed' | 'in progress' | undefined;
</script>

<div class="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 p-6 h-full flex flex-col w-fit">
  <div class="flex items-center justify-between mb-2">
    <h3 class="text-xl font-bold text-gray-900">
      {title}
    </h3>
    {#if status}
      <span class="ml-2 px-2 py-0.5 rounded-full text-xs font-semibold
        {status === 'completed' ? 'bg-green-100 text-green-800' : ''}
        {status === 'in progress' ? 'bg-yellow-100 text-yellow-800' : ''}
      " style="min-width: 80px; text-align: center;">
        {status === 'completed' ? 'Completed' : status === 'in progress' ? 'In Progress' : status}
      </span>
    {/if}
  </div>
  
  <p class="text-gray-600 text-md mb-4">
    {subheading}
  </p>
  
  {#if features.length > 0}
    <div class="mb-4">
      <h4 class="text-sm font-semibold text-gray-800 mb-2">Features:</h4>
      <ul class="list-disc ml-5 space-y-1">
        {#each features as feature}
          <li class="text-gray-700 text-sm">{feature}</li>
        {/each}
      </ul>
    </div>
  {/if}
  
  {#if techStack.length > 0}
    <div class="mb-4">
      <h4 class="text-sm font-semibold text-gray-800 mb-2">Tech Stack:</h4>
      <div class="bg-gray-50 rounded-lg p-3 border border-gray-200 w-fit">
        <div class="flex flex-wrap gap-2">
          {#each techStack as tech}
            <div class="group relative">
              <img 
                src={tech.imgPath} 
                alt={tech.name} 
                class="h-8 w-8 object-contain hover:scale-110 transition-transform cursor-pointer" 
              />
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                {tech.name}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/if}
  
  <div class="flex-grow"></div>
  
  {#if links.length > 0}
    <div class="flex flex-wrap gap-2 pt-4 mt-auto">
      {#each links as link}
        <a 
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-md transition-colors border border-gray-300 hover:border-gray-400"
        >
          {#if link.icon}
            <img src={link.icon} alt="" class="w-4 h-4" />
          {/if}
          <span class="text-sm">{link.label}</span>
        </a>
      {/each}
    </div>
  {/if}
</div> 