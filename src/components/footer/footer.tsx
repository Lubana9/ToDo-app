export type FooterProps = {
  theme: string;
};
const Footer: React.FC<FooterProps> = ({ theme }) => {
  return <div className={`footer footer${theme}`}></div>;
};

export default Footer;
