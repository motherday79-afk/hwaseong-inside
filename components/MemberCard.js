import Avatar from './Avatar';

export default function MemberCard({ member, compact = false, match = null }) {
  return (
    <a href={`/members/${member.id}`} className={`memberCard ${compact ? 'compact' : ''}`}>
      {member.featured && <span className="rank">{member.id}</span>}
      {match !== null && <span className="matchBadge">매칭 {match}%</span>}
      <Avatar member={member} />
      <strong>{member.name}</strong>
      <small>{member.job}</small>
    </a>
  );
}
