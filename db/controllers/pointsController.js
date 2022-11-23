const  pointsDBmodel  = require('../queries/pointsDBmodel');
console.log(pointsDBmodel)
const addPoint = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res
      .status(401)
      .send({ message: 'You need to be logged in to create a point' });
  }

  const { title, description, imageURL, latitude, longitude } = req.body;
  if (!title || !description || !imageURL || !latitude || !longitude ) {
    return res
    .status(400)
    .send({ message: 'Please make sure your form is filled out'})
  }

  pointsDBmodel.addPoint(title, description, imageURL, latitude, longitude, pointID)
    .then(point => {
      res.status(201).send({ message: 'Created!', point });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error creating point', error: error.message });
    });
};

const getAll = (req, res) => {
  pointsDBmodel.getAll()
    .then(points => {
      if (points.length === 0) {
        return res.status(200).send({ message: 'No points available!' });
      }

      res.status(200).send({ message: 'List of all points!', points });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading points', error: error.message });
    });
};

const getById = (req, res) => {
  const { id } = req.params;

 pointsDBmodel.getById(id)
    .then(point => {
      if (!point) {
        return res.status(404).send({ message: 'Point not found!' });
      }

      res.status(200).send({ message: 'Here is your point!', point });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading point', error: error.message });
    });
};

const update = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { title, description, imageUrl, latitude , longitude } = req.body;
  if (!title|| !description|| !imageUrl || !latitude || !longitude) {
    return res
      .status(400)
      .send({ message: 'Please provide more input in the point form' });
  }

  const { id } = req.params;

  pointsDBmodel.update(title, description, imageUrl, latitude , longitude, id )
    .then(point => {
      if (!point) {
        return res.status(404).send({ message: 'Point not found!' });
      }

      res.status(201).send({ message: 'Updated!', point });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error updating point', error: error.message });
    });
};

const remove = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { id } = req.params;

  pointsDBmodel.remove(id)
    .then(() => {
      res.status(204).send();
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error deleting point', error: error.message });
    });
};

module.exports = { addPoint, getAll, getById, update, remove };
