const HomeMinSearch = () => {
    return (
        <>
            <div className="pb-5 pt-3" >

                <form className="d-flex flex-row mb-3">
                    <div className="col-12 my-2 d-flex justify-content-center justify-content-xl-start flex-column flex-md-row ">
                        <div className="d-flex justify-content-center justify-content-xl-start mb-3 col-12 col-md-6">
                            <input type="search" className="home-search-bar me-3 w-100" id="searchBar" placeholder="Search job, title, etc..." />
                        </div>
                        <div className="d-flex justify-content-center justify-content-xl-start mb-3 col-12 col-md-2">
                            <button type="button" className="btn btn-primary w-100">
                                Search
                            </button>
                        </div>
                    </div>

                </form>
                <div className="mx-5">
                    <p className="text-center text-xl-start"><strong>Popular:</strong> Design, Art, Business, Video Editing</p>
                </div>
            </div>
        </>
    )
}

export default HomeMinSearch;