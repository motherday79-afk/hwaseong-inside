import { createAdminClient } from '../../lib/supabase/admin';
import { getCurrentUser } from '../../lib/auth';
import { BoardListClient } from '../../components/BoardClient';
export const dynamic='force-dynamic';
export default async function CommunityBoard(){const admin=createAdminClient();const [{data:posts},user]=await Promise.all([admin.from('board_posts').select('*').eq('board_type','community').eq('is_published',true).order('created_at',{ascending:false}),getCurrentUser()]);return <BoardListClient type="community" title="커뮤니티게시판" description="화성인사이드 회원들이 자유롭게 연결되고 정보를 나누는 공간입니다." initialPosts={posts||[]} canWrite={!!user}/>}
