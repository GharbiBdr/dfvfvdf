import { StyleSheet, Dimensions } from 'react-native'
import Colors from './Colors'
import {
  font1Bold,
  font1Regular,
  font2Bold,
  font2Regular,
  font2Medium,
  font1boldQuicksand
} from './Fonts'
import {
  heightPercentageToDP,
  widthPercentageToDP
} from 'react-native-responsive-screen'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Style = StyleSheet.create({
  h1: {
    fontFamily: font1Bold,
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 1,
    marginTop: 26,
    marginBottom: 20,
    color: Colors.black,
    width: '100%'
  },
  h2: {
    fontFamily: font2Bold,
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 1,
    marginTop: 26,
    marginBottom: 20,
    color: Colors.black,
    width: '100%'
  },
  container: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flex: 1,
    backgroundColor: Colors.white
  },
  TextInputStyle1: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.grey2,
    borderRadius: 10,
    backgroundColor: Colors.grey3,
    color: Colors.primary,
    fontFamily: font2Bold,
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 1,
    padding: 18
  },
  TextInputStyle2: {
    width: '100%',
    height: 50,
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: 'transparent',
    color: Colors.primary,
    fontFamily: font2Bold,
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 1,
    padding: 18
  },
  TextInputLabelStyle1: {
    position: 'absolute',
    top: -5,
    left: 12,
    paddingHorizontal: 8,
    height: 14,
    color: Colors.grey1,
    backgroundColor: Colors.white,
    fontFamily: font2Bold,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 1
  },
  TextInputViewStyle1: {
    marginTop: 22,
    width: '100%',
  },
  TextInputViewStyle2: {
    marginTop: 10,
    width: '100%',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    height: 50,
    backgroundColor: Colors.white,
    borderRadius: 10
  },
  TextInputRightIcon: {
    position: 'absolute',
    right: 14,
    top: 14
  },
  passwordEyeClosed: {
    height: 28,
    width: 3,
    backgroundColor: Colors.grey1,
    position: 'absolute',
    right: 27,
    top: 10,
    transform: [{ rotate: '45deg' }]
  },
  passwordEyeClosedFocused: {
    height: 28,
    width: 3,
    backgroundColor: Colors.primary,
    position: 'absolute',
    right: 27,
    top: 10,
    transform: [{ rotate: '45deg' }]
  },
  textInputErrorMessageStyle1: {
    width: '100%',
    marginTop: 10,
    color: Colors.grey4,
    fontFamily: font2Bold,
    fontSize: 12,
    lineHeight: 14
  },
  textInputMultiline: {
    height: 150,
    textAlignVertical: 'top'
  },
  TextInputValidityCriteria: {
    fontFamily: font2Regular,
    fontSize: 12,
    lineHeight: 14,
    color: Colors.grey4
  },
  TextInputValidityCriteriaValid: {
    fontFamily: font2Regular,
    fontSize: 12,
    lineHeight: 14,
    color: Colors.primary
  },
  textInputValidityCriteriasContainerStyle1: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  btn: {
    borderRadius: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginVertical: 5
  },
  btnDisabled: {
    opacity: 0.7
  },
  btnNormal: {
    padding: 18
  },
  btnLarge: {
    padding: 22
  },
  btnSmall: {
    padding: 14
  },
  btnPrimary: {
    backgroundColor: Colors.primary,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5
  },
  btnDefault: {
    backgroundColor: Colors.white,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5
  },
  btnTransparent: {
    backgroundColor: 'transparent',
    shadowRadius: 5
  },
  btnLabel: {
    fontFamily: font2Bold,
    letterSpacing: 1,
    textAlign: 'center'
  },
  btnLabelSmall: {
    fontSize: 12,
    lineHeight: 14
  },
  btnLabelNormal: {
    fontSize: 14,
    lineHeight: 16
  },
  btnLabelLarge: {
    fontSize: 16,
    lineHeight: 18
  },
  btnLabelPrimary: {
    color: Colors.white
  },
  btnLabelDefault: {
    color: Colors.grey5
  },
  btnLabelTransparent: {
    color: Colors.primary
  },
  btnIcon: {
    alignSelf: 'center',
    marginBottom: 5
  },
  carousel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  carouselPagerContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  carouselPagerDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: Colors.primary
  },
  card: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 10,
    backgroundColor: Colors.white,
    width: '100%',
    height: '100%'
  },
  avatarSmall: {
    width: 48,
    height: 48,
    borderRadius: 75,
    borderColor: 'transparent',
    borderWidth: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey4
  },
  avatarMedium: {
    width: 77,
    height: 77,
    borderRadius: 75,
    borderColor: 'transparent',
    borderWidth: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: Colors.grey4
  },
  avatarBig: {
    width: 98,
    height: 98,
    borderRadius: 75,
    borderColor: 'transparent',
    borderWidth: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey4
  },
  avatarLabelFontSmall: {
    fontFamily: font1boldQuicksand,
    fontWeight: '400',
    color: Colors.white,
    marginTop: 0,
    fontSize: 14,
    left: 2,
    letterSpacing: 3
  },
  avatarLabelFontMedium: {
    fontFamily: font1boldQuicksand,
    fontWeight: '700',
    color: Colors.white,
    marginTop: 0,
    fontSize: 18,
    left: 2,
    letterSpacing: 3
  },
  avatarLabelFontBig: {
    fontFamily: font1boldQuicksand,
    fontWeight: '700',
    color: Colors.white,
    marginTop: 0,
    fontSize: 28,
    left: 4,
    letterSpacing: 3
  },
  elementFirstLabel: {
    fontFamily: font2Bold,
    fontWeight: '500',
    color: Colors.black,
    marginTop: 9,
    marginLeft: 15,
    fontSize: 16,
    letterSpacing: 1
  },
  elementSecondtLabel: {
    fontFamily: font2Medium,
    fontWeight: '400',
    color: Colors.grey5,
    marginTop: 1,
    marginLeft: 15,
    fontSize: 14,
    letterSpacing: 1
  },
  elementBordure: {
    borderColor: Colors.primary,
    borderWidth: 1
  },
  elementPartCardWithOutBordure: {
    flexDirection: 'column',
    width: '100%',
    backgroundColor: Colors.grey2,
    alignItems: 'center',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: Colors.white,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5
  },
  elementPartOfImage: {
    flexDirection: 'column',
    width: '100%',
    aspectRatio: 1.34,
    alignItems: 'center',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    overflow: 'hidden'
  },
  elementPartOfLabel: {
    flexDirection: 'column',
    width: '100%',
    height: 58,
    backgroundColor: Colors.white,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  iconElementCardImage: {
    position: 'absolute',
    right: 5,
    top: 10
  },
  iconElementCardAvatar: {
    position: 'absolute',
    left: 80,
    top: 8,
    width: '100%',
    height: '100%'
  },
  labelCentredLMedium: {
    fontFamily: font2Bold,
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 1,
    width: '100%',
    textAlign: 'center',
    color: Colors.grey1,
    marginVertical: 15
  },
  labelPriceBig: {
    fontFamily: font2Bold,
    fontSize: 58,
    letterSpacing: 1,
    width: '100%',
    textAlign: 'center',
    color: Colors.grey4
  },
  labelPriceBigDevise: {
    fontFamily: font2Bold,
    fontSize: 16,
    letterSpacing: 1,
    color: Colors.grey1
  },
  hr: {
    marginVertical: 15
  },
  hrSmall: {
    height: 1
  },
  hrMedium: {
    height: 2
  },
  hrLarge: {
    height: 5
  },
  hrDefault: {
    backgroundColor: Colors.grey2
  },
  hrPrimary: {
    backgroundColor: Colors.primary
  },
  SelectInput: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: Colors.grey2,
    borderRadius: 10,
    backgroundColor: Colors.grey3,
    padding: 0,
    textAlign: 'left'
  },
  SelectInputPlaceholder: {
    color: Colors.grey1,
    fontFamily: font2Bold,
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 1,
    textAlign: 'left',
    textAlignVertical: 'center',
    height: '100%'
  },
  SelectInputText: {
    color: Colors.primary,
    fontFamily: font2Bold,
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 1,
    textAlign: 'left',
    textAlignVertical: 'center',
    height: '100%'
  },
  SelectInputContainer: {
    height: '100%',
    borderWidth: 0
  },
  SelectInputOptionsContainer: {
    backgroundColor: Colors.white
  },
  SelectInputOptionsText: {
    color: Colors.grey4,
    fontFamily: font2Bold,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 25,
    letterSpacing: 1
  },
  SelectInputCaret: {
    position: 'absolute',
    right: 17,
    top: 17,
    borderLeftWidth: 2.5,
    borderBottomWidth: 2.5,
    borderColor: Colors.grey2,
    transform: [{ rotate: '-45deg' }],
    width: 10,
    height: 10
  },
  SelectInputCaretSelected: {
    borderColor: Colors.primary
  },
  p: {
    marginTop: 10,
    marginBottom: 10,
    fontFamily: font1Regular,
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 1,
    color: Colors.grey4
  },
  pTextJustify: {
    textAlign: 'justify'
  },
  pTextLeft: {
    textAlign: 'left'
  },
  centredModal: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  bottomModalContainer: {
    justifyContent: 'flex-end',
    margin: 0
  },
  bottomModal: {
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: Colors.white
  },
  modalCloseIconContainer: {
    alignItems: 'flex-end'
  },
  slider: {
    width: '100%'
  },
  sliderContainer: {
    width: '100%',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  sliderThumb: {
    width: 24,
    height: 24,
    backgroundColor: Colors.primary,
    borderRadius: 5
  },
  sliderValuesContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  sliderValuesLabel: {
    height: 27,
    color: Colors.grey5,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: Colors.grey6,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  textLandingPage: {
    color: Colors.grey5,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: font2Bold,
    fontSize: 20
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  logoStart: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%'
  },
  forgetPasswordText: {
    color: Colors.grey5,
    fontFamily: font2Bold,
    fontSize: 12,
    alignSelf: 'flex-end',
    marginTop: 14
  },
  spaceBetween: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: windowHeight
  },
  containerSignUpStep1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 22
  },
  marginTopPasswordInput: {
    marginTop: 22
  },
  bottomNavigationContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
    alignItems: 'center',
    height: 61,
    backgroundColor: '#fff',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4
  },
  addModalTitle: {
    marginBottom: 20
  },
  addModalContainer: {
    paddingHorizontal: 8,
    paddingBottom: 8
  },
  bottomNavigationBase: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 56,
    height: 40,
    width: 187,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4
  },
  addButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 45,
    height: 45,
    width: 180,
    alignSelf: 'center',
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4
  },
  bottomIconContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  offerCardView: {
    marginLeft: 32,
    marginRight: 32,
    marginTop: 24
  },
  offerScrollView: {
    marginBottom: heightPercentageToDP(12),
    width: windowWidth
  },
  cardShadow: {
    borderRadius: 10,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  cardContainer: {
    backgroundColor: Colors.white,
    borderRadius: 16
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  headerContainer: {
    height: 87,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14
  },
  headerScreenNameLabel: {
    height: 23,
    backgroundColor: Colors.primary,
    color: Colors.white,
    fontFamily: font2Bold,
    fontSize: 20,
    lineHeight: 23,
    letterSpacing: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerSecondaryLabel: {
    color: Colors.white,
    fontFamily: font1Regular,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 1
  },
  hedearLeftIconContainer: {
    width: 106,
    alignItems: 'flex-start'
  },
  hedearRightIconContainer: {
    width: 106,
    alignItems: 'flex-end'
  },
  hedearCenterContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    width: windowWidth - 240
  },
  paddingRow: {
    marginRight: -15,
    marginLeft: -15,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  col: {
    flexBasis: 'auto',
    flexGrow: 1,
    paddingRight: 15,
    paddingLeft: 15
  },
  UploadImageTextProfil: {
    color: Colors.grey4,
    fontFamily: font2Regular,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 1,
    paddingTop: 12,
    textAlign: 'center'
  },
  bottomNavigation: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5
  },
  sectionListContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingBottom: 50
  },
  sectionListHeaderStyle: {
    height: 30,
    backgroundColor: Colors.grey2,
    paddingLeft: 24,
    justifyContent: 'center'
  },
  sectionListSectionHeader: {
    fontWeight: '700',
    fontSize: 16
  },
  sectionListItemContainer: {
    paddingVertical: 14,
    marginHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
    backgroundColor: Colors.white
  },
  sectionListItemFirstName: {
    fontWeight: '400',
    fontSize: 16,
    paddingLeft: 10
  },
  sectionListItemLastName: {
    fontWeight: '700',
    fontSize: 16,
    paddingLeft: 5
  },
  searchInputContainerContact: {
    paddingBottom: 24,
    paddingHorizontal: 14
  },
  addLotsButtons: {
    marginTop: 17
  },
  shadowButtons: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    marginTop: 17
  },
  uploadImageLotsContainer: {
    borderColor: Colors.primary,
    borderWidth: 2,
    borderStyle: 'dashed',
    height: 100,
    backgroundColor: Colors.pink,
    borderRadius: 1,
    marginVertical: 5,
    alignItems:"center",
    justifyContent:"center"
  },
  borderRadiusUpload: {
    borderRadius: 10
  },
  minimizeUploadButton: {
    borderRadius: 25,
    borderWidth: 3,
    borderColor: Colors.primary,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent:"center"
  },
  addLotsImagesContainer: {
    marginRight: 8,
    marginVertical: 5,
    height: 100,
    backgroundColor: Colors.pink,
    position: 'relative'
  },
  layoutLoader: {
    position: 'absolute',
    height: '110%',
    width: windowWidth,
    zIndex: 5000,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconRotate: {
    transform: [{ rotateX: '-180deg' }],
    marginRight: 20,
    marginTop: 25
  },
  iconRotate180: {
    transform: [{ rotateX: '0deg' }],
    marginTop: 25,
    marginRight: 20
  },
  collapsableView: {
    backgroundColor: Colors.white,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5
  },
  showRowResearchCategory: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  TextAucunElementResultatRecherche: {
    color: Colors.primary,
    marginLeft: 5,
    marginTop: -5,
    fontSize: 14,
    letterSpacing: 1,
    width: 347
  },
  elementCardView: {
    width: 150,
  },
  elementCardFlatListView: {
    paddingVertical: 10,
    paddingHorizontal: 3,
    marginRight: 6
  },
  btnLabelLeft: {
    fontFamily: font2Bold,
    letterSpacing: 1,
    textAlign: 'left',
    marginLeft: 30,
    fontSize: 14
  },
  btnIconLeft: {
    alignSelf: 'flex-start',
    position: 'absolute',
    marginLeft: 10
  },
  homeContainer: {
    paddingBottom: heightPercentageToDP(9)
  },
  rechercheContainer: {
    paddingBottom: heightPercentageToDP(10)
  },
  labelCentredLPayement: {
    fontFamily: font2Bold,
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 1,
    width: '100%',
    textAlign: 'center',
    color: Colors.white,
    marginVertical: 15
  },
  labelPriceBigPayement: {
    fontFamily: font2Bold,
    fontSize: 58,
    letterSpacing: 1,
    width: '100%',
    textAlign: 'center',
    color: Colors.white
  },
  labelPriceBigDevisePayement: {
    fontFamily: font2Bold,
    fontSize: 22,
    letterSpacing: 1,
    color: Colors.white
  },
  btnWithSvgThemeSecondary: {
    backgroundColor: Colors.white,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    flexDirection: 'row'
  },
  btnWithSvgThemePrimary: {
    backgroundColor: Colors.primary,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    flexDirection: 'row'
  },
  btnWithSvgTransparent: {
    backgroundColor: 'transparent',
    shadowRadius: 5
  },
  btnWithSvg: {
    borderRadius: 10,
    width: '100%',
    display: 'flex',
    marginVertical: 5,
    justifyContent: 'space-between'
  },
  flatListColumnStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  elementListFlatListViewListLot: {
    paddingVertical: 12
  },
  leftElementCardFlatListViewListLot: {
    paddingVertical: 13,
    paddingRight: 6,
    width: '50%'
  },
  rightElementCardFlatListViewListLot: {
    paddingVertical: 13,
    paddingLeft: 6,
    width: '50%'
  },
  elementCardViewListLot: {
    width: '100%'
  },
  containerElementList: {
    height: 43,
    borderRadius: 10,
    backgroundColor: Colors.white,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5
  },
  elementListView: {
    flexDirection: 'row',
    width: '100%',
    height: 43
  },
  containerDescriptionElementList: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageListElement: {
    aspectRatio: 1.20,
    borderBottomStartRadius: 10,
    borderTopStartRadius: 10,
    borderColor: 'transparent',
    overflow: 'hidden'
  },
  contactNameListElement: {
    fontFamily: font2Bold,
    fontWeight: '500',
    color: Colors.black,
    marginHorizontal: 18,
    fontSize: 12,
    letterSpacing: 1
  },
  contactDescriptionListElement: {
    fontFamily: font2Medium,
    fontWeight: '400',
    color: Colors.grey5,
    marginVertical: 10,
    fontSize: 12,
    letterSpacing: 1
  },
  addLotsImageClose: {
    position: 'absolute',
    top: 7,
    right: 7,
    zIndex: 10
  },
  dimensionsIcons: {
    marginHorizontal: 7,
    marginTop: 24
  },
  dimensionsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  successModalContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16
  },
  checkIconContainer: {
    backgroundColor:Colors.green,
    borderRadius: 25,
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 28
  },
  successModalText : {
    fontSize: 18, 
    color: Colors.black, 
    fontWeight: "700", 
    textAlign: "center" 
  },
  successModal: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginHorizontal:36
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  modalTitle: {
    color: Colors.black,
    fontFamily: font1Bold,
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 1
  },
  labelPeriode: {
    fontFamily: font2Bold,
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 1,
    textAlign: 'center',
    color: Colors.grey1,
    marginVertical: 15,
    width: '100%'
  },
  recommendedText: {
    position: 'relative',
    top: -17,
    zIndex: 5,
    left: 12,
    color: Colors.white,
    fontFamily: font2Regular,
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 1
  },
  containerScreenLot: {
    flex: 1
  },
  containerFlatList: {
    flex: 1,
    flexDirection: 'column'
  },
  btnIconRight: {
    marginLeft: 67,
    marginTop: 10
  },
  btnLabelLefTagged: {
    fontFamily: font2Bold,
    fontSize: 12,
    paddingLeft: 5
  },
  FontWhiteTag: {
    color: Colors.white
  },
  FontBlackTag: {
    color: Colors.black
  },
  StyleTag: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 31,
    borderRadius: 20,
    marginBottom: 5,
    marginTop: 12,
    marginLeft: 10
  },
  themeWhiteTag: {
    backgroundColor: Colors.white,
    borderColor: Colors.grey2,
    borderWidth: 1
  },
  themePrimaryTag: {
    backgroundColor: Colors.primary
  },
  TextAutocompleteStyle: {
    marginTop: 0,
    width: '100%',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    fontSize: 12,
    paddingLeft: 14,
    height: 40,
    color: Colors.primary,
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderColor: Colors.white
  },
  LabelStyleRecherche: {
    fontFamily: font2Bold,
    color: Colors.grey1,
    marginLeft: 20,
    marginTop: 20,
    fontSize: 14
  },
  TagContentStyle: {
    marginRight: 5,
    marginLeft: 5,
    marginTop: 5
  },
  TagIconStyle: {
    marginRight: 10,
    marginLeft: 5,
    marginTop: 10
  },
  pricingCardHeaderRecommended: {
    position: 'absolute',
    top: 12,
    right: -20,
    height: 20
  },
  reacpCard: {
    height: 221,
    borderRadius: 10
  },
  textLabelBtnSVG: {
    marginLeft: 21,
    marginTop: 5
  },
  subGroupStyle: {
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 1,
    marginTop: 26,
    marginBottom: 20,
    // color: Colors.black,
    width: '100%'
  },
  subGroupStyleColorGrey: {
    fontFamily: font2Regular,
    color: Colors.grey5
  },
  subGroupStyleColorBlack: {
    fontFamily: font2Bold,
    color: Colors.black
  },
  mappingTag:{
    marginLeft:5
  }
})

export default Style
