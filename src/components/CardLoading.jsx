import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

const CardLoading = ({ count }) => {
  return Array(count)
    .fill(0)
    .map((v, i) => (
      <section key={i} className="w-40">
        <Skeleton height={240} />
        <section>
          <Skeleton count={4} />
        </section>
      </section>
    ));
};

export default CardLoading;

CardLoading.propTypes = {
  count: PropTypes.number,
};
