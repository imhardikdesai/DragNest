const bars = `
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="{{card1img}}">
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">{{card1title}}</h2>
        <p class="leading-relaxed text-base">{{card1description}}</p>
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Read more</button>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="{{card2img}}">
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">{{card2title}}</h2>
        <p class="leading-relaxed text-base">{{card2description}}</p>
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Read more</button>
      </div>
    </div>
  </div>
</section>
`;

const block = {
  bars,
  blockId: 'nav1',
  name: 'CardList #1',
  previewImageUrl: 'https://i.imgur.com/NlUvVDj.png',
  category: 'card',
  defaultData: {
    card1img: 'https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_3.jpg',
    card2img: 'https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_1.jpg',
    card1title: 'The Future of Artificial Intelligence',
    card2title: 'Trends and Insights',
    card1description:
      'So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all',
    card2description:
      'You are guaranteed to have a spot in MTA’s successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision',
  },
  config: [
    {
      key: 'card1img',
      type: 'string',
      name: 'First Card Image',
    },
    {
      key: 'card2img',
      type: 'string',
      name: 'Second Card Image',
    },
    {
      key: 'card1title',
      type: 'string',
      name: 'First Card Title',
    },
    {
      key: 'card2title',
      type: 'string',
      name: 'Second Card Title',
    },
    {
      key: 'card1description',
      type: 'string',
      name: 'First Card Description',
    },
    {
      key: 'card2description',
      type: 'string',
      name: 'Second Card Description',
    },
  ],
};

export default block;
