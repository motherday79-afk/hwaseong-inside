import './globals.css';
import './clean-v7.css';
import './design-v7-2.css';
import './design-v7-3.css';
import './design-v7-6.css';
import './design-v7-7.css';
import './detail-ux-v7-8.css';

export const metadata = {
  title: '화성인사이드',
  description: '화성의 사람과 가치를 연결하는 프리미엄 네트워크'
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
