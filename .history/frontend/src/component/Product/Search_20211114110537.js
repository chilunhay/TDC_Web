import React, { Fragment } from 'react';

const Search = () => {
    return (
        <Fragment>
            <form className="searchBox" onSubmit={searchSubmitHandler}>
                <input 
                    type: "text"
                    placeholder="Search a product ..."
                    onChange={searchSubmitHandler}
                />

            </form>
        </Fragment>
    )
};

export default Search;
