// Reusable section component
function TimelineSection({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <header>
        <h1>
          <u>{title}</u>
        </h1>
        {subtitle && <h2>{subtitle}</h2>}
      </header>
      {children}
    </div>
  );
}

export default TimelineSection;
