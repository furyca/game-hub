import { MouseEventHandler, ReactNode } from "react";

const ReadMore = ({styleProps, children, handleToggle}: {styleProps: string, children: ReactNode, handleToggle: MouseEventHandler}) => {

  return (
    <button className={styleProps} onClick={handleToggle}>
      {children}
    </button>
  );
};

export default ReadMore;
