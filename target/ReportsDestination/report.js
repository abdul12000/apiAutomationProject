$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SocialNetworkingRequests.feature");
formatter.feature({
  "line": 2,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TestToRun"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#  Imagine you are building a social network. Starting from simple functionality. Users are now able to make posts and comment on them."
    },
    {
      "line": 4,
      "value": "#  You are working in the backend team that exposes the service: https://jsonplaceholder.typicode.com/ which has the following endpoints:"
    },
    {
      "line": 5,
      "value": "#  1. Make posts: https://jsonplaceholder.typicode.com/posts"
    },
    {
      "line": 6,
      "value": "#  2. Comment on posts: https://jsonplaceholder.typicode.com/comments"
    },
    {
      "line": 7,
      "value": "#  3. List of users: https://jsonplaceholder.typicode.com/users"
    },
    {
      "line": 8,
      "value": "#  Using Rest-Assured, Cucumber, and Java, create a few scenarios to test this functionality"
    },
    {
      "line": 10,
      "value": "#  Background: service is up and running"
    },
    {
      "line": 12,
      "value": "#  @TestToRun"
    }
  ],
  "line": 13,
  "name": "1. Test that existing posts can be retreived with a GET request",
  "description": "",
  "id": ";1.-test-that-existing-posts-can-be-retreived-with-a-get-request",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "i search for \"\u003cid\u003e\" of a post with a GET method",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "i should get the correct \"\u003cid\u003e\", \"\u003ctitle\u003e\" and \"\u003cbody\u003e\" returned with status code of 200",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": ";1.-test-that-existing-posts-can-be-retreived-with-a-get-request;",
  "rows": [
    {
      "cells": [
        "id",
        "title",
        "body"
      ],
      "line": 18,
      "id": ";1.-test-that-existing-posts-can-be-retreived-with-a-get-request;;1"
    },
    {
      "cells": [
        "4",
        "eum et est occaecati",
        "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      ],
      "line": 19,
      "id": ";1.-test-that-existing-posts-can-be-retreived-with-a-get-request;;2"
    },
    {
      "cells": [
        "10",
        "optio molestias id quia eum",
        "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
      ],
      "line": 20,
      "id": ";1.-test-that-existing-posts-can-be-retreived-with-a-get-request;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "1. Test that existing posts can be retreived with a GET request",
  "description": "",
  "id": ";1.-test-that-existing-posts-can-be-retreived-with-a-get-request;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestToRun"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "i search for \"4\" of a post with a GET method",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "i should get the correct \"4\", \"eum et est occaecati\" and \"ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit\" returned with status code of 200",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SocialNetworkingStepDef.java:20"
});
formatter.result({
  "duration": 6244370400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 14
    }
  ],
  "location": "SocialNetworkingStepDef.java:29"
});
formatter.result({
  "duration": 747194000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 26
    },
    {
      "val": "eum et est occaecati",
      "offset": 31
    },
    {
      "val": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      "offset": 58
    },
    {
      "val": "200",
      "offset": 279
    }
  ],
  "location": "SocialNetworkingStepDef.java:38"
});
formatter.result({
  "duration": 2091923000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "1. Test that existing posts can be retreived with a GET request",
  "description": "",
  "id": ";1.-test-that-existing-posts-can-be-retreived-with-a-get-request;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestToRun"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "i search for \"10\" of a post with a GET method",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "i should get the correct \"10\", \"optio molestias id quia eum\" and \"quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error\" returned with status code of 200",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SocialNetworkingStepDef.java:20"
});
formatter.result({
  "duration": 180312300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 14
    }
  ],
  "location": "SocialNetworkingStepDef.java:29"
});
formatter.result({
  "duration": 153885200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 26
    },
    {
      "val": "optio molestias id quia eum",
      "offset": 32
    },
    {
      "val": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
      "offset": 66
    },
    {
      "val": "200",
      "offset": 226
    }
  ],
  "location": "SocialNetworkingStepDef.java:38"
});
formatter.result({
  "duration": 171334500,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 22,
      "value": "#  @TestToRun"
    }
  ],
  "line": 23,
  "name": "2. Test that new posts can be created with the POST request",
  "description": "",
  "id": ";2.-test-that-new-posts-can-be-created-with-the-post-request",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I create a new post with the following details \"\u003cuId\u003e\",\"\u003ctitle\u003e\" and \"\u003cbody\u003e\",",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "i should get the correct \"\u003cuId\u003e\",\"\u003ctitle\u003e\" and \"\u003cbody\u003e\" returned with status code of 201",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": ";2.-test-that-new-posts-can-be-created-with-the-post-request;",
  "rows": [
    {
      "cells": [
        "uId",
        "title",
        "body"
      ],
      "line": 28,
      "id": ";2.-test-that-new-posts-can-be-created-with-the-post-request;;1"
    },
    {
      "cells": [
        "10009",
        "this is my Test title",
        "this is my test body"
      ],
      "line": 29,
      "id": ";2.-test-that-new-posts-can-be-created-with-the-post-request;;2"
    },
    {
      "cells": [
        "10027",
        "this is my second Test title",
        "this is my second test body"
      ],
      "line": 30,
      "id": ";2.-test-that-new-posts-can-be-created-with-the-post-request;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "2. Test that new posts can be created with the POST request",
  "description": "",
  "id": ";2.-test-that-new-posts-can-be-created-with-the-post-request;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestToRun"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I create a new post with the following details \"10009\",\"this is my Test title\" and \"this is my test body\",",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "i should get the correct \"10009\",\"this is my Test title\" and \"this is my test body\" returned with status code of 201",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SocialNetworkingStepDef.java:20"
});
formatter.result({
  "duration": 141955700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10009",
      "offset": 48
    },
    {
      "val": "this is my Test title",
      "offset": 56
    },
    {
      "val": "this is my test body",
      "offset": 84
    }
  ],
  "location": "SocialNetworkingStepDef.java:45"
});
formatter.result({
  "duration": 599804000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10009",
      "offset": 26
    },
    {
      "val": "this is my Test title",
      "offset": 34
    },
    {
      "val": "this is my test body",
      "offset": 62
    },
    {
      "val": "201",
      "offset": 113
    }
  ],
  "location": "SocialNetworkingStepDef.java:56"
});
formatter.result({
  "duration": 170380900,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "2. Test that new posts can be created with the POST request",
  "description": "",
  "id": ";2.-test-that-new-posts-can-be-created-with-the-post-request;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestToRun"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I create a new post with the following details \"10027\",\"this is my second Test title\" and \"this is my second test body\",",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "i should get the correct \"10027\",\"this is my second Test title\" and \"this is my second test body\" returned with status code of 201",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SocialNetworkingStepDef.java:20"
});
formatter.result({
  "duration": 130978200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10027",
      "offset": 48
    },
    {
      "val": "this is my second Test title",
      "offset": 56
    },
    {
      "val": "this is my second test body",
      "offset": 91
    }
  ],
  "location": "SocialNetworkingStepDef.java:45"
});
formatter.result({
  "duration": 309857400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10027",
      "offset": 26
    },
    {
      "val": "this is my second Test title",
      "offset": 34
    },
    {
      "val": "this is my second test body",
      "offset": 69
    },
    {
      "val": "201",
      "offset": 127
    }
  ],
  "location": "SocialNetworkingStepDef.java:56"
});
formatter.result({
  "duration": 151893200,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 32,
      "value": "#    @TestToRun"
    }
  ],
  "line": 33,
  "name": "3. Test that existing comments can be retreived with a GET request",
  "description": "",
  "id": ";3.-test-that-existing-comments-can-be-retreived-with-a-get-request",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "i search for comment with \"\u003cid\u003e\" with a GET method",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "i the correct \"\u003cid\u003e\", \"\u003cname\u003e\", \"\u003cemail\u003e\" and \"\u003cbody\u003e\" are returned with status code of 200",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": ";3.-test-that-existing-comments-can-be-retreived-with-a-get-request;",
  "rows": [
    {
      "cells": [
        "id",
        "name",
        "email",
        "body"
      ],
      "line": 38,
      "id": ";3.-test-that-existing-comments-can-be-retreived-with-a-get-request;;1"
    },
    {
      "cells": [
        "2",
        "quo vero reiciendis velit similique earum",
        "Jayne_Kuhic@sydney.com",
        "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
      ],
      "line": 39,
      "id": ";3.-test-that-existing-comments-can-be-retreived-with-a-get-request;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 39,
  "name": "3. Test that existing comments can be retreived with a GET request",
  "description": "",
  "id": ";3.-test-that-existing-comments-can-be-retreived-with-a-get-request;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestToRun"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "i search for comment with \"2\" with a GET method",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "i the correct \"2\", \"quo vero reiciendis velit similique earum\", \"Jayne_Kuhic@sydney.com\" and \"est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et\" are returned with status code of 200",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SocialNetworkingStepDef.java:20"
});
formatter.result({
  "duration": 171876100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 27
    }
  ],
  "location": "SocialNetworkingStepDef.java:63"
});
formatter.result({
  "duration": 130925300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 15
    },
    {
      "val": "quo vero reiciendis velit similique earum",
      "offset": 20
    },
    {
      "val": "Jayne_Kuhic@sydney.com",
      "offset": 65
    },
    {
      "val": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
      "offset": 94
    },
    {
      "val": "200",
      "offset": 297
    }
  ],
  "location": "SocialNetworkingStepDef.java:69"
});
formatter.result({
  "duration": 203560700,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 41,
      "value": "#  @TestToRun"
    }
  ],
  "line": 42,
  "name": "4. Test that new comments can be created with the POST request",
  "description": "",
  "id": ";4.-test-that-new-comments-can-be-created-with-the-post-request",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I create a new comment with the following details \"\u003cpostId\u003e\",\"\u003cname\u003e\", \"\u003cemail\u003e\" and \"\u003cbody\u003e\",",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "i should get the correct \"\u003cpostId\u003e\",\"\u003cname\u003e\", \"\u003cemail\u003e\" and \"\u003cbody\u003e\", returned with status code of 201",
  "keyword": "Then "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": ";4.-test-that-new-comments-can-be-created-with-the-post-request;",
  "rows": [
    {
      "cells": [
        "postId",
        "name",
        "email",
        "body"
      ],
      "line": 47,
      "id": ";4.-test-that-new-comments-can-be-created-with-the-post-request;;1"
    },
    {
      "cells": [
        "10009",
        "this is my Test name",
        "tesemail.com",
        "this is my test body"
      ],
      "line": 48,
      "id": ";4.-test-that-new-comments-can-be-created-with-the-post-request;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 48,
  "name": "4. Test that new comments can be created with the POST request",
  "description": "",
  "id": ";4.-test-that-new-comments-can-be-created-with-the-post-request;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestToRun"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "service is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I create a new comment with the following details \"10009\",\"this is my Test name\", \"tesemail.com\" and \"this is my test body\",",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "i should get the correct \"10009\",\"this is my Test name\", \"tesemail.com\" and \"this is my test body\", returned with status code of 201",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SocialNetworkingStepDef.java:20"
});
formatter.result({
  "duration": 147705900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10009",
      "offset": 51
    },
    {
      "val": "this is my Test name",
      "offset": 59
    },
    {
      "val": "tesemail.com",
      "offset": 83
    },
    {
      "val": "this is my test body",
      "offset": 102
    }
  ],
  "location": "SocialNetworkingStepDef.java:76"
});
formatter.result({
  "duration": 332851200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10009",
      "offset": 26
    },
    {
      "val": "this is my Test name",
      "offset": 34
    },
    {
      "val": "tesemail.com",
      "offset": 58
    },
    {
      "val": "this is my test body",
      "offset": 77
    },
    {
      "val": "201",
      "offset": 129
    }
  ],
  "location": "SocialNetworkingStepDef.java:85"
});
formatter.result({
  "duration": 173512500,
  "status": "passed"
});
});