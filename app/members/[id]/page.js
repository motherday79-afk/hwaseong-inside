import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Avatar from '../../../components/Avatar';
import MemberCard from '../../../components/MemberCard';
import Radar from '../../../components/Radar';
import { members, getMember } from '../../../data/members';

const descriptions = {
  센스: '상황을 빠르게 파악하고 핵심을 짚어냅니다.',
  끈기: '포기하지 않고 끝까지 목표를 향해 나아갑니다.',
  열정: '일에 몰입하며 에너지를 만들어냅니다.',
  꿈: '더 나은 비전과 가능성을 꾸준히 그립니다.',
  재능: '아이디어를 구체화하고 실행력으로 연결합니다.',
  협업: '다양한 사람들과 함께 시너지를 만들어냅니다.'
};

const icons = {
  센스: '✧',
  끈기: '🏆',
  열정: '◔',
  꿈: '☼',
  재능: '✎',
  협업: '☆'
};

export default async function Profile({ params }) {
  const { id } = await params;
  const member = getMember(id);
  const start = (Number(member.id) + 1) % 10;
  const recommendations = members.filter((m) => m.id !== member.id).slice(start, start + 5);
  const strengthEntries = Object.entries(member.strengths);

  return (
    <>
      <Header />
      <main className="profilePage wrap">
        <div className="crumb">⌂ &nbsp;›&nbsp; Members &nbsp;›&nbsp; Profile</div>

        <section className="profileHero">
          <div className="profileVisual card softCard">
            <Avatar member={member} large />
          </div>

          <div className="profileInfo card softCard">
            <div className="tier">◈ {member.tier} Member</div>
            <div className="nameLine">
              <h1>{member.name}</h1>
              <span>{member.job}</span>
            </div>
            <p className="hand">사람과 브랜드를 연결해, 가치를 오래 남기고 싶습니다.</p>

            <div className="facts">
              <span>◔ <b>나이</b> {member.age}세</span>
              <span>⌘ <b>직업 / 직책</b> {member.job}</span>
              <span>◌ <b>성별</b> {member.gender}</span>
              <span>✉ <b>이메일</b> {member.email}</span>
              <span>✦ <b>최종학력</b> {member.school}</span>
              <span>⌖ <b>활동 지역</b> {member.area}</span>
            </div>

            <div className="chips">
              {member.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="infoRow twoColHome">
          <article className="card softCard intro">
            <h2>💬 개성있는 소개</h2>
            <p>{member.intro}</p>
            <p>
              데이터를 기반으로 통찰과 감정의 이야기를 행동으로 바꾸고, 다녀가야 사라지지 않는
              변화를 만드는 일을 하고 있습니다.
            </p>
            <p>
              화성인사이드의 다양한 분야의 리더들과 교류하며 새로운 시너지를 만들고, 우리 지역의
              긍정적인 변화를 함께 만들고 싶어요.
            </p>
          </article>

          <article className="card softCard career">
            <h2>👜 믿을 수 있는 경력 · 이력</h2>
            <div className="careerTimeline">
              {member.careers.map((career) => (
                <div className="careerRow" key={career.period}>
                  <div className="period">{career.period}</div>
                  <div className="careerCard">
                    <div>
                      <strong>{career.company}</strong>
                      <span>{career.role}</span>
                      <p>{career.desc}</p>
                    </div>
                    <a href="#">주요 성과 보기 ›</a>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="card softCard recommend">
          <div className="recommendHead">
            <h2>♡ {member.name}님과 매칭 포인트가 높은 화성인사이드 멤버 추천</h2>
            <button type="button" className="miniArrow">→</button>
          </div>
          <div className="recommendGrid">
            {recommendations.map((rec, i) => (
              <div className="recWrap" key={rec.id}>
                <MemberCard member={rec} compact match={92 - i * 3} />
                <div className="miniTags">
                  <span>{rec.tags[0]}</span>
                  <span>{rec.tags[1]}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="card softCard strengths">
          <div className="strengthIntro">
            <h2>☆ {member.name}님의 강점 레이더</h2>
            <p>다양한 강점을 통해 디자인, 실행력의 강점을 소개합니다.</p>
            <Radar values={member.strengths} />
          </div>

          <div className="strengthList">
            {strengthEntries.map(([key]) => (
              <div key={key}>
                <b>{icons[key]} {key}</b>
                <span>{descriptions[key]}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="connect card softCard">
          <div className="ctaIcon">✈</div>
          <div>
            <b>함께 연결하고 싶다면?</b>
            <span>{member.name}님과 네트워크를 맺고, 다양한 방식으로 협업의 기회를 만들어보세요.</span>
          </div>
          <div className="ctaButtons">
            <button type="button">네트워크 요청하기</button>
            <button type="button" className="ghost">메시지 보내기 ✉</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
