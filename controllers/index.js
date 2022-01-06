const Destination = require('../models/destination');

const createDestination = async (req, res) => {
  try {
    const destination = await new Destination(req.body);
    await destination.save();
    return res.status(201).json({
      destination
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    return res.status(200).json({ destinations });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getDestinationById = async (req, res) => {
  try {
    const { _id } = req.params;
    const destination = await Destination.findById(_id);
    if (destination) {
      return res.status(200).json({ destination });
    }
    return res
      .status(404)
      .send('Destination with the specified ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateDestination = async (req, res) => {
  try {
    const { _id } = req.params;
    await Destination.findByIdAndUpdate(
      _id,
      req.body,
      { new: true },
      (err, destination) => {
        if (err) {
          res.status(500).send(err);
        }
        if (!destination) {
          res.status(500).send('Destination not found!');
        }
        return res.status(200).json(destination);
      }
    );
  } catch (error) {
    // return res.status(500).send(error.message);
  }
};

const deleteDestination = async (req, res) => {
  try {
    const { _id } = req.params;
    const deleted = await Destination.findByIdAndDelete(_id);
    if (deleted) {
      return res.status(200).send('Destination deleted');
    }
    throw new Error('Destination not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createDestination,
  getAllDestinations,
  getDestinationById,
  updateDestination,
  deleteDestination
};
