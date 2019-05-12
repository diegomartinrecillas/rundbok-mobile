import { RequestService } from "./RequestService";
import { config } from "./config";

export class NetworkService {
  public static getProgrammes() {
    const url = `${config.apiUrls.rundbok}/programmes`;
    return RequestService.get(url);
  }
  public static getAvailableProgrammes() {
    const url = `${config.apiUrls.rundbok}/available/programmes`;
    return RequestService.get(url);
  }
  public static getProgrammeByCode(code: string) {
    const url = `${config.apiUrls.rundbok}/programmes/${code}`;
    return RequestService.get(url);
  }
  public static getCourses(query: string) {
    const url = `${config.apiUrls.rundbok}/courses/search?query=${query}`;
    return RequestService.get(url);
  }
  public static getAvailableCourses() {
    const url = `${config.apiUrls.rundbok}/available/courses`;
    return RequestService.get(url);
  }
  public static getCourseByCode(code: string) {
    const url = `${config.apiUrls.rundbok}/courses/${code}`;
    return RequestService.get(url);
  }
  public static searchListedBooks(
    query: string,
    programmeId: string,
    courseId: string
  ) {
    const url = `${
      config.apiUrls.rundbok
    }/books/search?query=${query}&programme_id=${programmeId}&course_id=${courseId}`;
    return RequestService.get(url);
  }
  public static getAllBooks() {
    const url = `${
      config.apiUrls.rundbok
    }/books/search?query=&programme_id=&course_id=`;
    return RequestService.get(url);
  }
  public static getListedBookById(id: string) {
    const url = `${config.apiUrls.rundbok}/books/${id}`;
    return RequestService.get(url);
  }
  public static searchForBooks(query: string) {
    const url = `${config.apiUrls.googleBooks}?q=${query}`;
    return RequestService.get(url);
  }
  public static getBookById(id: string) {
    const url = `${config.apiUrls.googleBooks}/${id}`;
    return RequestService.get(url);
  }
  public static addNewBook(rundbokToken: string, bookData: FormData) {
    const url = `${config.apiUrls.rundbok}/student/book/create`;
    return RequestService.postForm(url, bookData, rundbokToken, {
      enctype: "multipart/form-data",
      accept: "application/json"
    });
  }
  public static editBook(
    rundbokToken: string,
    bookData: FormData,
    bookId: string | number
  ) {
    const url = `${config.apiUrls.rundbok}/student/book/update/${bookId}`;
    return RequestService.postForm(url, bookData, rundbokToken, {
      enctype: "multipart/form-data",
      accept: "application/json"
    });
  }

  public static signIn(facebookToken: string) {
    const url = `${config.apiUrls.rundbok}/student/sign-in`;
    return RequestService.post(url, {
      facebook_token: facebookToken
    });
  }
  public static signOut(rundbokToken: string) {
    const url = `${config.apiUrls.rundbok}/student/sign-out`;
    return RequestService.post(url, null, rundbokToken);
  }
  public static getStudentBooks(rundbokToken: string) {
    const url = `${config.apiUrls.rundbok}/student/books`;
    return RequestService.get(url, rundbokToken);
  }
  public static removeStudent(rundbokToken: string) {
    const url = `${config.apiUrls.rundbok}/student/remove`;
    return RequestService.delete(url, rundbokToken);
  }
  public static removeBook(rundbokToken: string, bookId: string) {
    const url = `${config.apiUrls.rundbok}/student/book/remove/${bookId}`;
    return RequestService.delete(url, rundbokToken);
  }
}
