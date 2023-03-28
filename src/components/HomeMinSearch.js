const HomeMinSearch = () => {
    return (
        <>
            <div className="pb-5 pt-3" >

                <form className="d-flex flex-row mb-3">
                    <div className="col-12 my-2 d-flex mx-5">
                        <input type="search" className="home-search-bar col-6 me-3" id="searchBar" placeholder="Search job, title, etc..." />
                        <button type="button" className="btn btn-primary col-2">
                            Search
                        </button>
                    </div>
                    
                </form>
                <div className="mx-5">
                <p><strong>Popular:</strong> Design, Art, Business, Video Editing</p>
                </div>
            </div>
        </>
    )
}

export default HomeMinSearch;