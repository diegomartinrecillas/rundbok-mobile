import React from "react";
import { connect } from "react-redux";

import { Text, View, Button } from "react-native";
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

class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.fetchBooks();
    this.props.fetchCourses();
    this.props.fetchProgrammes();
  }

  render() {
    const { backgroundWhite } = utilities;
    const {
      navigation,
      booksByCourse,
      courseById,
      booksByProgramme,
      programmeById
    } = this.props;

    return (
      <ScrollView style={backgroundWhite}>
        <Text>Home Screen</Text>
        <Button
          onPress={() => navigation.navigate("BookInfo")}
          title="Goto BookInfo"
        />

        <Text style={{ fontSize: 30 }}>By programmes</Text>
        {Object.keys(booksByProgramme).map(programmeId => {
          const programme = programmeById(programmeId);
          return (
            <View key={programmeId}>
              <Text style={{ fontWeight: "bold" }}>
                {programme && programme.name}
              </Text>
              {booksByProgramme[programmeId].map(book => (
                <Text key={book.id}>{book.title}</Text>
              ))}
            </View>
          );
        })}

        <Text style={{ fontSize: 30 }}>By courses</Text>
        {Object.keys(booksByCourse).map(courseId => {
          const course = courseById(courseId);
          return (
            <View key={courseId}>
              <Text style={{ fontWeight: "bold" }}>
                {course && course.name}
              </Text>
              {booksByCourse[courseId].map(book => (
                <Text key={book.id}>{book.title}</Text>
              ))}
            </View>
          );
        })}
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
