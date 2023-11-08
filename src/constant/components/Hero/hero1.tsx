const bars = `
<div class="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row mt-8">
      <div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
        <p class="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">{{cardSubTitle}}</p>

        <h1 class="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">{{cardTitle}}</h1>

        <p class="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">{{cardDescription}}</p>

        {{#if isButton}}
            <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#" class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">{{btn1Text}}</a>

            <a href="#" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">{{btn2Text}}</a>
            </div>
        {{/if}}
      </div>
      <div class="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
        <img src="{{cardImg}}" loading="lazy" alt="Photo by Fakurian Design" class="h-full w-full object-cover object-center" />
      </div>
    </section>
  </div>
</div>
`;

const block = {
  bars,
  blockId: 'hero1',
  name: 'Hero #1',
  previewImageUrl: 'https://i.imgur.com/1dzzsDe.png',
  category: 'hero',
  defaultData: {
    cardImg:
      'https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000',
    cardSubTitle: 'The Future of Artificial Intelligence',
    cardTitle: 'The Future of Artificial Intelligence',
    cardDescription:
      'So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all',
    btn1Text: 'Get Started',
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
      key: 'cardDescription',
      type: 'string',
      name: 'Card Description',
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
