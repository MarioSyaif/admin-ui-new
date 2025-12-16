import React from "react"; 

function MainLayout(props) {
  const { children } = props;
  
  return (
    <>
	    <div>{children}</div>
    </>
  );
}

export default MainLayout;