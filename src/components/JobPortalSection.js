const JobPortalSection = () => {
    return (
        <>
            <section className="pt-5">
                <div className="wrapper">
                    <hr />
                    <div className="row">
                        <div className="col-12 col-md-8 d-flex flex-column py-4">
                            <h2>Your complete job portal</h2>
                            <p className="text-muted">Sign up and start your search</p>
                        </div>
                        <div className="d-flex col-12 col-md-4 align-items-center justify-content-end">
                            <div className="d-flex justify-content-end">
                                <button type="button" className="btn-homepage btn-primary mx-2">Looking for a job?</button>
                                <button type="button" className="btn-homepage btn-primary mx-2">Post a job</button>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </section>
        </>
    )
}

export default JobPortalSection;