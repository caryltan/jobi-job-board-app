const JobPortalSection = () => {
    return (
        <>
            <section class="pt-5">
                <div class="wrapper">
                    <hr />
                    <div class="row">
                        <div class="col-12 col-md-8 d-flex flex-column py-4">
                            <h2>Most complete job portal</h2>
                            <p class="text-muted">Sign up and start your search</p>
                        </div>
                        <div class="d-flex col-12 col-md-4 align-items-center justify-content-end">
                            <div class="d-flex justify-content-end">
                                <button type="button" class="btn btn-primary mx-2">Looking for a job?</button>
                                <button type="button" class="btn btn-primary mx-2">Post a job</button>
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