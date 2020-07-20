package stepDef;

import com.jayway.jsonpath.DocumentContext;
import cucumber.api.PendingException;
import cucumber.api.java8.En;
import io.restassured.response.Response;
import utilities.RequestBodyForPostRequest;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertNotNull;


//import static org.junit.Assert.assertThat;

public class SocialNetworkingStepDef extends BaseStep implements En {
    Response responseForCheckingService, responseForGetAPost, responseForPostPost, responseForGetAComment, responseForPostComment;
    public SocialNetworkingStepDef(){
        Given("^service is up and running$", () -> {
            setHeadersWithContentType();
            setEndpointPath(BaseURL);
            getMethodCall();
            responseForCheckingService = getResponse();
            assertThat(responseForCheckingService.statusCode(), is(equalTo(200)));

        });

        When("^i search for \"([^\"]*)\" of a post with a GET method$", (String id) -> {
           setHeadersWithContentType();
           setEndpointPath(MakeAPost + id);
            getMethodCall();
            responseForGetAPost = getResponse();


        });

        Then("^i should get the correct \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\" returned with status code of (\\d+)$", (String id, String title, String body, Integer sCode) -> {
            assertThat(responseForGetAPost.statusCode(), is(equalTo(sCode)));
            assertThat(responseForGetAPost.body().jsonPath().get("id").toString(), is(id));
            assertThat(responseForGetAPost.body().jsonPath().get("title"), is(title));
            assertThat(responseForGetAPost.body().jsonPath().get("body"), is(body));

        });
        When("^I create a new post with the following details \"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\",$", (String uId, String title, String body) -> {
            setHeadersWithContentType();

            DocumentContext requestBody =loadTheJsonTemplate(MakeAPostPayloadPath);
            RequestBodyForPostRequest requestBodyForPostRequest = new RequestBodyForPostRequest();
            requestBodyForPostRequest.setRequestBodyForNewPost(requestBody, uId, title, body);
            setEndpointPath(MakeAPost);
            postMethodCall();
            responseForPostPost = getResponse();


        });
        Then("^i should get the correct \"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\" returned with status code of (\\d+)$", (String uId, String title, String body, Integer sCode) -> {
            assertThat(responseForPostPost.statusCode(), is(sCode));
            assertThat(responseForPostPost.body().jsonPath().get("userId"), is(uId));
            assertThat(responseForPostPost.body().jsonPath().get("title"), is(title));
            assertThat(responseForPostPost.body().jsonPath().get("body"), is(body));
            assertNotNull(responseForPostPost.body().jsonPath().get("id"));
        });
        When("^i search for comment with \"([^\"]*)\" with a GET method$", (String id) -> {
            setHeadersWithContentType();
            setEndpointPath(MakeAComment + id);
            getMethodCall();
            responseForGetAComment = getResponse();
        });
        Then("^i the correct \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\" are returned with status code of (\\d+)$", (String id, String name, String email, String body, Integer sCode) -> {
            assertThat(responseForGetAComment.statusCode(), is(equalTo(sCode)));
            assertThat(responseForGetAComment.body().jsonPath().get("id").toString(), is(id));
            assertThat(responseForGetAComment.body().jsonPath().get("name"), is(name));
            assertThat(responseForGetAComment.body().jsonPath().get("email"), is(email));
            assertThat(responseForGetAComment.body().jsonPath().get("body"), is(body));
        });
        When("^I create a new comment with the following details \"([^\"]*)\",\"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\",$", (String postId, String name, String email, String body) -> {
            setHeadersWithContentType();
            RequestBodyForPostRequest requestBodyForPostRequest = new RequestBodyForPostRequest();
            DocumentContext requestBody =loadTheJsonTemplate(MakeACommentPayloadPath);
            requestBodyForPostRequest.setRequestBodyForNewComment(requestBody, postId, name, email, body);
            setEndpointPath(MakeAComment);
            postMethodCall();
            responseForPostComment = getResponse();
        });
        Then("^i should get the correct \"([^\"]*)\",\"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\", returned with status code of (\\d+)$", (String postid, String name, String email, String body, Integer sCode) -> {
            assertThat(responseForPostComment.statusCode(), is(sCode));
            assertThat(responseForPostComment.body().jsonPath().get("postId"), is(postid));
            assertThat(responseForPostComment.body().jsonPath().get("name"), is(name));
            assertThat(responseForPostComment.body().jsonPath().get("email"), is(email));
            assertThat(responseForPostComment.body().jsonPath().get("body"), is(body));
            assertNotNull(responseForPostComment.body().jsonPath().get("id"));
        });
        When("^i search for User with \"([^\"]*)\" with a GET method$", (String arg0) -> {
            // Write code here that turns the phrase above into concrete actions
            throw new PendingException();
        });
        Then("^i should see the correct \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\" are returned with status code of (\\d+)$", (String arg0, String arg1, String arg2, String arg3, Integer arg4) -> {
            // Write code here that turns the phrase above into concrete actions
            throw new PendingException();
        });

    }

}
