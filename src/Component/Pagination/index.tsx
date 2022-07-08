import { useDispatch } from "react-redux";
import { paginationProps } from "../../Helper/interface";
import { pagesQuery } from "../../Redux/slicePages";
import "./index.css";

const Pagination: React.FC<paginationProps> = ({
  contentNumber,
  contentLength,
}) => {
  const pageNumbers: number[] = [];
  const dispatch = useDispatch();

  for (
    let i = 1;
    i <= Math.ceil((contentLength as number) / contentNumber);
    i++
  ) {
    pageNumbers.push(i);
  }

  const page = (pageNumber: number) => {
    dispatch(pagesQuery(pageNumber));
  };

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number, id) => (
          <li key={id} onClick={() => page(number)} className="page-item">
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
