import Gender from "./category/Gender";
import Status from "./category/Status";

const Filter = ({
  pageNumber,
  setPageNumber,
  setStatus,
  setGender,
}) => {
  let clear = () => {
    setStatus("");
    setGender("");
    setPageNumber(1);
    window.location.reload(false);
  };
  return (
    <>
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filtros</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-primary text-decoration-underline text-center mb-3"
      >
        Limpiar filtros
      </div>
      <div className="accordion" id="accordionExample">
        <Status
          setPageNumber={setPageNumber}
          setStatus={setStatus}
        />
        
        <Gender
          setPageNumber={setPageNumber}
          setGender={setGender}
        />
      </div>
    </div>
    </>
    
  );
};

export default Filter;