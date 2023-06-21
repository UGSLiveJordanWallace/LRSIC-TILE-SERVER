migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hraiyh7g6ej2osu")

  collection.createRule = "@request.auth.id != \"null\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hraiyh7g6ej2osu")

  collection.createRule = null

  return dao.saveCollection(collection)
})
