// Dependencies
import express from 'express';
import request from 'request';

//Utils
import utils from './utils';

// Express Router
const router = express.Router();

const endpoints = {
  search: 'https://api.mercadolibre.com/sites/MLA/search?limit=4&q=',
  items: 'https://api.mercadolibre.com/items/',
  categories: 'https://api.mercadolibre.com/categories/'
};

const author = {
  name: 'Maximiliano Athuel',
  lastname: 'Delgado'
};

// SEARCH
router.get('/items', (req, res) => {

  let query = req.query.search || '';

  let data = {
    author,
    categories: [],
    items: []
  };

  request({
      url: endpoints.search + query,
      json: true
  }, function (error, response, body) {
      if (!error && response.statusCode === 200) {

        //console.log(body);

        // Generate list of items
        for(let i = 0; i < body.results.length; i++) {
          let result = body.results[i];
          let item = utils.getItemProductResponse(result);

          data.items.push(item);
        }

        let categories = body.filters.filter(f => f.id === 'category')[0];

        if(categories) {
          let orderedCategories = categories.values.sort((a,b) => b.results - a.results);

          request({
            url: endpoints.categories + orderedCategories[0].id,
            json: true
          }, function (error, response, body) {
            body.path_from_root.map(v => data.categories.push(v.name));
            res.status(200).json(data);
          });

        } else {
          res.status(200).json(data);
        }

      }else{
        res.json(error);
      }
  });
});

// PRODUCT INFO
router.get('/items/:id', (req, res) => {

  let id = req.params.id;

  let data = {
    author,
    item: {},
  };

  request({
      uri: endpoints.items + id,
      json: true
  }, function (error, response, body) {
      if (!error && response.statusCode === 200) {

        //console.log(body);
        data.item = utils.getCompleteItemProductResponse(body);

        request({
          uri: endpoints.items + id + '/description',
          json: true
        }, function (error, response, body) {
          //console.log('[i] body:', body);
          let itemDesc = '';

          if(body.text != ""){
            itemDesc = body.text;
          }else if(body.plain_text != ""){
            itemDesc = body.plain_text;
          }

          //console.log('[i] itemDesc:', itemDesc);
          //return itemDesc;
          data.item.description = itemDesc;

          res.status(200).json(data);
        });

      }else{
        res.status(400).json(error);
      }
  });

});

export default router;
