import { createAdminClient } from '../../lib/supabase/admin';
import { getCurrentUser } from '../../lib/auth';
import { BoardListClient } from '../../components/BoardClient';
export const dynamic='force-dynamic';
export default async function NoticeBoard(){const admin=createAdminClient();const [{data:posts},user]=await Promise.all([admin.from('board_posts').select('*').eq('board_type','notice').eq('is_published',true).order('created_at',{ascending:false}),getCurrentUser()]);return <BoardListClient type="notice" title="공지게시판" description="화성인사이드의 공지와 회원 소식을 공유합니다." initialPosts={posts||[]} canWrite={!!user}/>}
