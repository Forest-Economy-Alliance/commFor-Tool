import {BSON} from 'realm';
import moment from 'moment';

export const addSite = (realm, userId, siteName, dispatch, navigate) => {
  console.log(userId, siteName);
  realm.write(() => {
    realm.create(`FieldSites`, {
      _id: new BSON.ObjectId(),
      userId: JSON.stringify(userId),
      siteName: siteName,
      date: moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a').toString(),
    });
    console.log('Site Saved Successfully!');
    dispatch({type: 'SET_FIELD_SITE', payload: siteName});
    navigate('/home');
  });
};

export const getSites = async (realm, userId) => {
  try {
    console.log('User ID:', userId);
    const userIdStr = JSON.stringify(userId);
    const existingSites = realm
      .objects('FieldSites')
      .filtered('userId == $0', userIdStr);

    console.log('Existing Sites:', existingSites);

    // Optionally, convert existingSites to array to make debugging easier
    const sitesArray =
      existingSites.length > 0 ? existingSites.map(site => site.toJSON()) : [];
    console.log('Sites Array:', sitesArray);

    return sitesArray;
  } catch (error) {
    console.error('Error getting sites:', error);
  }
};
