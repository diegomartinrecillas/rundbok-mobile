import React from "react";
import { connect } from "react-redux";
import { Text, View, Button, SafeAreaView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { utilities } from "../global-styles";
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

const styles = StyleSheet.create({
  activeBtn: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#f5f5f5"
  },
  defaultBtn: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#fff"
  },
  btnPanel: {
    flex: 1,
    flexDirection: "row",
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
    console.log("hey");

    this.setState({
      showModal: true
    });
  }

  render() {
    const { container } = utilities;
    const {
      booksByCourse,
      courseById,
      booksByProgramme,
      programmeById
    } = this.props;
    const { isLoading, selectedTab, showModal } = this.state;
    const { activeBtn, defaultBtn, btnPanel } = styles;

    if (isLoading) {
      return <LoadingScreen />;
    }

    return (
      <ScrollView contentContainerStyle={container}>
        <SafeAreaView>
          <Spacing />
          <View style={btnPanel}>
            <View style={selectedTab === "programmes" ? activeBtn : defaultBtn}>
              <Button
                onPress={() => {
                  const { selectedTab } = this.state;
                  if (selectedTab != "programmes") {
                    this.setState({
                      selectedTab: "programmes"
                    });
                  }
                }}
                title="Programmes"
                accessibilityLabel="Sort by programmes"
                color="#000"
              />
            </View>

            <View style={selectedTab === "courses" ? activeBtn : defaultBtn}>
              <Button
                onPress={() => {
                  const { selectedTab } = this.state;
                  if (selectedTab != "courses") {
                    this.setState({
                      selectedTab: "courses"
                    });
                  }
                }}
                title="Courses"
                accessibilityLabel="Sort by courses"
                color="#000"
              />
            </View>
          </View>
          <Spacing />
          {selectedTab === "programmes" &&
            Object.keys(booksByProgramme).map(programmeId => {
              const programme = programmeById(programmeId);
              return (
                <View key={programmeId}>
                  <BookGroup
                    programme={programme.name}
                    books={booksByProgramme[programmeId]}
                  />
                  <Spacing height={50} />
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
