import { useMemo } from "react";
import { Wrapper, Item } from "./Pagination.styled";

export const Pagination = ({ pagesCount, page, onSelect }) => {
  const pages = useMemo(() => {
    if (pagesCount > 0) {
      return (
        <>
          <Item>
            <span>{"<"}</span>
          </Item>
          {Array.from(Array(pagesCount).keys()).map((el) => {
            return (
              <Item
                onClick={() => onSelect(el + 1)}
                key={`warehouse_pagination_${el}_from_${pagesCount}`}
              >
                <span>{el + 1}</span>
              </Item>
            );
          })}
          <Item>
            <span>{">"}</span>
          </Item>
        </>
      );
    }
    return null;
  }, [page, pagesCount]);
  return <Wrapper>{pages}</Wrapper>;
};
