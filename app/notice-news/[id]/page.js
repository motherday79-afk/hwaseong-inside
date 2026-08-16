import { notFound } from 'next/navigation';
import { createAdminClient } from '../../../lib/supabase/admin';
import { getCurrentUser } from '../../../lib/auth';
import { BoardDetailClient } from '../../../components/BoardClient';
export const dynamic='force-dynamic';
export default async function NoticeDetail({params}){const {id}=await params;const admin=createAdminClient();const [{data:post},user]=await Promise.all([admin.from('board_posts').select('*').eq('id',Number(id)).eq('board_type','notice').maybeSingle(),getCurrentUser()]);if(!post||(!post.is_published&&!['admin','editor'].includes(user?.role||'')))notFound();return <BoardDetailClient post={post} currentUser={user?{id:user.id,role:user.role}:null} type="notice"/>}
