const  pointsDBmodel  = require('../queries/pointsDBmodel');

const addPoint = (req, res) => {

  const { user_id } = req.session;
  if (!user_id) {
    return res
      .status(401)
      .send({ message: 'You need to be logged in to create a point' });
  }

  const { point_title, point_description, point_image_url, lat, long } = req.body;
  console.log(req.body)
  if (!point_title || !point_description || !point_image_url || !lat || !long ) {
    return res
    .status(400)
    .send({ message: 'Please make sure your form is filled out'})
  }

let currentMapId = req.headers.referer.charAt(req.headers.referer.length -1)
let currentUser = req.session.user_id
let point = {
   map_id: currentMapId,
   user_id: currentUser,
   latitude: lat,
   longitude:long,
   title: point_title,
   description: point_description,
   image_url: point_image_url}
  pointsDBmodel.addPoint(point)
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
