import React from "react";

const SuccessorError = ({code,message,onClose}) => {
  let myElement = null;
  console.log("Hwllo from Seccuss: " + code);
  console.log("Hwllo from msg: " + message);
  if(code === 200)
  {
    myElement =
    <div class="alert alert-success" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={onClose}>
    <span aria-hidden="true">&times;</span>
    </button>
    Product Added Successfully to Nest
    </div>;
  }
  else if(code === 100)
  {
    myElement =
    <div class="alert alert-success" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={onClose}>
    <span aria-hidden="true">&times;</span>
    </button>
    Product Successfully deleted from Nest
    </div>;
  }
  else if(code === 300)
  {
    myElement = <div class="alert alert-success" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={onClose}>
    <span aria-hidden="true">&times;</span>
    </button>
    Product updated Successfully in Nest
    </div>;
  }
  else
  {
    myElement = <div class="alert alert-danger" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={onClose}>
    <span aria-hidden="true">&times;</span>
    </button>
    Invalid Product Data
    </div>;
  }

  return (
    <div >
      {myElement}
    </div>
  );
};

export default SuccessorError;