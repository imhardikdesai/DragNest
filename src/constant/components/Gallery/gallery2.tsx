const bars = `
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
      <div class="flex items-center gap-12">
        <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">{{title}}</h2>

        <p class="hidden max-w-screen-sm text-gray-500 md:block">{{description}}</p>
      </div>
      {{#if isButton}}
            <a href="#" class="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">More</a>
      {{/if}}
    </div>

    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
      <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
        <img src="{{image1}}" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
    {{#if tags}}
        <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
    {{/if}}
      </a>
      <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
        <img src="{{image2}}" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
    {{#if tags}}
        <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span>
    {{/if}}
      </a>
      <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
        <img src="{{image3}}" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
    {{#if tags}}
      <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>
    {{/if}}
      </a>
      <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
        <img src="{{image4}}" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
    {{#if tags}}
        <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>
    {{/if}}
      </a>
    </div>
  </div>
</div>
`;

const block = {
  bars,
  blockId: 'gallery2',
  name: 'Gallery #2',
  previewImageUrl: 'https://i.imgur.com/9MzuzUk.png',
  category: 'gallery',
  defaultData: {
    image1:
      'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600',
    image2:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600',
    image3:
      'https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000',
    image4:
      'https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600',
    title: 'Gallery',
    description:
      'This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.',
    tags: true,
    isButton: true,
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
      key: 'image4',
      type: 'string',
      name: 'Image 4',
    },
    {
      key: 'tags',
      type: 'boolean',
      name: 'Show Tags',
    },
    {
      key: 'isButton',
      type: 'boolean',
      name: 'Show Button',
    },
  ],
};

export default block;
