import Handlebars from 'handlebars';

const section = `
<section class='border-style' visual-editor="{{uuid}}">
{{{content}}}
</section>
`;

export const renderHandleBars = (bars: string, data: Record<string, any>) => {
  const template = Handlebars.compile(bars);
  const htmlData = template(data);
  return htmlData;
};

export const renderHtmlData = (blocks: any[]) => {
  const template = Handlebars.compile(section);
  const data = blocks
    .map(({ uuid, bars, defaultData }: any) =>
      template({
        uuid,
        content: renderHandleBars(bars, defaultData),
      })
    )
    .join('');
  return data;
};

export function filterUndefinedValues(obj: any) {
  const filteredObj = {} as any;

  Object.keys(obj).forEach((key) => {
    if (obj[key] !== undefined) {
      filteredObj[key] = obj[key];
    }
  });

  return filteredObj;
}
