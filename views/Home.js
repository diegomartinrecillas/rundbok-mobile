import React from "react";
import { connect } from "react-redux";
import { Text, View, Button, SafeAreaView } from "react-native";
import { utilities } from "../global-styles";
import {
  fetchBook,
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
      headerLeft: <Logo kthLogo styles={{ marginLeft: 20, width: 240 }} />
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
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
      fetchBook,
      navigation,
      booksByCourse,
      courseById,
      booksByProgramme,
      programmeById
    } = this.props;
    const { isLoading } = this.state;

    if (isLoading) {
      return <LoadingScreen />;
    }

    return (
      <ScrollView contentContainerStyle={container}>
        <SafeAreaView>
          <Spacing />
          <Text style={{ fontSize: 30 }}>By programmes</Text>
          <Spacing height={30} />
          {Object.keys(booksByProgramme).map(programmeId => {
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

          <Text style={{ fontSize: 30 }}>By courses</Text>
          <Spacing height={30} />
          {Object.keys(booksByCourse).map(courseId => {
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
  fetchBook: id => dispatch(fetchBook(id)),
  fetchBooks: _ => dispatch(fetchBooks()),
  fetchCourses: _ => dispatch(fetchCourses()),
  fetchProgrammes: _ => dispatch(fetchProgrammes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
