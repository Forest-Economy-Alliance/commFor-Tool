import {BSON} from 'realm';
import moment from 'moment';


export const addSpeciesData = (
    realm,
    userId,
    siteName,
    speciesName,
    type,
    armLength,
    imageData,
    location,
    focalLength
  ) => {
    console.log(
        userId,
        siteName,
        speciesName,
        type,
        armLength,
        location,
        focalLength
    );
    realm.write(() => {
    realm.create(`SpeciesInfos1`, {
        _id: new BSON.ObjectId(),
        userId: JSON.stringify(userId),
        siteName: siteName,
        speciesName:speciesName,
        type:type,
        armLength:armLength,
        imageData:imageData,
        focalLength:focalLength,
        location:location,
        date: moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a').toString(),
      });
      console.log('Species Info Saved Successfully!');
    });
  };
  
