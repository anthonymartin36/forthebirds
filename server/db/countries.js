//create the db function that is similer to the birds db.
//this will reqest infor forom coutry table.


const getCountries = (db) => {
  return db('countries')
    .select('*')
}

module.exports = {
    getCountries
}
