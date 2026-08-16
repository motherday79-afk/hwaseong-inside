import { requireRole } from '../../../lib/auth';
export default async function UsersLayout({children}){await requireRole(['admin']);return children;}
