migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cx6xk12ydxcpsvs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "db1hkzfh",
    "name": "shortened_url_string",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cx6xk12ydxcpsvs")

  // remove
  collection.schema.removeField("db1hkzfh")

  return dao.saveCollection(collection)
})
