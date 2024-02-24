// to render job cards at /jobcard extension
const router = require('express').Router();
const { Jobs } = require('../models');

router.get('/jobCards', async (req, res) => {
    try {
       
        const jobs = await Jobs.findAll({ raw: true });
        console.log(jobs);
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
        console.log(req.params.id);
        const dbSelectedJob = await Jobs.findByPk(req.params.id);
        selectedJob = dbSelectedJob.get({ plain: true });
        res.render('editJobForm', {
            selectedJob
        });
    } catch {
        res.status(404).send("Error in fetching all jobCards1");
    }
});


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

module.exports = router;