const bars = `
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <!-- text - start -->
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">{{text}}</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">{{description}}</p>
    </div>
    <!-- text - end -->

    <div class="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
      <!-- person - start -->
      <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
        <div class="h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32">
          <img src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Radu Florin" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="text-center font-bold text-indigo-500 sm:text-left md:text-lg">John McCulling</div>
          <p class="text-center text-sm text-gray-500 sm:text-left md:text-base">Founder / CEO</p>
        </div>
      </div>
      <!-- person - end -->

      <!-- person - start -->
      <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
        <div class="h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32">
          <img src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by christian ferrer" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="text-center font-bold text-indigo-500 sm:text-left md:text-lg">Kate Berg</div>
          <p class="text-center text-sm text-gray-500 sm:text-left md:text-base">CFO</p>
        </div>
      </div>
      <!-- person - end -->

      <!-- person - start -->
      <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
        <div class="h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32">
          <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Ayo Ogunseinde" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="text-center font-bold text-indigo-500 sm:text-left md:text-lg">Greg Jackson</div>
          <p class="text-center text-sm text-gray-500 sm:text-left md:text-base">CTO</p>
        </div>
      </div>
      <!-- person - end -->

      <!-- person - start -->
      <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
        <div class="h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32">
          <img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Midas Hofstra" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="text-center font-bold text-indigo-500 sm:text-left md:text-lg">Robert Greyson</div>
          <p class="text-center text-sm text-gray-500 sm:text-left md:text-base">Creative Director</p>
        </div>
      </div>
      <!-- person - end -->

      <!-- person - start -->
      <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
        <div class="h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32">
          <img src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Elizeu Dias" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="text-center font-bold text-indigo-500 sm:text-left md:text-lg">John Roberts</div>
          <p class="text-center text-sm text-gray-500 sm:text-left md:text-base">Investor Relations</p>
        </div>
      </div>
      <!-- person - end -->

      <!-- person - start -->
      <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
        <div class="h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32">
          <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Matheus Ferrero" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="text-center font-bold text-indigo-500 sm:text-left md:text-lg">Judy Amandez</div>
          <p class="text-center text-sm text-gray-500 sm:text-left md:text-base">Senior Art Director</p>
        </div>
      </div>
      <!-- person - end -->
    </div>
  </div>
</div>
`;

const block = {
  bars,
  blockId: 'team1',
  name: 'Teams #1',
  previewImageUrl: 'https://i.imgur.com/TogjSYJ.png',
  category: 'teams',
  defaultData: {
    text: 'Meet our Team',
    description:
      'This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.',
  },
  config: [
    {
      key: 'text',
      type: 'string',
      name: 'Heading text',
    },
    {
      key: 'description',
      type: 'string',
      name: 'Heading description',
    },
  ],
};

export default block;
