// sections
import { HomeView } from 'src/sections/home/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard - Web Builder',
  description:
    'Create and modify stunning websites with our Dashboard Web Builder. Enjoy a user-friendly experience with a drag-and-drop interface, real-time previews, and seamless code export. Design and customize your web pages effortlessly.',
  keywords:
    'dashboard, web builder, website creation, drag-and-drop, UI design, frontend development, admin template, web development tool, code export, real-time preview, customizable, design system, responsive layout, user-friendly, website customization, design flexibility, component-based, page builder, UI/UX, developer tool, frontend framework, design elements, layout editor, code editor, HTML, CSS, JavaScript, responsive design, web application, design preview, screen compatibility, website editor, web components, design resources, frontend engineering, online web editor, web design tool, website architecture.',
  meta: [
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Hardik Desai' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
  ],
};

export default function Page() {
  return <HomeView />;
}
