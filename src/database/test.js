const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  // insert datas in table

  await saveOrphanage(db, {
    lat: "-20.737700",
    lng: "-42.032096", 
    name: "Instituto São José",
    about: "Instituto São José é uma Instituição de acolhimento de crianças e adolescentes, do sexo feminino de 0 a 18 anos. Instituição Filantrópica e vive de doação.",
    whatsapp: "859595242",
    images: [
        "https://images.unsplash.com/photo-1527490087278-9c75be0b8052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    ].toString(),
    instructions: "Venha nos fazer uma visita e traga muito amor para nossas crianças!",
    opening_hours: "Horário de visitas das 8h até 18h",
    open_on_weekends: "0"
  })

  // consult datas in table
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  // consult orphanage for id
  const orphanage = await db.get('SELECT * FROM orphanages WHERE id = "1"');
  console.log(orphanage);

  /*// delete datas in table
  console.log(await db.run("DELETE FROM orphanages WHERE id = '6'"))
  console.log(await db.run("DELETE FROM orphanages WHERE id = '7'"))*/
});
