const router = require('express').Router();
const { Jobs } = require('../models');

// renders empty job form on  extension
router.get('/', async (req, res) => {
    try {
        res.render('jobForm');
    }
    catch {
        res.status(404).send("Error rendering jobForm");
    }
});

// creates new job card with user input
router.post('/', async (req, res) => {
    const newJobCard = await Jobs.create({
        company: req.body.company,
        position: req.body.position,
        link: req.body.link,
        salary: req.body.salary
    });

    res.redirect('/jobCards');
});


// to update jobcards
router.put('/', async (req, res) => {
    try {
        const updateJobCard = await Jobs.update(
            {
                company: req.body.company,
                position: req.body.position,
                link: req.body.link,
                salary: req.body.salary,
                haveApplied: req.body.haveApplied,
                feedback: req.body.feedback,
                recruiterName: req.body.recruiterName,
                recruiterPhone: req.body.recruiterPhone,
                recruiterEmail: req.body.recruiterEmail,
                // conditions for if dates not selected
                screeningInterview: req.body.screeningInterview == "" ? null : req.body.screeningInterview,
                technicalInterview: req.body.technicalInterview == "" ? null : req.body.technicalInterview,
                finalInterview: req.body.finalInterview == "" ? null : req.body.finalInterview,
                jobOffer: req.body.jobOffer
            },
            {
                where: { id: req.body.id }
            }
        );
        res.send(updateJobCard);
    } catch (error) {
        res.status(404).send("Fail to update job card.");
    }
});

module.exports = router;
