migrate((db) => {
  const collection = new Collection({
    "id": "ofgxh5ysvttyckg",
    "created": "2023-03-15 03:45:26.656Z",
    "updated": "2023-03-15 03:45:26.656Z",
    "name": "test",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qxtdwphj",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dejzqc3k",
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
        "id": "zorf6d65",
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
        "id": "gufj2tbh",
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
        "id": "fklbolks",
        "name": "donor_firstname",
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
        "id": "vnxmolnu",
        "name": "donor_lastname",
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
        "id": "nrhtdbdw",
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
      },
      {
        "system": false,
        "id": "erspsuzx",
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
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "@request.auth.id != \"null\" && @request.auth.tileEditor != false",
    "updateRule": "@request.auth.id != \"null\" && @request.auth.tileEditor != false",
    "deleteRule": "@request.auth.id != \"null\" && @request.auth.tileEditor != false",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ofgxh5ysvttyckg");

  return dao.deleteCollection(collection);
})
