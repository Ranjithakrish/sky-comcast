import React from 'react';
import { Pagination, PaginationItemType, PaginationItemRenderProps } from '@nextui-org/pagination';
import cn from 'classnames';
import { ChevronIcon } from '@/sylesheets/chevron';

interface PaginationProps {
  setCurrentPage: (page: number) => void;
  cardsLength: number;
  pageCardCnt: number;
}

const MyPagination: React.FC<PaginationProps> = ({ setCurrentPage, cardsLength, pageCardCnt }) => {
  const totalPages = Math.ceil(cardsLength / pageCardCnt);

  // Define renderItem function to customize pagination item rendering
  const renderItem = ({
    ref,
    key,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
  }: PaginationItemRenderProps) => {

    // Render next button with Chevron icon
    if (value === PaginationItemType.NEXT) {
      return (
        <button key={key} className={cn(className, "bg-default-200/50 min-w-8 w-8 h-8")} onClick={onNext}>
          <ChevronIcon className="rotate-180" />
        </button>
      );
    }

    // Render previous button with Chevron icon
    if (value === PaginationItemType.PREV) {
      return (
        <button key={key} className={cn(className, "bg-default-200/50 min-w-8 w-8 h-8")} onClick={onPrevious}>
          <ChevronIcon />
        </button>
      );
    }

    // Render dots for pagination items representing ellipsis
    if (value === PaginationItemType.DOTS) {
      return <button key={key} className={className}>...</button>;
    }

    // Render page number button
    return (
      <button
        key={key}
        ref={ref}
        className={cn(
          className,
          isActive &&
          "text-white bg-gradient-to-br from-indigo-500 to-pink-500 font-bold",
        )}
        onClick={() => {
          setPage(value)
          setCurrentPage(value)
        }}
      >
        {value}
      </button>
    );
  };

  // Render Pagination component with customized renderItem function
  return (
    <Pagination
      disableCursorAnimation
      showControls
      total={totalPages}
      initialPage={1}
      className="gap-2 m-0"
      radius="full"
      renderItem={renderItem}
      variant="light"
      size='lg'
      color='secondary'
    />
  );
}

export default MyPagination;
