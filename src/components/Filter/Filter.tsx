import "@styles/style.css";
export type FooterProps = {
  theme: string;
  item: number;
  onClear: () => void;
};
const Filter: React.FC<FooterProps> = ({ theme, item, onClear }) => {
  return (
    <div className={`grid grid--1x3 todo--filter content${theme}`}>
      <div>{item} items left</div>
      <div></div>
      <div className="filter--btn" onClick={onClear}>
        Clear all
      </div>
    </div>
  );
};

export default Filter;
