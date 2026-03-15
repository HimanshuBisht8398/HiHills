import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Dedicated from './components/Dedicated/index';
import Digital from './components/Digital/index';
import Beliefs from './components/Beliefs/index';
import Wework from './components/Wework/index';
import Ourteam from './components/Ourteam/index';
import Featured from './components/Featured/index';
import Manage from './components/Manage/index';
import FAQ from './components/FAQ/index';
import Testimonials from './components/Testimonials/index';
import Articles from './components/Articles/index';
import Joinus from './components/Joinus/index';
import Insta from './components/Insta/index';
import Wintertrek from './components/Wework/Wintertrek';
import Adveture from './components/Wework/Adveture';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: 'Uttarakhand Tours, Char Dham Yatra & Himalayan Treks',
  description:
    'Hi Hills — Premier Haridwar-based travel agency for Uttarakhand tour packages, Char Dham Yatra, Himalayan treks, jeep safaris & handpicked stays. Expert-led, safe & customized.',
};

export default function Home() {
  return (
    <main id="main-content">
      <Digital />
      <Banner />
      <Aboutus />
      <Dedicated />
      {/* <Beliefs /> */}
      <Wework />
      <Wintertrek/>
      <Adveture/>
      <Ourteam />
      {/* <Featured /> */}
      {/* <Manage /> */}
      <Articles />
      <FAQ />
      <Testimonials />
      {/* <Joinus /> */}
      <Insta />
    </main>
  )
}
