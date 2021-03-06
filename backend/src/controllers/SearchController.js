const parseStringAsArray = require('../utils/parseStringAsArray');
const Dev = require('../models/Dev');

module.exports = {
  async index(request, response) {
    const { latitude, longitude, techs } = request.query;
    const techsArray = parseStringAsArray(techs);
    const devs = await Dev.find({
      // Filter by technology
      techs: {
        $in: techsArray[0] !== '' ? techsArray : ['Javascript', 'ReactJS'],
      },
      // Filter by location
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 50000,
        },
      },
    });
    return response.json({ devs });
  },
};
