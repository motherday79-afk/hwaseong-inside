export default function Avatar({member, large=false}){
  const initials = member.name.slice(-2);
  const [a,b] = member.colors;
  return <div className={`avatar ${large?'avatarLarge':''}`} style={{background:`linear-gradient(145deg, ${a}, ${b})`}}>
    <div className="avatarHalo"></div><span>{initials}</span>
  </div>
}
