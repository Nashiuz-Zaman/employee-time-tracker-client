// react imports
import PropTypes from "prop-types";

const InnerContainer = ({ children, modifyClasses = "" }) => {
  return (
    <div
      className={`max-w-[90rem] 3xl:max-w-full px-3 xsm:px-6 md:px-8 lg:px-12 mx-auto 3xl:px-[7rem] ${modifyClasses}`}
    >
      {children}
    </div>
  );
};

InnerContainer.propTypes = {
  children: PropTypes.node,
  modifyClasses: PropTypes.string,
};

export default InnerContainer;
