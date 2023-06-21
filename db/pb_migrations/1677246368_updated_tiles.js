migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hraiyh7g6ej2osu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a8wsexiq",
    "name": "block",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "north",
        "south",
        "east",
        "west"
      ]
    }
  }))

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hraiyh7g6ej2osu")

  // remove
  collection.schema.removeField("a8wsexiq")

  // remove
  collection.schema.removeField("qovcgm0a")

  return dao.saveCollection(collection)
})
