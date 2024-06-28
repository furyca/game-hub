import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoadMore = () => {
  return (
    <div className="rounded-md mx-auto my-6 bg-[#202020] max-w-fit">
      <FontAwesomeIcon icon={faSpinner} size="2xl" className="p-3 animate-spin" />
    </div>
  );
};

export default LoadMore;
