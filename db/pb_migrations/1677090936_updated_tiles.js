migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hraiyh7g6ej2osu")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hraiyh7g6ej2osu")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
