interface RatingProps {
  stars: number[];
  isText: boolean;
}
export default function Stars({ stars, isText }: RatingProps) {
  return (
    <span className="rating-div pl-6">
      {stars.map((a) =>
        a === 1 ? (
          <i className="fas fa-star" key={Math.random()} />
        ) : (
          <i className="fal fa-star" key={Math.random()} />
        ),
      )}{" "}
      {isText && "& up"}
    </span>
  );
}
