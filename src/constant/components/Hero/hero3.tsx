const bars = `
<div class="bg-white pb-6 sm:pb-8 lg:pb-12">
  <section class="mx-auto max-w-screen-2xl px-4 md:px-8 mt-8">
    <div class="mb-8 flex flex-wrap justify-between md:mb-16">
      <div class="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
        <h1 class="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">{{cardTitle}}</h1>

        <p class="max-w-md leading-relaxed text-gray-500 xl:text-lg">{{cardDescription}}</p>
      </div>

     <div class="mb-12 flex w-full md:mb-16 lg:w-2/3">
        <div class="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
          <img src="{{image1}}" loading="lazy" alt="Photo by Kaung Htet" class="h-full w-full object-cover object-center" />
        </div>

        <div class="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img src="{{image2}}" loading="lazy" alt="Photo by Manny Moreno" class="h-full w-full object-cover object-center" />
        </div>
      </div>
    </div>
  </section>
</div>
`;

const block = {
  bars,
  blockId: 'hero3',
  name: 'Hero #3',
  previewImageUrl: 'https://i.imgur.com/DroAvo3.png',
  category: 'hero',
  defaultData: {
    image1:
      'https://images.unsplash.com/photo-1542340916-951bb72c8f74?auto=format&q=75&fit=crop&w=550&h=550',
    image2:
      'https://images.unsplash.com/photo-1586295166487-b265f7e83a7f?auto=format&q=75&fit=crop&w=550&h=550',
    cardTitle: 'Find your style online',
    cardDescription:
      'This is a section of some simple filler text, also known as placeholder text. It shares characteristics of real text.',
  },
  config: [
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
      key: 'cardTitle',
      type: 'string',
      name: 'Card Title',
    },
    {
      key: 'cardDescription',
      type: 'string',
      name: 'Card Description',
    },
  ],
};

export default block;
