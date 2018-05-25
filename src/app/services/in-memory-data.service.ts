import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const skills = [
      { name: "Typescript, Javascript, HTML5, CSS, C#.NET", level: 100 },
      { name: "Angular, AngularJS, jQuery, gulp", level: 100 },
      { name: "Node, Express, ASP.NET, AWS", level: 100 },
      {
        name: "MongoDB, MS SQL Server , SQL Query, Entity Framework, DB 모델링",
        level: 100
      },
      {
        name:
          "Git, Bitbucket, SVN, CI (Travis CI, Jenkins), Docker, Elasticsearch",
        level: 100
      },
      { name: "CodeBeamer ALM, Jira, Confluence, Redmine", level: 100 }
    ];

    const knowledges = [
      {
        name:
          "비즈니스 도메인 분석, 아키텍처 설계, 어플리케이션 프레임워크 설계 능력",
        level: 100
      },
      {
        name: "TDD, BDD, OOP, 도메인드리븐디자인, 엔터프라이즈 아키텍처 설계",
        level: 100
      },
      {
        name: "소셜네트워크, 웹서비스, e-Commerce, 지식 정보 서비스 기반 지식",
        level: 100
      },
      { name: "Agile Development", level: 100 }
    ];
    return { skills, knowledges };
  }
}
