export default function Avatar({member, large=false}){
  const src = large ? (member.profileImage || member.image) : member.image;
  return <div className={`avatar ${large?'avatarLarge':''}`}>
    <img src={src} alt={`${member.name} 프로필`} />
  </div>
}
