import Tour from "../models/Tour.js";

// create new Tour
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body);

    try {
        const savedTour = await newTour.save();

        res.status(200).json({ success: true, message: "Sucessfully", data: savedTour });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed" });
    }
};

// update tour
export const updateTour = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, { $set: req.body}, { new: true });

        res.status(200).json({ success: true, message: "Successfully", data: updatedTour });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed" });
    }
};

// delete tour 
export const deleteTour = async (req, res) => {
    const id = req.params.id;

    try {
        await Tour.findByIdAndDelete(id);

        res.status(200).json({ success: true, message: "Successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed" });
    }
};

// get single tour
export const getSingleTour = async (req, res) => {
    const id = req.params.id;
    try {
        const tour = await Tour.findById(id);

        res.status(200).json({ success: true, message: "Sucessfully", data: tour });
    } catch (error) {
        res.status(404).json({ success: false, message: "Page not Found" });
    }
};

// get all tours
export const getAllTour = async (req, res) => {
    try {
        const tours = await Tour.find({});

        res.status(200).json({ success: true, message: "Successfully", data: tours });
    } catch (error) {
        res.status(404).json({ success: false, message: "Page not Found" });
    }
};

// get tour by search
export const getTourBySearch = async (req, res) => {
    const city = new RegExp(req.query.city, "i");
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parserInt(req.query.maxGroupSize);

    try {
        const tours = await Tour.find({
            city,
            distance: { $gte: distance },
            maxGroupSize: {$gte: maxGroupSize },
        });
        res.status(200).json({ success: true, message: "Successfully", data: tours });
    } catch (error) {
        res.status(404).json({ success: false, message: "Page not Found" });
    }
};

// get featured tour
export const getFeaturedTour = async (req, res) => {
    try {
        const tours = await Tour.find({ featured: true });

        res.status(200).json({ success: true, message: "Successfully", data: tours });
    } catch (error) {
        res.status(404).json({ success: false, message: "Failed" });
    }
};

// get tour counts
export const getTourCount = async (req, res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount();

        res.status(200).json({ success: true, message: "Successfully", data: tourCount });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed" });
    }
};