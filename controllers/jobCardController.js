// to render job cards at /jobcard extension
const router = require('express').Router();
const { Jobs } = require('../models');

router.get('/jobCards', async (req, res) => {
    try {
       
        const jobs = await Jobs.findAll({ raw: true });
        res.render('jobCards', {
            jobs
        });
    } catch (e) {
        res.status(404).send("Error in fetching all jobCards");
    }

});

// renders existing jobcard into job form on  extension
router.get('/jobCards/:id', async (req, res) => {
    try {
        const dbSelectedJob = await Jobs.findByPk(req.params.id);
        selectedJob = dbSelectedJob.get({ plain: true });
        res.render('editJobForm', {
            selectedJob
        });
    } catch {
        res.status(404).send("Error in fetching all jobCards1");
    }
});

// to delete job card
router.delete('/jobCards/:id', async (req, res) => {
    const jobsId = req.params.id;
    try {
        const jobs = await Jobs.destroy({
            where: {
                id: jobsId
            },
        });

        res.json(jobs);

    } catch (error) {
        console.error(error);
    }
});

// to search a specific job card by company name
router.get('/search', async (req, res) => {
    try {
        const jobs = await Jobs.findAll({ where: { company: req.query.company }, raw: true });
        res.render('jobCards', {
            jobs
        });

    } catch {
        res.status(404).send("Error searching for job card.");
    }
});

module.exports = router;