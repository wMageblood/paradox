interface tabProps {
  icon: string;
  text: string;
  href: string;
}

const Tabs = ({icon, text, href}: tabProps) => {
  return (
      <a href={href} className="px-3 py-1 rounded-full bg-primary-900 text-slate-300">{`${icon} ${text}`}</a>
  );
};

export default Tabs;