import React, {useCallback, useEffect, useState} from 'react';
import {
  BackHandler,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import {useRealm} from '@realm/react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
const {height, width} = Dimensions.get('window');
import userImage from '../../../assets/images/User.png';
import CustomDropdown from '../../../components/CustomDropdown';
import CustomButton from '../../../components/CustomButton';
import MultiSelectDropdown from '../../../components/MultiSelectDropdown';
import {useLocation, useNavigate} from 'react-router-native';
import {useDispatch, useSelector} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import MultiSelectComponent from '../../../components/MultiSelectDropdown';
import {addForestData} from '../../../controllers/ForestDataCollection';
function Forest() {
  const navigate = useNavigate();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [legalOwner, setLegalOwner] = useState(null);
  const [isLegalOwnerInputBoxVisible, setLegalOwnerInputBoxVisible] =
    useState(false);
  const [otherLegalOwner, setOtherLegalOwner] = useState('');
  const [isLegalOwnerInputBoxVisible1, setLegalOwnerInputBoxVisible1] =
    useState(false);
  const [isLegalOwnerInputBoxVisible2, setLegalOwnerInputBoxVisible2] =
    useState(false);
  const [natureOfForestOther, setNatureOfForestOther] = useState('');
  const [
    individualsCommunititesHarvestProductsValue,
    setindividualsCommunititesHarvestProductsValue,
  ] = useState(null);
  const [
    individualsCommunititesHarvestProductsValue1,
    setindividualsCommunititesHarvestProductsValue1,
  ] = useState(null);
  const [
    individualsCommunititesHarvestProductsValue2,
    setindividualsCommunititesHarvestProductsValue2,
  ] = useState(null);
  const [
    individualsCommunititesHarvestProductsValue4,
    setindividualsCommunititesHarvestProductsValue4,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue3,
    setindividualsCommunititesHarvestProductsValue3,
  ] = useState(false);
  const [
    individualsCommunititesHarvestProductsValue5,
    setindividualsCommunititesHarvestProductsValue5,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue6,
    setindividualsCommunititesHarvestProductsValue6,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue7,
    setindividualsCommunititesHarvestProductsValue7,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue8,
    setindividualsCommunititesHarvestProductsValue8,
  ] = useState([]);

  const [
    individualsCommunititesHarvestProductsValue9,
    setindividualsCommunititesHarvestProductsValue9,
  ] = useState([]);
  const [managementActivitiesByWhom, setManagementActivitiesByWhom] =
    useState('');
  const [
    individualsCommunititesHarvestProductsValue10,
    setindividualsCommunititesHarvestProductsValue10,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue11,
    setindividualsCommunititesHarvestProductsValue11,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue12,
    setindividualsCommunititesHarvestProductsValue12,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue13,
    setindividualsCommunititesHarvestProductsValue13,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue14,
    setindividualsCommunititesHarvestProductsValue14,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue15,
    setindividualsCommunititesHarvestProductsValue15,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue16,
    setindividualsCommunititesHarvestProductsValue16,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue17,
    setindividualsCommunititesHarvestProductsValue17,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue18,
    setindividualsCommunititesHarvestProductsValue18,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue19,
    setindividualsCommunititesHarvestProductsValue19,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue20,
    setindividualsCommunititesHarvestProductsValue20,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue21,
    setindividualsCommunititesHarvestProductsValue21,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue22,
    setindividualsCommunititesHarvestProductsValue22,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue23,
    setindividualsCommunititesHarvestProductsValue23,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue24,
    setindividualsCommunititesHarvestProductsValue24,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue25,
    setindividualsCommunititesHarvestProductsValue25,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue26,
    setindividualsCommunititesHarvestProductsValue26,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue27,
    setindividualsCommunititesHarvestProductsValue27,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue28,
    setindividualsCommunititesHarvestProductsValue28,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue29,
    setindividualsCommunititesHarvestProductsValue29,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue30,
    setindividualsCommunititesHarvestProductsValue30,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue31,
    setindividualsCommunititesHarvestProductsValue31,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue32,
    setindividualsCommunititesHarvestProductsValue32,
  ] = useState([]);
  const [
    individualsCommunititesHarvestProductsValue33,
    setindividualsCommunititesHarvestProductsValue33,
  ] = useState([]);
  const [userLocation, setUserLocation] = useState([]);

  const realm = useRealm();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.userInfo);
  console.log('user specs ', user);
  const legalOwnerList = [
    {label: 'Community', value: 'Community'},
    {label: 'Private entity', value: 'Private entity'},
    {label: 'Goverment', value: 'Goverment'},
    {label: 'Other', value: 'Other'},
  ];
  const individualsCommunititesHarvestProducts = [
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
  ];
  const individualsCommunititesHarvestProducts1 = [
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
  ];
  const individualsCommunititesHarvestProducts2 = [
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
  ];
  const individualsCommunititesHarvestProducts5 = [
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
  ];
  const individualsCommunititesHarvestProducts6 = [
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
  ];
  const individualsCommunititesHarvestProducts3 = [
    {label: 'Private management', value: 'Private management'},
    {
      label: 'Community management – Formal',
      value: 'Community management – Formal',
    },
    {
      label: 'Community management – Informal',
      value: 'Community management – Informal',
    },
    {label: 'Government management', value: 'Government management'},
    {
      label: 'Co-management – Community and Government',
      value: 'Co-management – Community and Government',
    },
    {
      label: 'Co-management – Community and NGO',
      value: 'Co-management – Community and NGO',
    },
    {
      label: 'Co-management – Community and Private company',
      value: 'Co-management – Community and Private company',
    },
    {label: 'Other', value: 'Other'},
  ];

  const individualsCommunititesHarvestProducts7 = [
    {label: 'No rules exist.', value: 'No rules exist.'},
    {
      label: 'No one complies with the rules.',
      value: 'No one complies with the rules.',
    },
    {
      label: 'Few users comply with the rules.',
      value: 'Few users comply with the rules.',
    },
    {
      label: 'About half the users comply with the rules.',
      value: 'About half the users comply with the rules.',
    },
    {
      label: 'Most users comply with the rules',
      value: 'Most users comply with the rules',
    },
    {
      label: 'Almost all users fully comply with the rules.',
      value: 'Almost all users fully comply with the rules.',
    },
  ];
  const individualsCommunititesHarvestProducts8 = [
    {
      label: 'Planting seeds or seedlings',
      value: 'Planting seeds or seedlings',
    },
    {label: 'thinning', value: 'thinning'},
    {label: 'pruning', value: 'pruning'},
    {label: 'fire management', value: 'fire management'},
    {label: 'fencing', value: 'fencing'},
    {label: 'trenching', value: 'trenching'},
    {label: 'collective harvesting', value: 'collective harvesting'},
  ];
  const individualsCommunititesHarvestProducts9 = [
    {label: 'Government agency', value: 'Government agency'},
    {
      label: 'Formal community institution',
      value: 'Formal community institution',
    },
    {
      label: 'Informal community institution',
      value: 'Informal community institution',
    },
    {label: 'Private organization', value: 'Private organization'},
    {
      label: 'Non-government organization',
      value: 'Non-government organization',
    },
    {label: 'Religious institution', value: 'Religious institution'},
    {label: 'Other', value: 'Other'},
  ];
  const individualsCommunititesHarvestProducts10 = [
    {label: 'No membership', value: 'No membership'},
    {label: 'Household', value: 'Household'},
    {label: 'Individual', value: 'Individual'},
  ];
  const individualsCommunititesHarvestProducts11 = [
    {label: 'No membership', value: 'No membership'},
    {label: 'Household', value: 'Household'},
    {label: 'Individual', value: 'Individual'},
  ];
  const individualsCommunititesHarvestProducts12 = [
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Household'},
    {label: 'Not applicable', value: 'Not applicable'},
  ];
  const individualsCommunititesHarvestProducts13 = [
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
    {label: 'Not applicable', value: 'Not applicable'},
  ];
  const individualsCommunititesHarvestProducts14 = [
    {label: 'Once a day', value: 'Once a day'},
    {label: 'Multiple times in a week', value: 'Multiple times in a week'},
    {label: 'Once a week', value: 'Once a week'},
    {label: 'Once in two weeks', value: 'Once in two weeks'},
    {label: 'Once in a month', value: 'Once in a month'},
    {label: 'Once in three months', value: 'Once in three months'},
    {label: 'Once in six months', value: 'Once in six months'},
    {label: 'Once in a year', value: 'Once in a year'},
    {label: 'Never', value: 'Never'},
  ];
  const individualsCommunititesHarvestProducts15 = [
    {label: 'Not applicable', value: 'Not applicable'},
    {label: '<10 percent participate', value: '<10 percent participate'},
    {label: '10-30 percent participate', value: '10-30 percent participate'},
    {label: '30-50 percent participate', value: '30-50 percent participate'},
    {label: '>50 percent participate', value: '>50 percent participate'},
  ];
  const individualsCommunititesHarvestProducts16 = [
    {label: 'Timber', value: 'Timber'},
    {label: 'Fuelwood', value: 'Fuelwood'},
    {label: 'Grazing', value: 'Grazing'},
    {label: 'Wildlife', value: 'Wildlife'},
    {label: 'Leaf litter', value: 'Leaf litter'},
    {label: 'Fodder', value: 'Fodder'},
  ];
  const individualsCommunititesHarvestProducts17 = [
    {label: 'What forest products can be harvested?', value: 'What forest products can be harvested?'},
    {label: 'When can the forest products be harvested?', value: 'When can the forest products be harvested?'},
    {label: 'How much of a forest product can be harvested?', value: 'How much of a forest product can be harvested?'},
    {label: 'Who can harvest forest products?', value: 'Who can harvest forest products?'},
    {label: 'Where can forest products be harvested?', value: 'Where can forest products be harvested?'},
    {label: 'Can land be cleared for agriculture?', value: 'Can land be cleared for agriculture?'},
    {label: 'Can fire be set in the forest?', value: 'Can fire be set in the forest?'},
    {label: 'No rules exist', value: 'No rules exist'},
  ];
  const individualsCommunititesHarvestProducts18 = [
    {label: 'Goverment agency', value: 'Goverment agency'},
    {label: 'Formal community institution', value: 'Formal community institution'},
    {label: 'Informal community institution', value: 'Informal community institution'},
    {label: 'Private organization', value: 'Private organization'},
    {label: 'Religious institution', value: 'Religious institution'}
  ];
  const individualsCommunititesHarvestProducts19 = [
    {label: 'Timber', value: 'Timber'},
    {label: 'Subsistence livelihoods', value: 'Subsistence livelihoods'},
    {label: 'Commercial extraction', value: 'Commercial extraction'},
    {label: 'Restoration', value: 'Restoration'},
    {label: 'Seasonal forest products', value: 'Seasonal forest products'},
    {label: 'Conservation', value: 'Conservation'},
    {label: 'Recreation & tourism', value: 'Recreation & tourism'},
    {label: 'Spiritual/Symbolic value', value: 'Spiritual/Symbolic value'},
  ];
  const individualsCommunititesHarvestProducts20 = [
    {label: '<10%', value: '<10%'},
    {label: '10-30%', value: '10-30%'},
    {label: '30-50%', value: '30-50%'},
    {label: '>50%', value: '>50%'},
  ];
  const individualsCommunititesHarvestProducts21 = [
    {label: 'Making/amending access rules', value: 'Making/amending access rules'},
    {
      label: 'Making/amending management plans',
      value: 'Making/amending management plans',
    },
    {
      label: 'Electing members to executive positions',
      value: 'Electing members to executive positions',
    },
    {label: 'Volunteer to participate in management activities', value: 'Volunteer to participate in management activities'},
    {
      label: 'Not involved',
      value: 'Not involved',
    }
  ];
  const individualsCommunititesHarvestProducts22 = [
    {label: 'Almost all members participate', value: 'Almost all members participate'},
    {
      label: 'More than half participate',
      value: 'More than half participate',
    },
    {
      label: 'About one-third participate',
      value: 'About one-third participate',
    },
    {label: 'Very few participate', value: 'Very few participate'},
    {
      label: 'Not applicable',
      value: 'Not applicable',
    }
  ];
  const individualsCommunititesHarvestProducts4 = [
    {label: 'External authority', value: 'External authority'},
    {
      label: 'Guard(s) appointed by the community',
      value: 'Guard(s) appointed by the community',
    },
    {label: 'Collective patrolling', value: 'Collective patrolling'},
  ];
  const setNewLegalOwner = legalOwner => {
    if (legalOwner === 'Other') {
      setLegalOwner('Other');
      setLegalOwnerInputBoxVisible(true);
    } else {
      setLegalOwnerInputBoxVisible(false);
      setLegalOwner(legalOwner);
    }
  };
  const setNewindividualsCommunititesHarvestProductsValue3 = data => {
    if (data === 'Other') {
      setindividualsCommunititesHarvestProductsValue3('Other');
      setLegalOwnerInputBoxVisible1(true);
    } else {
      setLegalOwnerInputBoxVisible1(false);
      setindividualsCommunititesHarvestProductsValue3(data);
    }
  };
  const setNewindividualsCommunititesHarvestProductsValue9 = data => {
    console.log(data, 'data=-------------------------------------------');
    if (data[data.length - 1] === 'Other') {
      setindividualsCommunititesHarvestProductsValue9(['Other']);
      setLegalOwnerInputBoxVisible2(true);
    } else {
      setLegalOwnerInputBoxVisible2(false);
      setindividualsCommunititesHarvestProductsValue9(data);
    }
  };
  const setNewindividualsCommunititesHarvestProductsValue = data => {
    setindividualsCommunititesHarvestProductsValue(data);
  };
  const setNewindividualsCommunititesHarvestProductsValue1 = data => {
    setindividualsCommunititesHarvestProductsValue1(data);
  };
  const setNewindividualsCommunititesHarvestProductsValue2 = data => {
    setindividualsCommunititesHarvestProductsValue2(data);
  };
  const setNewindividualsCommunititesHarvestProductsValue4 = data => {
    setindividualsCommunititesHarvestProductsValue4(data);
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
  const setNewindividualsCommunititesHarvestProductsValue26 = data => {
    setindividualsCommunititesHarvestProductsValue26(data);
  };
  const setNewindividualsCommunititesHarvestProductsValue27 = data => {
    setindividualsCommunititesHarvestProductsValue27(data);
  };
  const setNewindividualsCommunititesHarvestProductsValue28 = data => {
    setindividualsCommunititesHarvestProductsValue28(data);
  };
  const setNewindividualsCommunititesHarvestProductsValue29 = data => {
    setindividualsCommunititesHarvestProductsValue29(data);
  };
  const setNewindividualsCommunititesHarvestProductsValue30 = data => {
    setindividualsCommunititesHarvestProductsValue30(data);
  };
  const setNewindividualsCommunititesHarvestProductsValue31 = data => {
    setindividualsCommunititesHarvestProductsValue31(data);
  };
  const setNewindividualsCommunititesHarvestProductsValue32 = data => {
    setindividualsCommunititesHarvestProductsValue32(data);
  };
  const setNewindividualsCommunititesHarvestProductsValue33 = data => {
    setindividualsCommunititesHarvestProductsValue33(data);
  };



  console.log('legal owner', individualsCommunititesHarvestProductsValue4);
  const handleBack = () => {
    // Your custom function
    console.log('Back button pressed, running custom function');
    // Navigate back to the previous screen
    navigate(-1);
  };

  useEffect(() => {
    const backAction = () => {
      handleBack();
      return true; // Prevent default behavior
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

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
    console.log('legalOwner : ', legalOwner, userLocation);
    console.log(
      individualsCommunititesHarvestProductsValue,
      individualsCommunititesHarvestProductsValue1,
      individualsCommunititesHarvestProductsValue2,
      individualsCommunititesHarvestProductsValue3,
      individualsCommunititesHarvestProductsValue4,
      individualsCommunititesHarvestProductsValue5,
      individualsCommunititesHarvestProductsValue6,
      individualsCommunititesHarvestProductsValue7,
      individualsCommunititesHarvestProductsValue8,
      individualsCommunititesHarvestProductsValue9,
      individualsCommunititesHarvestProductsValue10,
      individualsCommunititesHarvestProductsValue11,
      individualsCommunititesHarvestProductsValue12,
      individualsCommunititesHarvestProductsValue13,
      individualsCommunititesHarvestProductsValue14,
      individualsCommunititesHarvestProductsValue15,
    );
    addForestData(
      realm,
      user?.user?.id,
      user?.fieldSite,
      JSON.stringify(userLocation),
      JSON.stringify(legalOwner == 'Other' ? otherLegalOwner : legalOwner),
      JSON.stringify(individualsCommunititesHarvestProductsValue),
      JSON.stringify(individualsCommunititesHarvestProductsValue1),
      JSON.stringify(individualsCommunititesHarvestProductsValue2),
      JSON.stringify(
        individualsCommunititesHarvestProductsValue3 == 'Other'
          ? natureOfForestOther
          : individualsCommunititesHarvestProductsValue3,
      ),
      JSON.stringify(individualsCommunititesHarvestProductsValue4),
      JSON.stringify(individualsCommunititesHarvestProductsValue5),
      JSON.stringify(individualsCommunititesHarvestProductsValue6),
      JSON.stringify(individualsCommunititesHarvestProductsValue7),
      JSON.stringify(individualsCommunititesHarvestProductsValue8),
      JSON.stringify(
        individualsCommunititesHarvestProductsValue9[0] == 'Other'
          ? managementActivitiesByWhom
          : individualsCommunititesHarvestProductsValue9,
      ),
      JSON.stringify(individualsCommunititesHarvestProductsValue10),
      JSON.stringify(individualsCommunititesHarvestProductsValue11),
      JSON.stringify(individualsCommunititesHarvestProductsValue12),
      JSON.stringify(individualsCommunititesHarvestProductsValue13),
      JSON.stringify(individualsCommunititesHarvestProductsValue14),
      JSON.stringify(individualsCommunititesHarvestProductsValue15),
    );
  }, [
    realm,
    user?.user?.id,
    user?.fieldSite,
    JSON.stringify(userLocation),
    JSON.stringify(legalOwner == 'Other' ? otherLegalOwner : legalOwner),
    JSON.stringify(individualsCommunititesHarvestProductsValue),
    JSON.stringify(individualsCommunititesHarvestProductsValue1),
    JSON.stringify(individualsCommunititesHarvestProductsValue2),
    JSON.stringify(
      individualsCommunititesHarvestProductsValue3 == 'Other'
        ? natureOfForestOther
        : individualsCommunititesHarvestProductsValue3,
    ),
    JSON.stringify(individualsCommunititesHarvestProductsValue4),
    JSON.stringify(individualsCommunititesHarvestProductsValue5),
    JSON.stringify(individualsCommunititesHarvestProductsValue6),
    JSON.stringify(individualsCommunititesHarvestProductsValue7),
    JSON.stringify(individualsCommunititesHarvestProductsValue8),
    JSON.stringify(
      individualsCommunititesHarvestProductsValue9[0] == 'Other'
        ? managementActivitiesByWhom
        : individualsCommunititesHarvestProductsValue9,
    ),
    JSON.stringify(individualsCommunititesHarvestProductsValue10),
    JSON.stringify(individualsCommunititesHarvestProductsValue11),
    JSON.stringify(individualsCommunititesHarvestProductsValue12),
    JSON.stringify(individualsCommunititesHarvestProductsValue13),
    JSON.stringify(individualsCommunititesHarvestProductsValue14),
    JSON.stringify(individualsCommunititesHarvestProductsValue15),
  ]);

  useEffect(() => {
    realm.subscriptions
      .update(mutableSubs => {
        mutableSubs.add(realm.objects('forestDataCollections'));
      })
      .catch(err => {
        console.error('Failed to update subscriptions:', err);
      });
  }, [realm]);
  return (
    <KeyboardAwareScrollView>
      <View style={{flex: 1}}>
        <View style={{flex: 0.9, paddingLeft: 10, paddingRight: 10}}>
          <View>
            <Text style={styles.formQuesTitle}>
              Who is the legal owner of this forest?
            </Text>
            <View style={styles.dropDownView}>
              <CustomDropdown
                inputWidth={0}
                data={legalOwnerList}
                setValue={setNewLegalOwner}
                value={legalOwner}
              />
            </View>
          </View>
          <View
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {isLegalOwnerInputBoxVisible && (
              <TextInput
                style={styles.inputContainer}
                placeholder="Write the legal owner"
                placeholderTextColor="#000"
                value={otherLegalOwner}
                onChangeText={t => setOtherLegalOwner(t)}
              />
            )}
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>
              Which resource(s) does the community have the right of Collective
              Sale (choose all that apply)?
            </Text>
            <View style={styles.dropDownView}>
              <MultiSelectComponent
                data={individualsCommunititesHarvestProducts16}
                setValue={setNewindividualsCommunititesHarvestProductsValue26}
                value={individualsCommunititesHarvestProductsValue26}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>
              Which resource(s) does the community have the right of Management (choose all that apply)?
            </Text>
            <View style={styles.dropDownView}>
              <MultiSelectComponent
                data={individualsCommunititesHarvestProducts16}
                setValue={setNewindividualsCommunititesHarvestProductsValue27}
                value={individualsCommunititesHarvestProductsValue27}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>
              Which resource(s) does the community have the right of Exclusion (choose all that apply)?
            </Text>
            <View style={styles.dropDownView}>
              <MultiSelectComponent
                data={individualsCommunititesHarvestProducts16}
                setValue={setNewindividualsCommunititesHarvestProductsValue28}
                value={individualsCommunititesHarvestProductsValue28}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>
            Which resources do individuals in the community have the right to access for self-use? (Choose all that apply.)
            </Text>
            <View style={styles.dropDownView}>
              <MultiSelectComponent
                data={individualsCommunititesHarvestProducts16}
                setValue={setNewindividualsCommunititesHarvestProductsValue29}
                value={individualsCommunititesHarvestProductsValue29}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>
            Which resources do individuals in the community have the right to sale in external market? (Choose all that apply.)
            </Text>
            <View style={styles.dropDownView}>
              <MultiSelectComponent
                data={individualsCommunititesHarvestProducts16}
                setValue={setNewindividualsCommunititesHarvestProductsValue30}
                value={individualsCommunititesHarvestProductsValue30}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>
              Do individuals from other (neighbouring) communities harvest
              products from this forest for self- consumption or market sale?
            </Text>
            <View style={styles.dropDownView}>
              <CustomDropdown
                data={individualsCommunititesHarvestProducts}
                setValue={setNewindividualsCommunititesHarvestProductsValue}
                value={individualsCommunititesHarvestProductsValue}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>
              Do individuals in this community harvest products from other
              forests for self- consumption or market sale?
            </Text>
            <View style={styles.dropDownView}>
              <CustomDropdown
                data={individualsCommunititesHarvestProducts1}
                setValue={setNewindividualsCommunititesHarvestProductsValue1}
                value={individualsCommunititesHarvestProductsValue1}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>
              Does the community have rights to harvest products from the other
              forests for self-consumption or market sale?
            </Text>
            <View style={styles.dropDownView}>
              <CustomDropdown
                data={individualsCommunititesHarvestProducts2}
                setValue={setNewindividualsCommunititesHarvestProductsValue2}
                value={individualsCommunititesHarvestProductsValue2}
              />
            </View>
          </View>
            <View style={{ marginTop: 15 }}>
      <View style={styles.row}>
        <Text style={styles.formQuesTitle}>
          What number of households collect <Text style={{ fontWeight: '700' }}>timber</Text> for self consumption 
        </Text>
        <TextInput
          style={styles.inputContainer}
          placeholder=""
          placeholderTextColor="#000"
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.formQuesTitle}>
          and for sale
        </Text>
        <TextInput
          style={styles.inputContainer}
          placeholder=""
          placeholderTextColor="#000"
        />
      </View>
    </View>
    <View style={{ marginTop: 15 }}>
      <View style={styles.row}>
        <Text style={styles.formQuesTitle}>
          What number of households collect <Text style={{ fontWeight: '700' }}>fuelwood</Text> for self consumption 
        </Text>
        <TextInput
          style={styles.inputContainer}
          placeholder=""
          placeholderTextColor="#000"
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.formQuesTitle}>
          and for sale
        </Text>
        <TextInput
          style={styles.inputContainer}
          placeholder=""
          placeholderTextColor="#000"
        />
      </View>
    </View>
    <View style={{ marginTop: 15 }}>
      <View style={styles.row}>
        <Text style={styles.formQuesTitle}>
          What number of households collect <Text style={{ fontWeight: '700' }}>grazing</Text> for self consumption 
        </Text>
        <TextInput
          style={styles.inputContainer}
          placeholder=""
          placeholderTextColor="#000"
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.formQuesTitle}>
          and for sale
        </Text>
        <TextInput
          style={styles.inputContainer}
          placeholder=""
          placeholderTextColor="#000"
        />
      </View>
      <View style={{ marginTop: 15 }}>
      <View style={styles.row}>
        <Text style={styles.formQuesTitle}>
          What number of households collect <Text style={{ fontWeight: '700' }}>wildlife</Text> for self consumption 
        </Text>
        <TextInput
          style={styles.inputContainer}
          placeholder=""
          placeholderTextColor="#000"
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.formQuesTitle}>
          and for sale
        </Text>
        <TextInput
          style={styles.inputContainer}
          placeholder=""
          placeholderTextColor="#000"
        />
      </View>
    </View>
    </View>
    <View style={{ marginTop: 15 }}>
      <View style={styles.row}>
        <Text style={styles.formQuesTitle}>
          What number of households collect <Text style={{ fontWeight: '700' }}>leaf litter</Text> for self consumption 
        </Text>
        <TextInput
          style={styles.inputContainer}
          placeholder=""
          placeholderTextColor="#000"
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.formQuesTitle}>
          and for sale
        </Text>
        <TextInput
          style={styles.inputContainer}
          placeholder=""
          placeholderTextColor="#000"
        />
      </View>
    </View>
    <View style={{ marginTop: 15 }}>
      <View style={styles.row}>
        <Text style={styles.formQuesTitle}>
          What number of households collect <Text style={{ fontWeight: '700' }}>fodder</Text> for self consumption 
        </Text>
        <TextInput
          style={styles.inputContainer}
          placeholder=""
          placeholderTextColor="#000"
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.formQuesTitle}>
          and for sale
        </Text>
        <TextInput
          style={styles.inputContainer}
          placeholder=""
          placeholderTextColor="#000"
        />
      </View>
    </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>
              What is the nature of forest management?
            </Text>
            <View style={styles.dropDownView}>
              <CustomDropdown
                data={individualsCommunititesHarvestProducts3}
                setValue={setNewindividualsCommunititesHarvestProductsValue3}
                value={individualsCommunititesHarvestProductsValue3}
                placeholder={'Select nature of forest management'}
              />
            </View>
          </View>
          {isLegalOwnerInputBoxVisible1 && (
            <TextInput
              style={styles.inputContainer}
              placeholder="Please Explain"
              placeholderTextColor="#000"
              value={natureOfForestOther}
              onChangeText={t => setNatureOfForestOther(t)}
            />
          )}

<View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>
              Which resource(s) are included in the principal objective of current management system (choose all that apply)?
            </Text>
            <View style={styles.dropDownView}>
              <MultiSelectComponent
                data={individualsCommunititesHarvestProducts19}
                setValue={setNewindividualsCommunititesHarvestProductsValue32}
                value={individualsCommunititesHarvestProductsValue32}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>
              Which resource(s) are included in the secondary objective of current management system (choose all that apply)?
            </Text>
            <View style={styles.dropDownView}>
              <MultiSelectComponent
                data={individualsCommunititesHarvestProducts19}
                setValue={setNewindividualsCommunititesHarvestProductsValue33}
                value={individualsCommunititesHarvestProductsValue33}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>
            Select all the processes for which rules exist to manage the forest.
            </Text>
            <View style={styles.dropDownView}>
              <MultiSelectComponent
                data={individualsCommunititesHarvestProducts17}
                setValue={setNewindividualsCommunititesHarvestProductsValue4}
                value={individualsCommunititesHarvestProductsValue4}
                placeholder={'Select Rules'}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>
            Select all the institutions that define the rules for the processes given above.
            </Text>
            <View style={styles.dropDownView}>
              <MultiSelectComponent
                data={individualsCommunititesHarvestProducts18}
                setValue={setNewindividualsCommunititesHarvestProductsValue31}
                value={individualsCommunititesHarvestProductsValue31}
                placeholder={'Select Rules'}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>
              How are rules enforced? Select all that apply
            </Text>
            <View style={styles.dropDownView}>
              <MultiSelectComponent
                data={individualsCommunititesHarvestProducts4}
                setValue={setNewindividualsCommunititesHarvestProductsValue4}
                value={individualsCommunititesHarvestProductsValue4}
                placeholder={'Select Rules'}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>
              Are penalties imposed on users if they break rules?
            </Text>
            <View style={styles.dropDownView}>
              <CustomDropdown
                data={individualsCommunititesHarvestProducts5}
                setValue={setNewindividualsCommunititesHarvestProductsValue5}
                value={individualsCommunititesHarvestProductsValue5}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>Are penalties graduated?</Text>
            <View style={styles.dropDownView}>
              <CustomDropdown
                data={individualsCommunititesHarvestProducts6}
                setValue={setNewindividualsCommunititesHarvestProductsValue6}
                value={individualsCommunititesHarvestProductsValue6}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>How many men have been penalized for rule infringement in last one year? </Text>
            <View style={{marginTop: 10}}>
                      <TextInput
                        style={styles.inputContainer}
                        placeholderTextColor="#000"
                        placeholder="total number"
                      />
          </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>How many men have been penalized for rule infringement in last five year? </Text>
            <View style={{marginTop: 10}}>
                      <TextInput
                        style={styles.inputContainer}
                        placeholderTextColor="#000"
                        placeholder="total number"
                      />
          </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>How many women have been penalized for rule infringement in last one year? </Text>
            <View style={{marginTop: 10}}>
                      <TextInput
                        style={styles.inputContainer}
                        placeholderTextColor="#000"
                        placeholder="total number"
                      />
          </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>How many women have been penalized for rule infringement in last five year? </Text>
            <View style={{marginTop: 10}}>
                      <TextInput
                        style={styles.inputContainer}
                        placeholderTextColor="#000"
                        placeholder="total number"
                      />
          </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>
              What is the level of rule compliance by the users?
            </Text>
            <View style={styles.dropDownView}>
              <CustomDropdown
                data={individualsCommunititesHarvestProducts7}
                setValue={setNewindividualsCommunititesHarvestProductsValue7}
                value={individualsCommunititesHarvestProductsValue7}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>
              What activities have been undertaken in this forest as part of
              management.
            </Text>
            <View style={styles.dropDownView}>
              <MultiSelectComponent
                data={individualsCommunititesHarvestProducts8}
                setValue={setNewindividualsCommunititesHarvestProductsValue8}
                value={individualsCommunititesHarvestProductsValue8}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>And by whom?</Text>
            <View style={styles.dropDownView}>
              <MultiSelectComponent
                data={individualsCommunititesHarvestProducts9}
                setValue={setNewindividualsCommunititesHarvestProductsValue9}
                value={individualsCommunititesHarvestProductsValue9}
              />
            </View>
          </View>
          
          {isLegalOwnerInputBoxVisible2 && (
            <TextInput
              style={styles.inputContainer}
              placeholder="Write the name of institution"
              placeholderTextColor="#000"
              value={managementActivitiesByWhom}
              onChangeText={t => setManagementActivitiesByWhom(t)}
            />
          )}
            <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>And what is women's participation?</Text>
            <View style={styles.dropDownView}>
            <CustomDropdown
                data={individualsCommunititesHarvestProducts20}
                setValue={setNewindividualsCommunititesHarvestProductsValue10}
                value={individualsCommunititesHarvestProductsValue10}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>Select all the activities in which the community members are involved.</Text>
            <View style={styles.dropDownView}>
            <MultiSelectComponent
                data={individualsCommunititesHarvestProducts21}
                setValue={setNewindividualsCommunititesHarvestProductsValue9}
                value={individualsCommunititesHarvestProductsValue9}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>If involved, then what is the participation??</Text>
            <View style={styles.dropDownView}>
            <CustomDropdown
                data={individualsCommunititesHarvestProducts22}
                setValue={setNewindividualsCommunititesHarvestProductsValue9}
                value={individualsCommunititesHarvestProductsValue9}
              />
            </View>
          </View>
          
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>
              How is membership in the community-based forest management
              institution defined?
            </Text>
            <View style={styles.dropDownView}>
              <CustomDropdown
                data={individualsCommunititesHarvestProducts10}
                setValue={setNewindividualsCommunititesHarvestProductsValue10}
                value={individualsCommunititesHarvestProductsValue10}
              />
            </View>
          </View>
          {/* <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>
              What is the number of individuals covered by membership in the
              community-based forest management institution?
            </Text>
            <View style={styles.dropDownView}>
              <CustomDropdown
                data={individualsCommunititesHarvestProducts11}
                setValue={setNewindividualsCommunititesHarvestProductsValue11}
                value={individualsCommunititesHarvestProductsValue11}
              />
            </View>
          </View> */}
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>
              What is the gender of the current leader of the management
              institution?
            </Text>
            <View style={styles.dropDownView}>
              <CustomDropdown
                data={individualsCommunititesHarvestProducts12}
                setValue={setNewindividualsCommunititesHarvestProductsValue12}
                value={individualsCommunititesHarvestProductsValue12}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>
              Has a woman ever been a member of the leadership of the
              community-based forest management institution?
            </Text>
            <View style={styles.dropDownView}>
              <CustomDropdown
                data={individualsCommunititesHarvestProducts13}
                setValue={setNewindividualsCommunititesHarvestProductsValue13}
                value={individualsCommunititesHarvestProductsValue13}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>
              What is the frequency of meetings organized by the community-based
              forest management institution in the last one year?
            </Text>
            <View style={styles.dropDownView}>
              <CustomDropdown
                data={individualsCommunititesHarvestProducts14}
                setValue={setNewindividualsCommunititesHarvestProductsValue14}
                value={individualsCommunititesHarvestProductsValue14}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>
              What was the level of women’s participation in the meetings
              organized by the community-based forest management institution in
              the last one year?
            </Text>
            <View style={styles.dropDownView}>
              <CustomDropdown
                data={individualsCommunititesHarvestProducts15}
                setValue={setNewindividualsCommunititesHarvestProductsValue15}
                value={individualsCommunititesHarvestProductsValue15}
              />
            </View>
          </View>
          {/* <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>
              Does the community have the following rights??
            </Text>
            <View>
              <View>
                <ScrollView
                  horizontal
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    overflow: 'scroll',
                    width: windowWidth,
                    marginTop: 10,
                  }}>
                  <View
                    style={{
                      width: windowWidth / 2,
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                    <View>
                      <Text style={{color: 'black', opacity: 0}}>
                        Collective Sale
                      </Text>
                    </View>
                    <View style={{marginTop: 15}}>
                      <Text
                        style={{
                          paddingLeft: 15,
                          color: 'black',
                          paddingTop: 12,
                          fontSize: 16,
                          fontWeight: 500,
                        }}>
                        Timber
                      </Text>
                    </View>
                    <View style={{marginTop: 25}}>
                      <Text
                        style={{
                          paddingLeft: 15,
                          color: 'black',
                          paddingTop: 12,
                          fontSize: 16,
                          fontWeight: 500,
                        }}>
                        Fuelwood
                      </Text>
                    </View>
                    <View style={{marginTop: 25}}>
                      <Text
                        style={{
                          paddingLeft: 15,
                          color: 'black',
                          paddingTop: 12,
                          fontSize: 16,
                          fontWeight: 500,
                        }}>
                        Grazing
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: windowWidth / 2,
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                    <View>
                      <Text style={{color: 'black', fontWeight: 500}}>
                        Collective Sale
                      </Text>
                    </View>
                    <View style={{marginTop: 10}}>
                      <CustomDropdown
                        data={individualsCommunititesHarvestProducts6}
                        setValue={
                          setindividualsCommunititesHarvestProductsValue16
                        }
                        value={individualsCommunititesHarvestProductsValue16}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <CustomDropdown
                        data={individualsCommunititesHarvestProducts6}
                        setValue={
                          setindividualsCommunititesHarvestProductsValue19
                        }
                        value={individualsCommunititesHarvestProductsValue19}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <CustomDropdown
                        data={individualsCommunititesHarvestProducts6}
                        setValue={
                          setindividualsCommunititesHarvestProductsValue23
                        }
                        value={individualsCommunititesHarvestProductsValue23}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      width: windowWidth / 2,
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                    <View>
                      <Text style={{color: 'black', fontWeight: 500}}>
                        Management
                      </Text>
                    </View>
                    <View style={{marginTop: 10}}>
                      <CustomDropdown
                        data={individualsCommunititesHarvestProducts6}
                        setValue={
                          setindividualsCommunititesHarvestProductsValue17
                        }
                        value={individualsCommunititesHarvestProductsValue17}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <CustomDropdown
                        data={individualsCommunititesHarvestProducts6}
                        setValue={
                          setindividualsCommunititesHarvestProductsValue20
                        }
                        value={individualsCommunititesHarvestProductsValue20}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <CustomDropdown
                        data={individualsCommunititesHarvestProducts6}
                        setValue={
                          setindividualsCommunititesHarvestProductsValue24
                        }
                        value={individualsCommunititesHarvestProductsValue24}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      width: windowWidth / 2,
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                    <View>
                      <Text style={{color: 'black', fontWeight: 500}}>
                        Exclusion
                      </Text>
                    </View>
                    <View style={{marginTop: 10}}>
                      <CustomDropdown
                        data={individualsCommunititesHarvestProducts6}
                        setValue={
                          setindividualsCommunititesHarvestProductsValue18
                        }
                        value={individualsCommunititesHarvestProductsValue18}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <CustomDropdown
                        data={individualsCommunititesHarvestProducts6}
                        setValue={
                          setindividualsCommunititesHarvestProductsValue22
                        }
                        value={individualsCommunititesHarvestProductsValue22}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <CustomDropdown
                        data={individualsCommunititesHarvestProducts6}
                        setValue={
                          setindividualsCommunititesHarvestProductsValue25
                        }
                        value={individualsCommunititesHarvestProductsValue25}
                      />
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </View> */}
          {/* <View style={{marginTop: 15}}>
            <Text style={styles.formQuesTitle}>
              What number of households collect the following forest products??
            </Text>
            <View>
              <View>
                <ScrollView
                  horizontal
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    overflow: 'scroll',
                    width: windowWidth,
                    marginTop: 10,
                  }}>
                  <View
                    style={{
                      width: windowWidth / 2,
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                    <View>
                      <Text style={{color: 'black', opacity: 0}}></Text>
                    </View>
                    <View style={{marginTop: 15}}>
                      <Text
                        style={{
                          paddingLeft: 15,
                          color: 'black',
                          paddingTop: 12,
                          fontSize: 16,
                          fontWeight: 500,
                        }}>
                        Timber
                      </Text>
                    </View>
                    <View style={{marginTop: 25}}>
                      <Text
                        style={{
                          paddingLeft: 15,
                          color: 'black',
                          paddingTop: 12,
                          fontSize: 16,
                          fontWeight: 500,
                        }}>
                        Fuelwood
                      </Text>
                    </View>
                    <View style={{marginTop: 25}}>
                      <Text
                        style={{
                          paddingLeft: 15,
                          color: 'black',
                          paddingTop: 12,
                          fontSize: 16,
                          fontWeight: 500,
                        }}>
                        Grazing
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: windowWidth / 2,
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                    <View>
                      <Text style={{color: 'black', fontWeight: 500}}>
                        Self consumption
                      </Text>
                    </View>
                    <View style={{marginTop: 10}}>
                      <TextInput
                        style={styles.inputContainer1}
                        placeholderTextColor="#000"
                        placeholder="total number"
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <TextInput
                        style={styles.inputContainer1}
                        placeholderTextColor="#000"
                        placeholder="total number"
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <TextInput
                        style={styles.inputContainer1}
                        placeholderTextColor="#000"
                        placeholder="total number"
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      width: windowWidth / 2,
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                    <View>
                      <Text style={{color: 'black', fontWeight: 500}}>
                        Sale
                      </Text>
                    </View>
                    <View style={{marginTop: 10}}>
                      <TextInput
                        style={styles.inputContainer1}
                        placeholderTextColor="#000"
                        placeholder="total number"
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <TextInput
                        style={styles.inputContainer1}
                        placeholderTextColor="#000"
                        placeholder="total number"
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <TextInput
                        style={styles.inputContainer1}
                        placeholderTextColor="#000"
                        placeholder="total number"
                      />
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </View> */}
        </View>
        <CustomButton
          text={'Submit'}
          button={{backgroundColor: '#98A931', marginBottom: 25}}
          onPress={handleSubmit}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  gradientStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
  },
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
  inputContainer1: {
    height: 46,
    margin: 5,
    marginLeft: 0,
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
    marginTop: 10,
  },
});

export default Forest;
