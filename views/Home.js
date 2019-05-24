import React from "react";
import { connect } from "react-redux";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import {
  fetchBooks,
  fetchCourses,
  fetchProgrammes,
  selectBooksByCourse,
  selectCourseById,
  selectBooksByProgramme,
  selectProgrammeById
} from "../store";
import { ScrollView } from "react-native-gesture-handler";
import LoadingScreen from "../components/LoadingScreen";
import Logo from "../components/Logo";
import Spacing from "../components/Spacing";
import BookGroup from "./BookGroup";
import SearchModal from "./SearchModal";
import Touchable from "../components/Touchable";
import { variables, colors, utilities } from "../global-styles";

const styles = StyleSheet.create({
  tabActive: {
    padding: 12,
    borderRadius: variables.radius,
    backgroundColor: colors.black,
    borderRadius: 5
  },
  tab: {
    padding: 12,
    borderRadius: variables.radius,
    backgroundColor: colors.gray,
    borderRadius: 5
  },
  btnPanel: {
    flex: 1,
    alignContent: "flex-start"
  }
});

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const searchModal = navigation.getParam("searchModal", null);
    return {
      headerLeft: <Logo kthLogo styles={{ marginLeft: 20, width: 220 }} />,
      headerRight: (
        <Touchable
          onPress={searchModal}
          activeOpacity={0.7}
          style={{
            marginRight: 20,
            width: 45,
            height: 45,
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F5F5F5"
          }}
        >
          <Icon name="search" size={24} />
        </Touchable>
      )
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      selectedTab: "programmes",
      showModal: false
    };
  }

  updateNavigationParams() {
    const { navigation } = this.props;

    navigation.setParams({
      searchModal: () => this.showModal()
    });
  }

  async componentDidMount() {
    this.updateNavigationParams();
    this.setState({ isLoading: true });

    await this.props.fetchBooks();
    await this.props.fetchCourses();
    await this.props.fetchProgrammes();

    this.setState({ isLoading: false });
  }

  showModal() {
    this.setState(previousState => ({
      showModal: !previousState.showModal
    }));
  }

  render() {
    const { container, dFlex, textNormal, fontBold } = utilities;
    const {
      booksByCourse,
      courseById,
      booksByProgramme,
      programmeById
    } = this.props;
    const { isLoading, selectedTab, showModal } = this.state;
    const { tab, tabActive } = styles;

    if (isLoading) {
      return <LoadingScreen />;
    }

    return (
      <ScrollView>
        <SafeAreaView>
          <Spacing />
          <View style={[dFlex, container]}>
            <Touchable
              onPress={() => this.setState({ selectedTab: "programmes" })}
              activeOpacity={0.7}
              style={[
                tab,
                { marginRight: 10 },
                selectedTab === "programmes" && tabActive
              ]}
            >
              <Text
                style={[
                  textNormal,
                  fontBold,
                  selectedTab === "programmes" && { color: colors.white },
                  selectedTab !== "programmes" && { opacity: 0.9 }
                ]}
              >
                Programmes
              </Text>
            </Touchable>
            <Touchable
              onPress={() => this.setState({ selectedTab: "courses" })}
              activeOpacity={0.7}
              style={[tab, selectedTab === "courses" && tabActive]}
            >
              <Text
                style={[
                  textNormal,
                  fontBold,
                  selectedTab === "courses" && { color: colors.white },
                  selectedTab !== "courses" && { opacity: 0.9 }
                ]}
              >
                Courses
              </Text>
            </Touchable>
          </View>
          <Spacing />
          {selectedTab === "programmes" &&
            Object.keys(booksByProgramme).map(programmeId => {
              const programme = programmeById(programmeId);
              return (
                <View key={programmeId}>
                  <BookGroup
                    key={programmeId}
                    programme={programme.name}
                    books={booksByProgramme[programmeId]}
                  />
                  <Spacing height={40} />
                </View>
              );
            })}

          {selectedTab === "courses" &&
            Object.keys(booksByCourse).map(courseId => {
              const course = courseById(courseId);
              return (
                <View key={courseId}>
                  <BookGroup
                    course={course.name}
                    books={booksByCourse[courseId]}
                  />
                  <Spacing height={40} />
                </View>
              );
            })}

          {showModal && <SearchModal showModal={showModal} />}
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books.data,
  booksByCourse: selectBooksByCourse(state),
  courseById: id => selectCourseById(state)(id),
  booksByProgramme: selectBooksByProgramme(state),
  programmeById: id => selectProgrammeById(state)(id)
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: _ => dispatch(fetchBooks()),
  fetchCourses: _ => dispatch(fetchCourses()),
  fetchProgrammes: _ => dispatch(fetchProgrammes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
