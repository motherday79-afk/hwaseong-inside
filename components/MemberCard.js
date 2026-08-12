import Avatar from './Avatar';
export default function MemberCard({member,compact=false}){return <a href={`/members/${member.id}`} className={`memberCard ${compact?'compact':''}`}>{member.featured&&<i className="rank">{member.id}</i>}<Avatar member={member}/><strong>{member.name}</strong><small>{member.job}</small></a>}
