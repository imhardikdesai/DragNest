const bars = `
<div class="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
       <section class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48 mt-4">
      <img src="{{cardImg}}" loading="lazy" alt="{{cardSubTitle}}" class="absolute inset-0 h-full w-full object-cover object-center" />
      <div class="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>
      <div class="relative flex flex-col items-center p-4 sm:max-w-xl">
        <p class="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">{{cardSubTitle}}</p>
        <h1 class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">{{cardTitle}}</h1>
        {{#if isButton}}
          <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
            <a href="#" class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">{{btn1Text}}</a>
            <a href="#" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">{{btn2Text}}</a>
            </div>
          {{/if}}
      </div>
    </section>
  </div>
</div>
`;

const block = {
  bars,
  blockId: 'hero2',
  name: 'Hero #2',
  previewImageUrl: 'https://i.imgur.com/Dg9zCCo.png',
  category: 'hero',
  defaultData: {
    cardImg:
      'https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500',
    cardSubTitle: 'Very proud to introduce',
    cardTitle: 'Revolutionary way to build the web',
    btn1Text: 'Start Now',
    btn2Text: 'Take tour',
    isButton: true,
  },
  config: [
    {
      key: 'cardImg',
      type: 'string',
      name: 'Card Image',
    },
    {
      key: 'cardSubTitle',
      type: 'string',
      name: 'Card Sub Title',
    },
    {
      key: 'cardTitle',
      type: 'string',
      name: 'Card Title',
    },
    {
      key: 'btn1Text',
      type: 'string',
      name: 'Button 1 Text',
    },
    {
      key: 'btn2Text',
      type: 'string',
      name: 'Button 2 Text',
    },
    {
      key: 'isButton',
      type: 'boolean',
      name: 'Show Button',
    },
  ],
};

export default block;
