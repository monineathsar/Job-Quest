// to render job cards at /jobcard extension
const router = require('express').Router();
const { Jobs } = require('../models');

router.get('/jobCards', async (req, res) => {
    try {
       
        const jobs = await Jobs.findAll();
        console.log(jobs);
        res.render('jobCards', {
            jobs
        });
    } catch (e) {
        res.status(404).send("Error in fetching all jobCards");
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