migrate((db) => {
  const collection = new Collection({
    "id": "cx6xk12ydxcpsvs",
    "created": "2022-12-19 19:56:02.401Z",
    "updated": "2022-12-19 19:56:02.401Z",
    "name": "urls",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kr98nbuv",
        "name": "shortened_url",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nrwcch2s",
        "name": "full_url",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cx6xk12ydxcpsvs");

  return dao.deleteCollection(collection);
})
