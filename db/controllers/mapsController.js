const  mapsDBmodel  = require('../queries/mapsDBmodel');

const addMap = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res
      .status(401)
      .send({ message: 'You need to be logged in to create a map' });
  }

  const { owner_id , name  } = req.body;
  if (!owner_id|| !name ) {
    return res
    .status(400)
    .send({ message: 'Please make sure your form is filled out'})
  }

  mapsDBmodel.addMap(owner_id , name , mapID)
    .then(map => {
      res.status(201).send({ message: 'Created!', map });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error creating map', error: error.message });
    });
};

const getAll = (req, res) => {
  mapsDBmodel.getAll()
    .then(maps => {
      if (maps.length === 0) {
        return res.status(200).send({ message: 'No maps available!' });
      }

      res.status(200).send({ message: 'List of all maps!', maps });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading maps', error: error.message });
    });
};

const getById = (req, res) => {
  const { id } = req.params;

 mapsDBmodel.getById(id)
    .then(map => {
      if (!map) {
        return res.status(404).send({ message: 'map not found!' });
      }

      res.status(200).send({ message: 'Here is your map!', map });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading map', error: error.message });
    });
};

const update = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { owner_id , name , mapID } = req.body;
  if (!owner_id|| !name || !mapID) {
    return res
      .status(400)
      .send({ message: 'Please provide more input in the map form' });
  }

  const { id } = req.params;

  mapsDBmodel.update(owner_id , name  , mapID, id )
    .then(map => {
      if (!map) {
        return res.status(404).send({ message: 'map not found!' });
      }

      res.status(201).send({ message: 'Updated!', map });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error updating map', error: error.message });
    });
};

const remove = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { id } = req.params;

  mapsDBmodel.remove(id)
    .then(() => {
      res.status(204).send();
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error deleting map', error: error.message });
    });
};

module.exports = { addMap, getAll, getById, update, remove };
