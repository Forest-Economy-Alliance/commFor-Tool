import {BSON} from 'realm';
import moment from 'moment';


export const addcommunityDataCollections = (
    realm,
    userId,
    siteName,
    location,
    question1,question2,question3,question4,question5,question6,
    question7,question8,question9,question10,question11,question12,
    question13,question14,question15,question16,
    question17,question18,question19,question20,question21,question22,
    question23,question24,question25,question26,question27
  ) => {
    console.log(
        userId,
        siteName,
        location,
        question1,question2,question3,question4,question5,question6,
        question7,question8,question9,question10,question11,question12,
        question13,question14,question15,question16,
        question17,question18,question19,question20,question21,question22,
        question23,question24,question25,question26,question27
    );
    realm.write(() => {
    realm.create(`communityDataCollections`, {
        _id: new BSON.ObjectId(),
        userId: JSON.stringify(userId),
        siteName: siteName,
        location:location,
        question1,question2,question3,question4,question5,question6,
        question7,question8,question9,question10,question11,question12,
        question13,question14,question15,question16,
        question17,question18,question19,question20,question21,question22,
        question23,question24,question25,question26,question27,
    date: moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a').toString(),
      });
      console.log('community Data Collections Saved Successfully!');
    });
  };
  
