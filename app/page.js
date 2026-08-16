import SiteHeader from '../components/home/SiteHeader';
import Hero from '../components/home/Hero';
import ChairSection from '../components/home/ChairSection';
import FeaturedSection from '../components/home/FeaturedSection';
import NewsSection from '../components/home/NewsSection';
import MembersSection from '../components/home/MembersSection';
import SiteFooter from '../components/home/SiteFooter';

export default function Home(){
  return <main className="domHome">
    <SiteHeader/>
    <Hero/>
    <ChairSection/>
    <FeaturedSection/>
    <NewsSection/>
    <MembersSection/>
    <SiteFooter/>
  </main>;
}
