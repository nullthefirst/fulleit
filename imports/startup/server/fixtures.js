// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Eits } from '../../api/links/links.js';

Meteor.startup(() => {
  // if the Eits collection is empty
  if (Eits.find().count() === 0) {
    const data = [
      {
        firstName: 'Gordon',
        surname: 'Norman',
        country: 'Swaziland',
        age: '22',
        createdAt: new Date(),
      },
      {
        firstName: 'Lance',
        surname: 'Bogrol',
        country: 'Sudan',
        age: '30',
        createdAt: new Date(),
      },
      {
        firstName: 'Natalya',
        surname: 'Undergrowth',
        country: 'Angola',
        age: '26',
        createdAt: new Date(),
      },
      {
        firstName: 'Niles',
        surname: 'Peppertrout',
        country: 'Niger',
        age: '28',
        createdAt: new Date(),
      },
      {
        firstName: 'Linguina',
        surname: 'Nettlewater',
        country: 'Zambia',
        age: '21',
        createdAt: new Date(),
      },
      {
        firstName: 'Penny',
        surname: 'Tool',
        country: 'Egypt',
        age: '22',
        createdAt: new Date(),
      },
    ];

    data.forEach(eit => Eits.insert(eit));
  }
});
