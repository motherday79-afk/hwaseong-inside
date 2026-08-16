import SiteHeader from '../components/home/SiteHeader';
import Hero from '../components/home/Hero';
import ChairSection from '../components/home/ChairSection';
import FeaturedSection from '../components/home/FeaturedSection';
import NewsSection from '../components/home/NewsSection';
import MembersSection from '../components/home/MembersSection';
import SiteFooter from '../components/home/SiteFooter';
import { getCurrentUser } from '../lib/auth';
export const dynamic='force-dynamic';
export default async function Home(){const user=await getCurrentUser();return <div className="v7Home"><SiteHeader/><main><Hero user={user?{tier:user.tier||'Gold'}:null}/><ChairSection/><FeaturedSection/><NewsSection/><MembersSection/></main><SiteFooter/></div>}
