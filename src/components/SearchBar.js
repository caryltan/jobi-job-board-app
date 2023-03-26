const SearchBar = () => {

    const handleCategoryChange = (e) => {
        console.log(e.target.value)
    }

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <>
            <div className="col-12 pb-5 pt-3">
                <div className="d-flex">
                    <form className="input-group mb-4 justify-content-center flex-column flex-sm-row">
                        <div className="col-10 col-md-3 d-flex justify-content-center">
                            <div className="form-floating w-100">
                                <input type="search" className="form-control rounded-responsive-start" id="searchBar" onChange={handleChange} />
                                <label htmlFor="searchBar">What are you looking for?</label>
                            </div>
                        </div>
                        <div className="dropdown col-10 col-md-3 d-flex justify-content-center">
                            <div className="form-floating w-100">
                                <select
                                    className="form-select rounded-responsive form-control"
                                    aria-label="category selection"
                                    id="categorySelect"
                                    onChange={handleCategoryChange}
                                >
                                    <option value="All Categories">All Categories</option>
                                    <option value="Design & Development">Design & Development</option>
                                    <option value="Customer Marketing & Sales">Customer Marketing & Sales</option>
                                    <option value="Business Marketing">Businesss Marketing</option>
                                </select>
                                <label htmlFor="categorySelect">Category</label>
                            </div>
                        </div>
                        <div className="col-10 col-md-2">
                            <button type="button" className="btn btn-primary rounded-responsive-end w-100 h-100">
                                Search
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default SearchBar;