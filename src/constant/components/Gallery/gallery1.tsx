const bars = `
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">{{title}}</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">{{description}}</p>
    </div>
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
      <!-- image - start -->
      <a href="#" class="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
        <img src="{{image1}}" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
    {{#if tags}}
        <span class="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">VR</span>
    {{/if}}
      </a>
      <a href="#" class="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
        <img src="{{image2}}" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
    {{#if tags}}
        <span class="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">Retro</span>
    {{/if}}
      </a>
      <a href="#" class="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
        <img src="{{image3}}" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
    {{#if tags}}
        <span class="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">Tech</span>
    {{/if}}
      </a>
    </div>
  </div>
</div>
`;

const block = {
  bars,
  blockId: 'gallery1',
  name: 'Gallery #1',
  previewImageUrl: 'https://i.imgur.com/eRWXfIr.png',
  category: 'gallery',
  defaultData: {
    image1:
      'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600',
    image2:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600',
    image3:
      'https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600',
    title: 'Gallery',
    description:
      'This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.',
    tags: true,
  },
  config: [
    {
      key: 'title',
      type: 'string',
      name: 'Title',
    },
    {
      key: 'description',
      type: 'string',
      name: 'Description',
    },
    {
      key: 'image1',
      type: 'string',
      name: 'Image 1',
    },
    {
      key: 'image2',
      type: 'string',
      name: 'Image 2',
    },
    {
      key: 'image3',
      type: 'string',
      name: 'Image 3',
    },
    {
      key: 'tags',
      type: 'boolean',
      name: 'Show Tags',
    },
  ],
};

export default block;
