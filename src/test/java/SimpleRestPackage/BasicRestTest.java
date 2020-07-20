package SimpleRestPackage;

import io.restassured.http.ContentType;
import org.junit.Test;

import java.util.HashMap;

import static io.restassured.RestAssured.given;
import static io.restassured.RestAssured.post;
import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.core.Is.is;

public class BasicRestTest {

    @Test
    public void restMethodForGetAPost() {
        given().
                when().get("https://jsonplaceholder.typicode.com/posts?id=8").
                then().statusCode(200).body("userId", hasItems(1)).body("id", hasItem(8)).body("title", hasItem("dolorem dolore est ipsam")).
                body("body", hasItem("dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"))
                .log().all();

    }
//    @Test
    public void restMethodForGetAUser(){

        given().contentType(ContentType.JSON).log().all().
                when().get("https://jsonplaceholder.typicode.com/users/3").
                then().statusCode(200).body("name", is("Clementine Bauch")).
                body("username", is("Samantha")).
                body("address.street", is("Douglas Extension")).body("address.suite", is ("Suite 847")).log().all();
    }

//    @Test
    public void restMethodForPostingAPost(){

        HashMap<String, String> postContent = new HashMap<>();
        postContent.put( "userId", "106");
        postContent.put( "title", "My second night out for testing");
        postContent.put( "body", "I went to dinner at Spinnker tower again and again");

        given().contentType(ContentType.JSON).with().body(postContent).log().all().
                when().post("https://jsonplaceholder.typicode.com/posts").
                then().statusCode(201).body("title", is ( "My second night out for testing")).body( "body", is("I went to dinner at Spinnker tower again and again")).
                body("userId", is( "106")).
                log().all();
    }



}
