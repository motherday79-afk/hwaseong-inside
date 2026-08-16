import AdminShell from '../../components/admin/AdminShell';
import { requireRole } from '../../lib/auth';
export default async function AdminLayout({children}){const user=await requireRole(['admin','editor']);return <AdminShell currentUser={{email:user.email,role:user.role}}>{children}</AdminShell>}
