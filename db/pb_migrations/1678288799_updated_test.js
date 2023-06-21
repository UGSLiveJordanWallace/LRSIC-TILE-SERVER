migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o4ivtd3ado6rhtm")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o4ivtd3ado6rhtm")

  collection.createRule = null

  return dao.saveCollection(collection)
})
