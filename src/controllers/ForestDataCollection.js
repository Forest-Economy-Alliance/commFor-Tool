import {BSON} from 'realm';
import moment from 'moment';


export const addForestData = (
    realm,
    userId,
    siteName,
    location,legalOwner,
    question1,question2,question3,question4,question5,question6,
    question7,question8,question9,question10,question11,question12,
    question13,question14,question15,question16
  ) => {
    console.log(
        userId,
        siteName,
        location,legalOwner,
        question1,question2,question3,question4,question5,question6,
        question7,question8,question9,question10,question11,question12,
        question13,question14,question15,question16
    );
    realm.write(() => {
    realm.create(`forestDataCollections`, {
        _id: new BSON.ObjectId(),
        userId: JSON.stringify(userId),
        siteName: siteName,
        location:location,
        legalOwner:legalOwner,
    question1:question1,question2:question2,question3:question3,question4:question4,
    question5:question5,question6:question6,
    question7:question7,question8:question8,question9:question9,question10:question10,
    question11:question11,question12:question12,
    question13:question13,question14:question14,question15:question15,question16,
    date: moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a').toString(),
      });
      console.log('forest Data Collections Saved Successfully!');
    });
  };
  
