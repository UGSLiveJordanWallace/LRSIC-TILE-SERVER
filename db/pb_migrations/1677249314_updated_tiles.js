migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hraiyh7g6ej2osu")

  // remove
  collection.schema.removeField("qovcgm0a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nbzhv17i",
    "name": "section",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "upper",
        "lower"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hraiyh7g6ej2osu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qovcgm0a",
    "name": "isUpper",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("nbzhv17i")

  return dao.saveCollection(collection)
})
