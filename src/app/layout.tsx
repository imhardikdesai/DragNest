// scroll bar
import 'simplebar-react/dist/simplebar.min.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';

// Global CSS
import 'prismjs/themes/prism-okaidia.css';
import 'src/styles/gloabal.css';
import 'react-syntax-highlighter/dist/cjs/styles/hljs/monokai';
import 'grapesjs/dist/css/grapes.min.css';

// ----------------------------------------------------------------------

// theme
import ThemeProvider from 'src/theme';
import { primaryFont } from 'src/theme/typography';
// components
import ProgressBar from 'src/components/progress-bar';
import MotionLazy from 'src/components/animate/motion-lazy';
import { SettingsProvider, SettingsDrawer } from 'src/components/settings';
// auth
import { AuthProvider, AuthConsumer } from 'src/auth/context/firebase';
import ReduxProvider from 'src/redux/redux-provider';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'DragNest',
  description:
    'Our platform offers a simple drag-and-drop interface with ready-to-use components and pages. Users can effortlessly create & modify website details to suit their preferences. The platform allows for real-time previews on various screens and the export of generated code.',
  keywords:
    'react, material, kit, application, dashboard, admin, template, web builder, drag-and-drop, responsive design, UI components, website creation, code export, real-time preview, customizable, frontend development, design tool, user-friendly, web development, CSS framework, component library, page builder, UI/UX, developer tool, website customization, drag-and-drop builder, web design, code generation, theme customization, frontend framework, design system, web development tool, website builder, design elements, web components, UI design, frontend design, website editor, layout editor, component-based, code editor, HTML, CSS, JavaScript, responsive layout, design flexibility, website modification, design preview, screen compatibility, design customization, web template, design resources, design flexibility, frontend engineering, web application.',
  themeColor: '#000000',
  manifest: '/manifest.json',
  icons: [
    {
      rel: 'icon',
      url: '/favicon/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={primaryFont.className}>
      <meta name="google-site-verification" content="qJsNhWkO1B4_mj3cOySBP26r3ikPIuIXKtZedl6YKpQ" />
      <body>
        <AuthProvider>
          <ReduxProvider>
            <SettingsProvider
              defaultSettings={{
                themeMode: 'dark', // 'light' | 'dark'
                themeDirection: 'ltr', //  'rtl' | 'ltr'
                themeContrast: 'default', // 'default' | 'bold'
                themeLayout: 'mini', // 'vertical' | 'horizontal' | 'mini'
                themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
                themeStretch: false,
              }}
            >
              <ThemeProvider>
                <MotionLazy>
                  <SettingsDrawer />
                  <ProgressBar />
                  <AuthConsumer>{children}</AuthConsumer>
                </MotionLazy>
              </ThemeProvider>
            </SettingsProvider>
          </ReduxProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
