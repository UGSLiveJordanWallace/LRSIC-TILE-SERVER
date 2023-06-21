migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("04qrcjisjc5gkma");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "04qrcjisjc5gkma",
    "created": "2023-03-09 22:36:58.703Z",
    "updated": "2023-03-10 03:37:26.064Z",
    "name": "test",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "civrcahr",
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
        "id": "kuq3hiir",
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
        "id": "n4jhvpn8",
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
        "id": "s9dyubu2",
        "name": "col",
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
        "id": "jqsufe7e",
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
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
