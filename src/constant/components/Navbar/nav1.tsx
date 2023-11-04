const bars = `
<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img class='h-10' src='https://i.imgur.com/zgkAumg.png'/>
      <span class="ml-3 text-xl">{{name}}</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
    {{#each links}}
      <a href="{{url}}" class="mr-5 hover:text-gray-900">{{name}}</a>
    {{/each}}
    </nav>
    {{#if isButton}}
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">{{btnText}}
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    {{/if}}
  </div>
</header>
`;

const block = {
  bars,
  blockId: 'nav1',
  name: 'Navbar #1',
  previewImageUrl:
    'https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  category: 'header',
  defaultData: {
    name: 'CodeNest',
    links: [
      {
        name: 'Home',
        url: '#',
      },
      {
        name: 'About',
        url: '#',
      },
      {
        name: 'Contact',
        url: '#',
      },
    ],
    btnText: 'Get Started',
    isButton: true,
  },
  config: [
    {
      key: 'name',
      type: 'string',
      name: 'Title',
    },
    {
      key: 'btnText',
      type: 'string',
      name: 'Button Text',
    },
    {
      key: 'isButton',
      type: 'boolean',
      name: 'Show Button',
    },
  ],
};

export default block;
