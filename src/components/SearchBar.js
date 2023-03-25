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
                    <form className="input-group mb-4 justify-content-center">
                        <div className="col-3">
                            <div className="form-floating">
                                <input type="search" class="form-control rounded-0 rounded-start" id="searchBar" onChange={handleChange} />
                                <label for="searchBar">What are you looking for?</label>
                            </div>
                        </div>
                        <div className="dropdown col-3">
                            <div className="form-floating">
                                <select
                                    className="form-select rounded-0 form-control"
                                    aria-label="category selection"
                                    id="categorySelect"
                                    onChange={handleCategoryChange}
                                >
                                    <option value="All Categories">All Categories</option>
                                    <option value="Design & Development">Design & Development</option>
                                    <option value="Customer Marketing & Sales">Customer Marketing & Sales</option>
                                    <option value="Business Marketing">Businesss Marketing</option>
                                </select>
                                <label for="categorySelect">Category</label>
                            </div>
                        </div>

                        <button type="button" className="btn btn-primary rounded-0 rounded-end">
                            Search
                        </button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default SearchBar;