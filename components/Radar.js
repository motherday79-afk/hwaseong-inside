export default function Radar({ values }) {
  const labels = Object.keys(values);
  const nums = Object.values(values);
  const c = 145;
  const r = 105;
  const pointString = nums
    .map((v, i) => {
      const a = (-90 + i * 60) * Math.PI / 180;
      const rr = r * (v / 100);
      return `${c + Math.cos(a) * rr},${c + Math.sin(a) * rr}`;
    })
    .join(' ');

  const ring = (scale) =>
    Array.from({ length: 6 }, (_, i) => {
      const a = (-90 + i * 60) * Math.PI / 180;
      return `${c + Math.cos(a) * r * scale},${c + Math.sin(a) * r * scale}`;
    }).join(' ');

  return (
    <div className="radarWrap">
      <svg viewBox="0 0 290 290" className="radarSvg">
        {[1, 0.75, 0.5, 0.25].map((s) => (
          <polygon key={s} points={ring(s)} fill="none" stroke="#dad2ff" strokeWidth="1.2" />
        ))}
        {Array.from({ length: 6 }, (_, i) => {
          const a = (-90 + i * 60) * Math.PI / 180;
          return (
            <line
              key={i}
              x1={c}
              y1={c}
              x2={c + Math.cos(a) * r}
              y2={c + Math.sin(a) * r}
              stroke="#e6e0ff"
            />
          );
        })}
        <polygon points={pointString} fill="rgba(121, 92, 255, 0.45)" stroke="#7b61ff" strokeWidth="2.5" />
        {labels.map((label, i) => {
          const a = (-90 + i * 60) * Math.PI / 180;
          return (
            <text
              key={label}
              x={c + Math.cos(a) * 130}
              y={c + Math.sin(a) * 130 + 4}
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill="#4b4b55"
            >
              {label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
