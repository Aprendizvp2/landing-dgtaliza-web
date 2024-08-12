import arrowRight from "../../assets/img/arrow-right.png";

type ArrowRightProps = {
  onClick?: () => void;
};

export default function ArrowRight({ onClick }: ArrowRightProps) {
  return (
    <div className="arrow next" onClick={onClick}>
      <img src={arrowRight} alt="arrow-right" />
    </div>
  );
}
