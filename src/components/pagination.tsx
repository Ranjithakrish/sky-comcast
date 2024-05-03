import React from 'react';
import { Pagination, PaginationItemType, PaginationItemRenderProps  } from '@nextui-org/pagination';
import cn from 'classnames';
import { ChevronIcon } from '@/sylesheets/chevron';

interface PaginationProps {
    setCurrentPage: (page: number) => void;
}

const MyPagination: React.FC<PaginationProps> = ({setCurrentPage }) => {
    const renderItem = ({
        ref,
        key,
        value,
        isActive,
        onNext,
        onPrevious,
        setPage,
        className,
      }: PaginationItemRenderProps ) => {

        if (value === PaginationItemType.NEXT) {
          return (
            <button key={key} className={cn(className, "bg-default-200/50 min-w-8 w-8 h-8")} onClick={onNext}>
              <ChevronIcon className="rotate-180" />
            </button>
          );
        }
    
        if (value === PaginationItemType.PREV) {
          return (
            <button key={key} className={cn(className, "bg-default-200/50 min-w-8 w-8 h-8")} onClick={onPrevious}>
              <ChevronIcon />
            </button>
          );
        }
    
        if (value === PaginationItemType.DOTS) {
          return <button key={key} className={className}>...</button>;
        }
    
        // cursor is the default item
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
    return (
        <Pagination 
        disableCursorAnimation
        showControls
        total={10}
        initialPage={1}
        className="gap-2"
        radius="full"
        renderItem={renderItem}
        variant="light"
        size='lg'
        />
      );
}

export default MyPagination;
