import React from 'react';
import './style.css';

export interface Props {
    page: number;
    totalPages: number;
    handlePagination: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({ page, totalPages, handlePagination }) => {
    return (
        <div className={'pagination'}>
            <div className={'pagination-wrapper'}>
                {page !== 1 && (
                    <button
                        onClick={() => handlePagination(page - 1)}
                        type='button'
                        className='pageItem sides'
                    >
                        &lt;
                    </button>
                )}
                {page === 1 ? (
                        <button
                            onClick={() => handlePagination(1)}
                            type='button'
                            className={'pageItem active'}
                        >
                            {1}
                        </button>
                    ) :
                    (
                        <button
                            onClick={() => handlePagination(1)}
                            type='button'
                            className={'pageItem'}
                        >
                            {1}
                        </button>
                    )}
                {page > 3 && <div className={'separator'}>...</div>}
                {page === totalPages && totalPages > 3 && (
                    <button
                        onClick={() => handlePagination(page - 2)}
                        type='button'
                        className={'pageItem'}
                    >
                        {page - 2}
                    </button>
                )}
                {page > 2 && (
                    <button
                        onClick={() => handlePagination(page - 1)}
                        type='button'
                        className={'pageItem'}
                    >
                        {page - 1}
                    </button>
                )}
                {page !== 1 && page !== totalPages && (
                    <button
                        onClick={() => handlePagination(page)}
                        type='button'
                        className={'pageItem active'}
                    >
                        {page}
                    </button>
                )}
                {page < totalPages - 1 && (
                    <button
                        onClick={() => handlePagination(page + 1)}
                        type='button'
                        className={'pageItem'}
                    >
                        {page + 1}
                    </button>
                )}
                {page === 1 && totalPages > 3 && (
                    <button
                        onClick={() => handlePagination(page + 2)}
                        type='button'
                        className={'pageItem'}
                    >
                        {page + 2}
                    </button>
                )}
                {page < totalPages - 2 && <div className={'separator'}>...</div>}
                {page === totalPages ? (
                        <button
                            onClick={() => handlePagination(totalPages)}
                            type='button'
                            className={'pageItem active'}
                        >
                            {totalPages}
                        </button>
                    ) :
                    (
                        <button
                            onClick={() => handlePagination(totalPages)}
                            type='button'
                            className={'pageItem'}
                        >
                            {totalPages}
                        </button>
                    )}
                {page !== totalPages && (
                    <button
                        onClick={() => handlePagination(page + 1)}
                        type='button'
                        className={'pageItem sides'}
                    >
                        &gt;
                    </button>
                )}
            </div>
        </div>
    );
};
