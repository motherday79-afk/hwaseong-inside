import { requireUser } from '../../lib/auth';
import AccountClient from './AccountClient';
export const dynamic='force-dynamic';
export default async function AccountPage(){const user=await requireUser();return <AccountClient user={{id:user.id,email:user.email,role:user.role}}/>}
