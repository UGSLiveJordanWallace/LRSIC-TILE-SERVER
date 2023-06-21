migrate((db) => {
  const collection = new Collection({
    "id": "hraiyh7g6ej2osu",
    "created": "2023-02-13 02:15:25.947Z",
    "updated": "2023-02-13 02:15:25.947Z",
    "name": "tiles",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lqmtlksz",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ltpgx6zm",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "v6h2aekh",
        "name": "row",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "96tsphw9",
        "name": "col",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("hraiyh7g6ej2osu");

  return dao.deleteCollection(collection);
})
