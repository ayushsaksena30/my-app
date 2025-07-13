<script lang="ts">
  export let imgPath: string;
  export let name: string;
  export let imgClass: string = "h-6";
</script>

<div class="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200 hover:shadow-md transition-shadow whitespace-nowrap">
  <img src={imgPath} alt={name} class={imgClass} />
  <span class="text-sm text-gray-700 font-medium">{name}</span>
</div> 