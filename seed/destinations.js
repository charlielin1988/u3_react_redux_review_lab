const db = require('../db');
const Destination = require('../models/destination');

const main = async () => {
  const destinations = [
    {
      name: 'Bellgally Castle, County Antrim',
      description: `Said to be one of the most haunted places in all of Ulster, the picturesque Ballygally Castle, which sits right on the coast, is said to be haunted by several different ghosts. The most well-known of these entities is the ghost of Lady Isabella Shaw. This so-called 'Ghost of Ballygally' has a penchant for knocking on bedroom doors in the dead of night. Though restless, Lady Isabella is said to be a friendly ghost, who roams the halls looking for the child who was taken from her at birth by her cruel husband, Lord James. Once in possession of his heir, legend has it that Lord James locked his wife away in a tower, where she fell or was pushed  to her death some time later. Today, visitors can climb a spiral staircase to view the 'Ghost Room' where Lady Isabella lived out her tragic final days.`,
      image: `https://www.authenticvacations.com/wp-content/uploads/2018/11/850x400_Ballygally3.jpg`
    },
    {
      name: 'Loftus Hall, County Wexford',
      description: `Known as the most haunted house in Ireland and said to be haunted by the Devil himself, the fate of Loftus Hall as one of the most haunted places in Ireland was perhaps set in stone due to its construction in 1350 during the time of the Black Death. However, the legend of Loftus Hall actually dates from the 18th Century, when a mysterious stranger came calling on the Tottenham family, who occupied the house at the time. Legend has it that the Tottenham daughter, Anne, soon realised that this mysterious stranger was none other than the Devil, due to the fact that he had a cloven hoof in place of a foot. Soon after, the mysterious stranger disappeared when he flew through the roof. Anne, having brought shame on the family due to her supposed hysterics, was subsequently locked away in her room where she died several years later. It is said that Anne haunts Loftus Hall, which is said to be a hive of poltergeist activity, to this very day. The Devil also left his mark on Loftus Hall, via a mysterious mark on the roof, which visitors can view via a pre-booked guided tour of the hall.`,
      image:
        'https://www.authenticvacations.com/wp-content/uploads/2018/11/850x400_LoftusCastle2.jpg'
    }
  ];
  await Destination.insertMany(destinations);
  console.log('Gathering EMF Readings');
};
const run = async () => {
  await main();
  db.close();
};
run();
