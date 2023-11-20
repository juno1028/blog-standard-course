import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Logo = () => {
  return (
    <div className="text-3xl text-center py-4 font-heading">
      DreamCatcher
      <FontAwesomeIcon icon={faStar} className="text-2xl test-slate-400" />
    </div>
  );
};
