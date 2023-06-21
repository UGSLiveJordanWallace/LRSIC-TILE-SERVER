migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hraiyh7g6ej2osu")

  // remove
  collection.schema.removeField("dkauopkn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gomsaeeg",
    "name": "donor_firstname",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nixcgmpo",
    "name": "donor_lastname",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hraiyh7g6ej2osu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dkauopkn",
    "name": "year",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("gomsaeeg")

  // remove
  collection.schema.removeField("nixcgmpo")

  return dao.saveCollection(collection)
})
