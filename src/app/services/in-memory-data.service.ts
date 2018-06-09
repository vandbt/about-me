import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const skills = [
      { name: 'Typescript, Javascript, HTML5, CSS,Angular, AngularJS, jQuery, gulp', level: 100 },
      { name: 'Node.js, Express, C#, ASP.NET MVC, AWS', level: 100 },
      { name: 'MongoDB, MS SQL Server, Entity Framework, LINQ, Database modeling', level: 100 },
      { name: 'Git, Bitbucket, SVN, CI (Travis CI, Jenkins), Docker, Elasticsearch', level: 100 },
      { name: 'CodeBeamer ALM, Jira, Confluence, Redmine', level: 100 }
  ];

    const knowledges = [
      { name: 'Expert in Front-end web development.', level: 100 },
      { name: 'Expert in server-side web development stack: C#, ASP.NET MVC, SQL Server', level: 100 },
      { name: 'Having Strong knowledge of OO design and implementation.', level: 100 },
      { name: 'Experienced with Entity Framework + LINQ', level: 100 },
      { name: 'Experienced : WCF, RESTful Web Services, Web Protocols.', level: 100 },
      { name: 'Experienced with Agile methodology', level: 100 }
  ];
    return { skills, knowledges };
  }
}
