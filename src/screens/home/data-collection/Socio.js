import React, { useState ,useEffect,useCallback} from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CustomDropdown from '../../../components/CustomDropdown';
import CustomButton from '../../../components/CustomButton';
import MultiSelectComponent from '../../../components/MultiSelectDropdown';
import { useNavigate } from 'react-router-native';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch, useSelector} from 'react-redux';
import {useRealm} from '@realm/react';
import { addcommunityDataCollections } from '../../../controllers/CommunityDataCollection';

function Socio() {
    const navigate = useNavigate()
    const [userLocation, setUserLocation] = useState([]);
    const realm = useRealm();
    const user = useSelector(state => state.userInfo);
    const [isLegalOwnerInputBoxVisible, setLegalOwnerInputBoxVisible] =
    useState(false);
    const [isLegalOwnerInputBoxVisible1, setLegalOwnerInputBoxVisible1] =
    useState(false);
    const [isLegalOwnerInputBoxVisible2, setLegalOwnerInputBoxVisible2] =
    useState(false);
    const [
        individualsCommunititesHarvestProductsValue,
        setindividualsCommunititesHarvestProductsValue
      ] = useState(null);
      const [
        individualsCommunititesHarvestProductsValue1,
        setindividualsCommunititesHarvestProductsValue1
      ] = useState(null);
      const [
        individualsCommunititesHarvestProductsValue2,
        setindividualsCommunititesHarvestProductsValue2
      ] = useState(null);
      const [
        individualsCommunititesHarvestProductsValue3,
        setindividualsCommunititesHarvestProductsValue3
      ] = useState(null);
      const [
        individualsCommunititesHarvestProductsValue4,
        setindividualsCommunititesHarvestProductsValue4
      ] = useState([]);
      const [
        otherSourceOfIncome,setOtherSourceOfIncome
      ] = useState('')
      const [
        individualsCommunititesHarvestProductsValue5,
        setindividualsCommunititesHarvestProductsValue5
      ] = useState(null);
      const [
        individualsCommunititesHarvestProductsValue6,
        setindividualsCommunititesHarvestProductsValue6
      ] = useState(null);
      const [
        individualsCommunititesHarvestProductsValue7,
        setindividualsCommunititesHarvestProductsValue7
      ] = useState(null);
      const [
        individualsCommunititesHarvestProductsValue8,
        setindividualsCommunititesHarvestProductsValue8
      ] = useState(null);
      const [
        individualsCommunititesHarvestProductsValue9,
        setindividualsCommunititesHarvestProductsValue9
      ] = useState(null);
      const [
        individualsCommunititesHarvestProductsValue10,
        setindividualsCommunititesHarvestProductsValue10
      ] = useState(null);
      const [
        individualsCommunititesHarvestProductsValue11,
        setindividualsCommunititesHarvestProductsValue11
      ] = useState(null);
      const [
        individualsCommunititesHarvestProductsValue12,
        setindividualsCommunititesHarvestProductsValue12
      ] = useState(null);
      const [
        individualsCommunititesHarvestProductsValue13,
        setindividualsCommunititesHarvestProductsValue13
      ] = useState(null);
      const [
        individualsCommunititesHarvestProductsValue14,
        setindividualsCommunititesHarvestProductsValue14
      ] = useState(null);
      const [
        individualsCommunititesHarvestProductsValue15,
        setindividualsCommunititesHarvestProductsValue15
      ] = useState(null);
      const [
        individualsCommunititesHarvestProductsValue16,
        setindividualsCommunititesHarvestProductsValue16
      ] = useState(null);
      const [
        individualsCommunititesHarvestProductsValue17,
        setindividualsCommunititesHarvestProductsValue17
      ] = useState(null);
      const [
        individualsCommunititesHarvestProductsValue26,
        setindividualsCommunititesHarvestProductsValue26
      ] = useState(null);
      const [
        individualsCommunititesHarvestProductsValue18,
        setindividualsCommunititesHarvestProductsValue18
      ] = useState(null);
      const [
        individualsCommunititesHarvestProductsValue19,
        setindividualsCommunititesHarvestProductsValue19
      ] = useState(null);
      const [
        individualsCommunititesHarvestProductsValue20,
        setindividualsCommunititesHarvestProductsValue20
      ] = useState(null);
      const [
        individualsCommunititesHarvestProductsValue21,
        setindividualsCommunititesHarvestProductsValue21
      ] = useState(null);
      const [
        individualsCommunititesHarvestProductsValue22,
        setindividualsCommunititesHarvestProductsValue22
      ] = useState(null);
      const [
        individualsCommunititesHarvestProductsValue23,
        setindividualsCommunititesHarvestProductsValue23
      ] = useState([0,0,0]);
      console.log(individualsCommunititesHarvestProductsValue23)

      const handleElectionYear = (index, value) => {
        setindividualsCommunititesHarvestProductsValue23(prevState => {
          const newState = [...prevState];
          newState[index] = value;
          return newState;
        });
      };

      const [
        individualsCommunititesHarvestProductsValue24,
        setindividualsCommunititesHarvestProductsValue24
      ] = useState([]);
      const [otherActiveOrganization,setOtherActiveOrganization] = useState('')
      const [
        individualsCommunititesHarvestProductsValue25,
        setindividualsCommunititesHarvestProductsValue25
      ] = useState([]);
      const [otherOrganizationCovers,setOtherOrganizationCover] = useState('');

      const individualsCommunititesHarvestProducts4 = [
        { label: 'Sale of forest products', value: 'Sale of forest products' },
        { label: 'Agriculture and crop production', value: 'Agriculture and crop production' },
        { label: 'Livestock rearing and animal husbandry', value: 'Livestock rearing and animal husbandry' },
        { label: 'Wage labour (local, seasonal, migratory)', value: 'Wage labour (local, seasonal, migratory)' },
        { label: 'Artisanal production and manufacturing', value: 'Artisanal production and manufacturing' },
        { label: 'Trade, business, or services (shop owner, carpenter, etc.)', value: 'Trade, business, or services (shop owner, carpenter, etc.)' },
        { label: 'Salary (regular)', value: 'Salary (regular)' },
        { label: 'Pensions and Remittances', value: 'Pensions and Remittances' },
        { label: 'Other', value: 'Other' }
      ];
      const individualsCommunititesHarvestProducts6 = [
        { label: 'Mostly inward migration', value: 'Mostly inward migration' },
        { label: 'Mostly outward migration', value: 'Mostly outward migration' },
        { label: 'Both types are present', value: 'Both types are present' },
        { label: 'No significant migration', value: 'No significant migration' },
      ];
      const individualsCommunititesHarvestProducts16 = [
        { label: 'Increased', value: 'Increased' },
        { label: 'Decreased', value: 'Decreased' },
        { label: 'No change', value: 'No change' },
      ];
      const individualsCommunititesHarvestProducts17 = [
        { label: 'Increased', value: 'Increased' },
        { label: 'Decreased', value: 'Decreased' },
        { label: 'No change', value: 'No change' },
      ];
      const individualsCommunititesHarvestProducts23 = [
        { label: 'Local (year)', value: 'Local (year)' },
        { label: 'Regional (year)', value: 'Regional (year)' },
        { label: 'National (year)', value: 'National (year)' },
      ];
      const individualsCommunititesHarvestProducts24 = [
        { label: 'Community organization', value: 'Community organization' },
        { label: 'Government agency', value: 'Government agency' },
        { label: 'Private company', value: 'Private company' },
        { label: 'Religious institution', value: 'Religious institution' },
        { label: 'Non-government organization', value: 'Non-government organization' },
        { label: 'Other', value: 'Other' },
      ];
      const individualsCommunititesHarvestProducts25 = [
        { label: 'Forest', value: 'Forest' },
        { label: 'Agriculture', value: 'Agriculture' },
        { label: 'Livestock', value: 'Livestock' },
        { label: 'Health', value: 'Health' },
        { label: 'Education', value: 'Education' },
        { label: 'Credit', value: 'Credit' },
        { label: 'Other', value: 'Other' },
      ];
    const setNewindividualsCommunititesHarvestProductsValue = data => {
        setindividualsCommunititesHarvestProductsValue(data);
      };
      const setNewindividualsCommunititesHarvestProductsValue1 = data => {
        setindividualsCommunititesHarvestProductsValue1(data);
      };
      const setNewindividualsCommunititesHarvestProductsValue2 = data => {
        setindividualsCommunititesHarvestProductsValue2(data);
      };
      const setNewindividualsCommunititesHarvestProductsValue3 = data => {
        setindividualsCommunititesHarvestProductsValue3(data);
      };
      const setNewindividualsCommunititesHarvestProductsValue4 = data => {
        console.log(data, "data=-------------------------------------------")
        if (data[data.length - 1] === 'Other') {
          setindividualsCommunititesHarvestProductsValue4(['Other']);
          setLegalOwnerInputBoxVisible(true);
        } else {
          setLegalOwnerInputBoxVisible(false);
          setindividualsCommunititesHarvestProductsValue4(data);
        }
      };
      const setNewindividualsCommunititesHarvestProductsValue24 = data => {
        console.log(data, "data=-------------------------------------------")
        if (data[data.length - 1] === 'Other') {
          setindividualsCommunititesHarvestProductsValue24(['Other']);
          setLegalOwnerInputBoxVisible1(true);
        } else {
          setLegalOwnerInputBoxVisible1(false);
          setindividualsCommunititesHarvestProductsValue24(data);
        }
      };
      const setNewindividualsCommunititesHarvestProductsValue25 = data => {
        console.log(data, "data--------------------------------------------")
        if (data[data.length - 1] === 'Other') {
          setindividualsCommunititesHarvestProductsValue25(['Other']);
          setLegalOwnerInputBoxVisible2(true);
        } else {
          setLegalOwnerInputBoxVisible2(false);
          setindividualsCommunititesHarvestProductsValue25(data);
        }
      };

      const setNewindividualsCommunititesHarvestProductsValue5 = data => {
        setindividualsCommunititesHarvestProductsValue5(data);
      };
      const setNewindividualsCommunititesHarvestProductsValue6 = data => {
        setindividualsCommunititesHarvestProductsValue6(data);
      };
      const setNewindividualsCommunititesHarvestProductsValue7 = data => {
        setindividualsCommunititesHarvestProductsValue7(data);
      };
      const setNewindividualsCommunititesHarvestProductsValue8 = data => {
        setindividualsCommunititesHarvestProductsValue8(data);
      };
      const setNewindividualsCommunititesHarvestProductsValue9 = data => {
        setindividualsCommunititesHarvestProductsValue9(data);
      };
      const setNewindividualsCommunititesHarvestProductsValue10 = data => {
        setindividualsCommunititesHarvestProductsValue10(data);
      };
      const setNewindividualsCommunititesHarvestProductsValue11 = data => {
        setindividualsCommunititesHarvestProductsValue11(data);
      };
      const setNewindividualsCommunititesHarvestProductsValue12 = data => {
        setindividualsCommunititesHarvestProductsValue12(data);
      };
      const setNewindividualsCommunititesHarvestProductsValue13 = data => {
        setindividualsCommunititesHarvestProductsValue13(data);
      };
      const setNewindividualsCommunititesHarvestProductsValue14 = data => {
        setindividualsCommunititesHarvestProductsValue14(data);
      };
      const setNewindividualsCommunititesHarvestProductsValue15 = data => {
        setindividualsCommunititesHarvestProductsValue15(data);
      };
      const setNewindividualsCommunititesHarvestProductsValue16 = data => {
        setindividualsCommunititesHarvestProductsValue16(data);
      };
      const setNewindividualsCommunititesHarvestProductsValue17 = data => {
        setindividualsCommunititesHarvestProductsValue17(data);
      };
      const setNewindividualsCommunititesHarvestProductsValue26 = data => {
        setindividualsCommunititesHarvestProductsValue26(data);
      };
      const setNewindividualsCommunititesHarvestProductsValue18 = data => {
        setindividualsCommunititesHarvestProductsValue18(data);
      };
      const setNewindividualsCommunititesHarvestProductsValue19 = data => {
        setindividualsCommunititesHarvestProductsValue19(data);
      };
      const setNewindividualsCommunititesHarvestProductsValue20 = data => {
        setindividualsCommunititesHarvestProductsValue20(data);
      };
      const setNewindividualsCommunititesHarvestProductsValue21 = data => {
        setindividualsCommunititesHarvestProductsValue21(data);
      };
      const setNewindividualsCommunititesHarvestProductsValue22 = data => {
        setindividualsCommunititesHarvestProductsValue22(data);
      };
      const setNewindividualsCommunititesHarvestProductsValue23 = data => {
        setindividualsCommunititesHarvestProductsValue23(data);
      };

      useEffect(() => {
        // console.log('gettingg location---->>>');
        Geolocation.getCurrentPosition(info => {
          // console.log('user Location--------->', info);
          let loc = [];
          loc.push(info?.coords?.latitude);
          loc.push(info?.coords?.longitude);
          setUserLocation(loc);
        });
      }, []);

const handleSubmit = useCallback(() => {
  console.log("submitting",individualsCommunititesHarvestProductsValue,individualsCommunititesHarvestProductsValue1,
    individualsCommunititesHarvestProductsValue2,individualsCommunititesHarvestProductsValue3,
    individualsCommunititesHarvestProductsValue4,individualsCommunititesHarvestProductsValue5,individualsCommunititesHarvestProductsValue6,individualsCommunititesHarvestProductsValue7,
    individualsCommunititesHarvestProductsValue8,individualsCommunititesHarvestProductsValue9,
    individualsCommunititesHarvestProductsValue10,individualsCommunititesHarvestProductsValue11,individualsCommunititesHarvestProductsValue12,
    individualsCommunititesHarvestProductsValue13,individualsCommunititesHarvestProductsValue14,
    individualsCommunititesHarvestProductsValue15,
    individualsCommunititesHarvestProductsValue16,individualsCommunititesHarvestProductsValue17,
    individualsCommunititesHarvestProductsValue18,individualsCommunititesHarvestProductsValue19,
    individualsCommunititesHarvestProductsValue20,individualsCommunititesHarvestProductsValue21,
    individualsCommunititesHarvestProductsValue22,individualsCommunititesHarvestProductsValue23,
    individualsCommunititesHarvestProductsValue24,individualsCommunititesHarvestProductsValue25,individualsCommunititesHarvestProductsValue26

  )
        addcommunityDataCollections(
          realm,
          user?.user?.id,
          user?.fieldSite,
          JSON.stringify(userLocation),
          JSON.stringify(individualsCommunititesHarvestProductsValue),
          JSON.stringify(individualsCommunititesHarvestProductsValue1),
          JSON.stringify(individualsCommunititesHarvestProductsValue2),
          JSON.stringify(individualsCommunititesHarvestProductsValue3),
          JSON.stringify(individualsCommunititesHarvestProductsValue4[0]=='Other' ?otherSourceOfIncome : individualsCommunititesHarvestProductsValue4),
          JSON.stringify(individualsCommunititesHarvestProductsValue5),
          JSON.stringify(individualsCommunititesHarvestProductsValue6),
          JSON.stringify(individualsCommunititesHarvestProductsValue7),
          JSON.stringify(individualsCommunititesHarvestProductsValue8),
          JSON.stringify(individualsCommunititesHarvestProductsValue9),
          JSON.stringify(individualsCommunititesHarvestProductsValue10),
          JSON.stringify(individualsCommunititesHarvestProductsValue11),
          JSON.stringify(individualsCommunititesHarvestProductsValue12),
          JSON.stringify(individualsCommunititesHarvestProductsValue13),
          JSON.stringify(individualsCommunititesHarvestProductsValue14),
          JSON.stringify(individualsCommunititesHarvestProductsValue15),
          JSON.stringify(individualsCommunititesHarvestProductsValue16),
          JSON.stringify(individualsCommunititesHarvestProductsValue17),
          JSON.stringify(individualsCommunititesHarvestProductsValue18),
          JSON.stringify(individualsCommunititesHarvestProductsValue19),
          JSON.stringify(individualsCommunititesHarvestProductsValue20),
          JSON.stringify(individualsCommunititesHarvestProductsValue21),
          JSON.stringify(individualsCommunititesHarvestProductsValue22),
          JSON.stringify(individualsCommunititesHarvestProductsValue23),
          JSON.stringify(individualsCommunititesHarvestProductsValue24[0]=='Other' ? otherActiveOrganization :individualsCommunititesHarvestProductsValue24 ),
          JSON.stringify(individualsCommunititesHarvestProductsValue25[0]=='Other' ? otherOrganizationCovers : individualsCommunititesHarvestProductsValue25),
          JSON.stringify(individualsCommunititesHarvestProductsValue26),
        );
      }, [
        realm,
        user?.user?.id,
        user?.fieldSite,
        JSON.stringify(userLocation),
        JSON.stringify(individualsCommunititesHarvestProductsValue),
        JSON.stringify(individualsCommunititesHarvestProductsValue1),
        JSON.stringify(individualsCommunititesHarvestProductsValue2),
        JSON.stringify(individualsCommunititesHarvestProductsValue3),
        JSON.stringify(individualsCommunititesHarvestProductsValue4),
        JSON.stringify(individualsCommunititesHarvestProductsValue5),
        JSON.stringify(individualsCommunititesHarvestProductsValue6),
        JSON.stringify(individualsCommunititesHarvestProductsValue7),
        JSON.stringify(individualsCommunititesHarvestProductsValue8),
        JSON.stringify(individualsCommunititesHarvestProductsValue9),
        JSON.stringify(individualsCommunititesHarvestProductsValue10),
        JSON.stringify(individualsCommunititesHarvestProductsValue11),
        JSON.stringify(individualsCommunititesHarvestProductsValue12),
        JSON.stringify(individualsCommunititesHarvestProductsValue13),
        JSON.stringify(individualsCommunititesHarvestProductsValue14),
        JSON.stringify(individualsCommunititesHarvestProductsValue15),
        JSON.stringify(individualsCommunititesHarvestProductsValue16),
        JSON.stringify(individualsCommunititesHarvestProductsValue17),
        JSON.stringify(individualsCommunititesHarvestProductsValue18),
        JSON.stringify(individualsCommunititesHarvestProductsValue19),
        JSON.stringify(individualsCommunititesHarvestProductsValue20),
        JSON.stringify(individualsCommunititesHarvestProductsValue21),
        JSON.stringify(individualsCommunititesHarvestProductsValue22),
        JSON.stringify(individualsCommunititesHarvestProductsValue23),
        JSON.stringify(individualsCommunititesHarvestProductsValue24[0]=='Other' ? otherActiveOrganization :individualsCommunititesHarvestProductsValue24 ),
        JSON.stringify(individualsCommunititesHarvestProductsValue25[0]=='Other' ? otherOrganizationCovers : individualsCommunititesHarvestProductsValue25),
        JSON.stringify(individualsCommunititesHarvestProductsValue26),
      ]);
    
      useEffect(() => {
        realm.subscriptions
          .update(mutableSubs => {
            mutableSubs.add(realm.objects('communityDataCollections'));
          })
          .catch(err => {
            console.error('Failed to update subscriptions:', err);
          });
      }, [realm]);
  console.log(individualsCommunititesHarvestProductsValue25,individualsCommunititesHarvestProductsValue25[0]=='Other')
  return (
    <KeyboardAwareScrollView>

    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.9, paddingLeft: 10, paddingRight: 10 }}>
        <View>
          <Text style={styles.formQuesTitle}>
          How long does it take to reach the nearest market using the most common method of transportation? It can be a combination of methods.
          </Text>
          <View style={styles.dropDownView}>
          <TextInput
              style={styles.inputContainer}
              placeholder='Distance covered in minutes'
              placeholderTextColor="#000"
              value={individualsCommunititesHarvestProductsValue}
              onChangeText={t => setNewindividualsCommunititesHarvestProductsValue(t)}
            />
          </View>
        </View>
        <View style={{marginTop:15}}>
          <Text style={styles.formQuesTitle}>
          How long does it take to reach the administrative centre using the most common method of transportation? It can be a combination of methods.
          </Text>
          <View style={styles.dropDownView}>
          <TextInput
              style={styles.inputContainer} 
              placeholder='Distance covered in minutes'
              placeholderTextColor="#000"
              value={individualsCommunititesHarvestProductsValue1}
              onChangeText={t => setNewindividualsCommunititesHarvestProductsValue1(t)}
            />
          </View>
        </View>
        <View style={{marginTop:15}}>
          <Text style={styles.formQuesTitle}>
          What is the total number of households in the settlement(s)?
          </Text>
          <View style={styles.dropDownView}>
          <TextInput
              style={styles.inputContainer} 
              placeholderTextColor="#000"
              value={individualsCommunititesHarvestProductsValue2}
              onChangeText={t => setNewindividualsCommunititesHarvestProductsValue2(t)}
            />
          </View>
        </View>
        <View style={{marginTop:15}}>
          <Text style={styles.formQuesTitle}>
          What proportion of children between 6 and 14 years of age are in school? 
          </Text>
          <View style={styles.dropDownView}>
          <TextInput
              style={styles.inputContainer} 
              placeholderTextColor="#000"
              value={individualsCommunititesHarvestProductsValue3}
              onChangeText={t => setNewindividualsCommunititesHarvestProductsValue3(t)}
            />
          </View>
        </View>
        <View style={{marginTop:15}}>
          <Text style={styles.formQuesTitle}>
          What is the number of literate men individuals (above the age of 14) 
          </Text>
          <View style={styles.dropDownView}>
          <TextInput
              style={styles.inputContainer} 
              placeholderTextColor="#000"
              value={individualsCommunititesHarvestProductsValue3}
              onChangeText={t => setNewindividualsCommunititesHarvestProductsValue3(t)}
            />
          </View>
        </View>
        <View style={{marginTop:15}}>
          <Text style={styles.formQuesTitle}>
          What is the number of literate women individuals (above the age of 14) 
          </Text>
          <View style={styles.dropDownView}>
          <TextInput
              style={styles.inputContainer} 
              placeholderTextColor="#000"
              value={individualsCommunititesHarvestProductsValue3}
              onChangeText={t => setNewindividualsCommunititesHarvestProductsValue3(t)}
            />
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
            <Text style={styles.formQuesTitle}>
            Which of the following sources do households report as a major source of income (defined as more than 20 percent of total annual cash income)?
            </Text>
            <View style={styles.dropDownView}>
              <MultiSelectComponent
                data={individualsCommunititesHarvestProducts4}
                setValue={setNewindividualsCommunititesHarvestProductsValue4}
                value={individualsCommunititesHarvestProductsValue4}
              />
            </View>
          </View>
          {isLegalOwnerInputBoxVisible && (
            <TextInput
              style={styles.inputContainer}
              placeholder="source of income"
              placeholderTextColor="#000"
              value={otherSourceOfIncome}
              onChangeText={t => setOtherSourceOfIncome(t)}
            />
          )}
          <View style={{marginTop:15}}>
          <Text style={styles.formQuesTitle}>
          What is the number of households where at least one member of the family has the place of regular work outside the settlement?
          </Text>
          <View style={styles.dropDownView}>
          <TextInput
              style={styles.inputContainer} 
              placeholderTextColor="#000"
              value={individualsCommunititesHarvestProductsValue5}
              onChangeText={t => setNewindividualsCommunititesHarvestProductsValue5(t)}
            />
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
            <Text style={styles.formQuesTitle}>
            Over the last 10 years, what is the status of migration?
            </Text>
            <View style={styles.dropDownView}>
              <CustomDropdown
                data={individualsCommunititesHarvestProducts6}
                setValue={setNewindividualsCommunititesHarvestProductsValue6}
                value={individualsCommunititesHarvestProductsValue6}
              />
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.formQuesTitle}>
            How many socio-cultural identities are present in the site?
            </Text>
            <View style={styles.dropDownView}>
          <TextInput
              style={styles.inputContainer} 
              placeholderTextColor="#000"
              value={individualsCommunititesHarvestProductsValue7}
              onChangeText={t => setNewindividualsCommunititesHarvestProductsValue7(t)}
            />
          </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.formQuesTitle}>
            What is the number of households in the largest socio-cultural identity?
            </Text>
            <View style={styles.dropDownView}>
          <TextInput
              style={styles.inputContainer} 
              placeholderTextColor="#000"
              value={individualsCommunititesHarvestProductsValue8}
              onChangeText={t => setNewindividualsCommunititesHarvestProductsValue8(t)}
            />
          </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.formQuesTitle}>
            How many households are regarded as wealthy?
            </Text>
            <View style={styles.dropDownView}>
          <TextInput
              style={styles.inputContainer} 
              placeholderTextColor="#000"
              value={individualsCommunititesHarvestProductsValue9}
              onChangeText={t => setNewindividualsCommunititesHarvestProductsValue9(t)}
            />
          </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.formQuesTitle}>
            How many households are regarded as poor?
            </Text>
            <View style={styles.dropDownView}>
          <TextInput
              style={styles.inputContainer} 
              placeholderTextColor="#000"
              value={individualsCommunititesHarvestProductsValue10}
              onChangeText={t => setNewindividualsCommunititesHarvestProductsValue10(t)}
            />
          </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.formQuesTitle}>
            In comparison to the income of the poorest household, how much higher is the income of the richest household? 
            </Text>
            <View style={styles.dropDownView}>
          <TextInput
              style={styles.inputContainer} 
              placeholderTextColor="#000"
              placeholder='how many times'
              value={individualsCommunititesHarvestProductsValue11}
              onChangeText={t => setNewindividualsCommunititesHarvestProductsValue11(t)}
            />
          </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.formQuesTitle}>
            How many households own agriculture land?
            </Text>
            <View style={styles.dropDownView}>
          <TextInput
              style={styles.inputContainer} 
              placeholderTextColor="#000"
              value={individualsCommunititesHarvestProductsValue12}
              onChangeText={t => setNewindividualsCommunititesHarvestProductsValue12(t)}
            />
          </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.formQuesTitle}>
            How many households are sharecroppers?
            </Text>
            <View style={styles.dropDownView}>
          <TextInput
              style={styles.inputContainer} 
              placeholderTextColor="#000"
              value={individualsCommunititesHarvestProductsValue13}
              onChangeText={t => setNewindividualsCommunititesHarvestProductsValue13(t)}
            />
          </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.formQuesTitle}>
            How many households work as agricultural labourers?
            </Text>
            <View style={styles.dropDownView}>
          <TextInput
              style={styles.inputContainer} 
              placeholderTextColor="#000"
              value={individualsCommunititesHarvestProductsValue14}
              onChangeText={t => setNewindividualsCommunititesHarvestProductsValue14(t)}
            />
          </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.formQuesTitle}>
            How many households could not meet their food requirements in the last one year?
            </Text>
            <View style={styles.dropDownView}>
          <TextInput
              style={styles.inputContainer} 
              placeholderTextColor="#000"
              value={individualsCommunititesHarvestProductsValue15}
              onChangeText={t => setNewindividualsCommunititesHarvestProductsValue15(t)}
            />
          </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.formQuesTitle}>
            How has the average household wealth in the community changed in the last 5 years?
            </Text>
            <View style={styles.dropDownView}>
              <CustomDropdown
                data={individualsCommunititesHarvestProducts16}
                setValue={setNewindividualsCommunititesHarvestProductsValue16}
                value={individualsCommunititesHarvestProductsValue16}
              />
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.formQuesTitle}>
            How has the level of inequality changed in the last 5 years?
            </Text>
            <View style={styles.dropDownView}>
              <CustomDropdown
                data={individualsCommunititesHarvestProducts17}
                setValue={setNewindividualsCommunititesHarvestProductsValue17}
                value={individualsCommunititesHarvestProductsValue17}
              />
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.formQuesTitle}>
            What is the number of households with cement rooms?
            </Text>
            <View style={styles.dropDownView}>
          <TextInput
              style={styles.inputContainer} 
              placeholderTextColor="#000"
              value={individualsCommunititesHarvestProductsValue18}
              onChangeText={t => setNewindividualsCommunititesHarvestProductsValue18(t)}
            />
          </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.formQuesTitle}>
            What is number of households with motor vehicles? (all motorized vehicles)
            </Text>
            <View style={styles.dropDownView}>
          <TextInput
              style={styles.inputContainer} 
              placeholderTextColor="#000"
              value={individualsCommunititesHarvestProductsValue19}
              onChangeText={t => setNewindividualsCommunititesHarvestProductsValue19(t)}
            />
          </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.formQuesTitle}>
            What is the number of households with a smartphone?
            </Text>
            <View style={styles.dropDownView}>
          <TextInput
              style={styles.inputContainer} 
              placeholderTextColor="#000"
              value={individualsCommunititesHarvestProductsValue20}
              onChangeText={t => setNewindividualsCommunititesHarvestProductsValue20(t)}
            />
          </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.formQuesTitle}>
            What proportion of the total energy needs of the settlement(s) comes from fuelwood?
            </Text>
            <View style={styles.dropDownView}>
          <TextInput
              style={styles.inputContainer} 
              placeholderTextColor="#000"
              value={individualsCommunititesHarvestProductsValue21}
              onChangeText={t => setNewindividualsCommunititesHarvestProductsValue21(t)}
            />
          </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.formQuesTitle}>
            What proportion of total food requirement of the settlement comes from the market?
            </Text>
            <View style={styles.dropDownView}>
          <TextInput
              style={styles.inputContainer} 
              placeholderTextColor="#000"
              value={individualsCommunititesHarvestProductsValue22}
              onChangeText={t => setNewindividualsCommunititesHarvestProductsValue22(t)}
            />
          </View>
          </View>
          {/* <View style={{ marginTop: 15 }}>
            <Text style={styles.formQuesTitle}>
            When was the last election to a democratic representative institution held?
            </Text>
            <View style={styles.dropDownView}>
              <CustomDropdown
                data={individualsCommunititesHarvestProducts23}
                setValue={setNewindividualsCommunititesHarvestProductsValue26}
                value={individualsCommunititesHarvestProductsValue26}
              />
            </View>
          </View> */}
          <View style={{ marginTop: 15 }}>
            <Text style={styles.formQuesTitle}>
            When was the last election to a democratic representative institution held?
            </Text>
            <Text style={{fontSize:13,marginTop:10,color:'black',marginLeft:15}}>Local (year)</Text>
            <TextInput
              style={styles.inputContainer}
              // placeholder="Local (year)"
              placeholderTextColor="#000"
              onChangeText={t=>{
               handleElectionYear(0,t)
              }}
            />
            <Text style={{fontSize:13,marginTop:0,color:'black',marginLeft:15}}>Regional (year)</Text>
              <TextInput
              style={styles.inputContainer}
              // placeholder="Regional (year)"
              placeholderTextColor="#000"
              onChangeText={t=>{
                handleElectionYear(1,t)
               }}
            />
                        <Text style={{fontSize:13,marginTop:0,color:'black',marginLeft:15}}>National (year)</Text>
              <TextInput
              style={styles.inputContainer}
              // placeholder="National (year)"
              placeholderTextColor="#000"
              onChangeText={t=>{
                handleElectionYear(2,t)
               }}
            />
              {/* <CustomDropdown
                data={individualsCommunititesHarvestProducts23}
                setValue={setNewindividualsCommunititesHarvestProductsValue23}
                value={individualsCommunititesHarvestProductsValue23}
              /> */}
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.formQuesTitle}>
            What organizations are active in this site? 
            </Text>
            <View style={styles.dropDownView}>
              <MultiSelectComponent
                data={individualsCommunititesHarvestProducts24}
                setValue={setNewindividualsCommunititesHarvestProductsValue24}
                value={individualsCommunititesHarvestProductsValue24}
              />
            </View>
          </View>
          {isLegalOwnerInputBoxVisible1 && (
            <TextInput
              style={styles.inputContainer}
              placeholder="Name of organizations"
              placeholderTextColor="#000"
              value={otherActiveOrganization}
              onChangeText={t =>  setOtherActiveOrganization(t)}
            />
          )}
          <View style={{ marginTop: 15 }}>
            <Text style={styles.formQuesTitle}>
            What sectors do their activities cover?
            </Text>
            <View style={styles.dropDownView}>
              <MultiSelectComponent
                data={individualsCommunititesHarvestProducts25}
                setValue={setNewindividualsCommunititesHarvestProductsValue25}
                value={individualsCommunititesHarvestProductsValue25}
              />
            </View>
          </View>
          {isLegalOwnerInputBoxVisible2 && (
            <TextInput
              style={styles.inputContainer}
              placeholder="sector of activities"
              placeholderTextColor="#000"
              value={otherOrganizationCovers}
              onChangeText={t =>  setOtherOrganizationCover(t)}
            />
          )}
        <CustomButton
          text={"Submit"}
          button={{ backgroundColor: '#98A931', marginBottom: 25 }}
        onPress={handleSubmit}
        /> 
</View></View>
</KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
    formQuesTitle: {
      fontSize: 16,
      color: 'black',
      paddingLeft: 15,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    inputContainer: {
      height: 46,
      margin: 12,
      marginLeft: 15,
      borderWidth: 1,
      backgroundColor: 'transparent',
      padding: 10,
      borderRadius: 7,
      color: 'black',
      width: '90%',
      borderColor: 'gray',
    },
    dropDownView: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10
    }
  });
export default Socio