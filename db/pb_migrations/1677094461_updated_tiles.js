migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hraiyh7g6ej2osu")

  collection.createRule = "@request.auth.id != \"null\" && @request.auth.tileEditor != false"
  collection.updateRule = "@request.auth.id != \"null\" && @request.auth.tileEditor != false"
  collection.deleteRule = "@request.auth.id != \"null\" && @request.auth.tileEditor != false"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hraiyh7g6ej2osu")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
