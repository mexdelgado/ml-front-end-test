// Dependencies
import express from 'express';
import request from 'request';
import posts from './data/posts';

// Express Router
const router = express.Router();

const endpoints = {
  search: 'https://api.mercadolibre.com/sites/MLA/search?limit=4&q=',
  items: 'https://api.mercadolibre.com/items/',
  categories: 'https://api.mercadolibre.com/categories/'
};

router.get('/blog/posts', (req, res) => res.json(posts));

router.get('/items', (req, res) => {
  request({
      url: endpoints.search + "arduino",
      json: true
  }, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        res.json({
          response: body.results
        });
      }
  });
});

export default router;
