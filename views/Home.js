import React from "react";
import { connect } from "react-redux";
import { Text, View, Button, SafeAreaView } from "react-native";
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

class HomeScreen extends React.Component {
  static navigationOptions = () => {
    return {
      headerLeft: <Logo kthLogo styles={{ marginLeft: 20, width: 240 }} />,
      headerRight: (
        <Icon
          name="search"
          size={30}
          style={{ paddingRight: 20 }}
          light
          onPress={() => {}}
        />
      )
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      selectedTab: "programmes"
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });

    await this.props.fetchBooks();
    await this.props.fetchCourses();
    await this.props.fetchProgrammes();

    this.setState({ isLoading: false });
  }

  render() {
    const { container } = utilities;
    const {
      booksByCourse,
      courseById,
      booksByProgramme,
      programmeById
    } = this.props;
    const { isLoading, selectedTab } = this.state;

    if (isLoading) {
      return <LoadingScreen />;
    }

    return (
      <ScrollView contentContainerStyle={container}>
        <SafeAreaView>
          <Spacing />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignContent: "flex-start"
            }}
          >
            <View
              style={
                selectedTab === "programmes"
                  ? {
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: "#f5f5f5"
                    }
                  : {
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: "#fff"
                    }
              }
            >
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

            <View
              style={
                selectedTab === "courses"
                  ? {
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: "#f5f5f5"
                    }
                  : {
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: "#fff"
                    }
              }
            >
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

          <Spacing height={30} />
          <Text style={{ fontSize: 24, marginLeft: 10 }}>By {selectedTab}</Text>
          <Spacing height={20} />

          {selectedTab === "programmes" &&
            Object.keys(booksByProgramme).map(programmeId => {
              const programme = programmeById(programmeId);
              return (
                <View key={programmeId}>
                  <BookGroup
                    programme={programme.name}
                    books={booksByProgramme[programmeId]}
                  />
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

// export default HomeScreen;
