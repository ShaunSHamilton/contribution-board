import { useEffect, useRef, useState } from "react";

const App = () => {
  return (
    <main>
      <Nav />
      <Grid />
    </main>
  );
};

const testData = {
  pullRequestMeta: [
    {
      pullRequest: {
        title: "feat(client): transform repl app url to editor",
        merged: false,
        mergedAt: null,
        mergeCommit: null,
        bodyText:
          "Checklist:\n\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/41195",
      },
    },
    {
      pullRequest: {
        title: "feat(i18n): url validation translations",
        merged: true,
        mergedAt: "2021-02-20T05:02:45Z",
        mergeCommit: { additions: 20, deletions: 8 },
        bodyText:
          "Checklist:\n\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/41190",
      },
    },
    {
      pullRequest: {
        title: "feat(client): add recursion protection",
        merged: false,
        mergedAt: null,
        mergeCommit: null,
        bodyText:
          "Checklist:\n\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/41172",
      },
    },
    {
      pullRequest: {
        title: "feat(client): improve SuperBlock cert claiming UX",
        merged: false,
        mergedAt: null,
        mergeCommit: null,
        bodyText:
          "Checklist:\n\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/41147",
      },
    },
    {
      pullRequest: {
        title: "fix(client): add t to ShowProjectLinks props",
        merged: true,
        mergedAt: "2021-02-17T15:45:33Z",
        mergeCommit: { additions: 3, deletions: 3 },
        bodyText:
          "Checklist:\n\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/41139",
      },
    },
    {
      pullRequest: {
        title: "fix: .env challenge and related",
        merged: false,
        mergedAt: null,
        mergeCommit: null,
        bodyText:
          "Closes freeCodeCamp/freeCodeCamp#40915\nFollowed much of the advice given by @gikf , and managed to c...",
        permalink:
          "https://github.com/freeCodeCamp/fcc-express-bground-pkg/pull/7",
      },
    },
    {
      pullRequest: {
        title: "feat(client): add common links to formValidators regex",
        merged: true,
        mergedAt: "2021-02-19T11:43:55Z",
        mergeCommit: { additions: 11, deletions: 3 },
        bodyText:
          "Checklist:\n\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/41094",
      },
    },
    {
      pullRequest: {
        title: "fix(client): add key to Fragment in SuperBlockIntro",
        merged: true,
        mergedAt: "2021-02-13T05:05:07Z",
        mergeCommit: { additions: 3, deletions: 3 },
        bodyText:
          "Checklist:\n\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/41091",
      },
    },
    {
      pullRequest: {
        title: "fix(client): undent dents caused by dedent",
        merged: true,
        mergedAt: "2021-02-11T06:42:52Z",
        mergeCommit: { additions: 2, deletions: 2 },
        bodyText:
          "Checklist:\n\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/41052",
      },
    },
    {
      pullRequest: {
        title: "fix(client): allow editor links for Py submissions",
        merged: true,
        mergedAt: "2021-02-10T11:31:09Z",
        mergeCommit: { additions: 11, deletions: 5 },
        bodyText:
          "Checklist:\n\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/41036",
      },
    },
    {
      pullRequest: {
        title: "feat(learn): add backend solution url to help post",
        merged: true,
        mergedAt: "2021-02-09T05:53:11Z",
        mergeCommit: { additions: 17, deletions: 4 },
        bodyText:
          "Checklist:\n\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/40950",
      },
    },
    {
      pullRequest: {
        title: "docs: add cypress-gitpod guide",
        merged: true,
        mergedAt: "2021-02-10T11:33:38Z",
        mergeCommit: { additions: 61, deletions: 20 },
        bodyText:
          "Checklist:\n\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/40925",
      },
    },
    {
      pullRequest: {
        title: "update(curriculum): explicitise use-the-env-file",
        merged: true,
        mergedAt: "2021-02-04T18:43:19Z",
        mergeCommit: { additions: 1, deletions: 1 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/40898",
      },
    },
    {
      pullRequest: {
        title: "feat(client): add github to validation list",
        merged: true,
        mergedAt: "2021-02-04T06:44:35Z",
        mergeCommit: { additions: 7, deletions: 7 },
        bodyText:
          "Checklist:\n\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/40894",
      },
    },
    {
      pullRequest: {
        title: "feat(dev): add Cypress and Puppeteer to GitPod",
        merged: true,
        mergedAt: "2021-02-05T05:44:03Z",
        mergeCommit: { additions: 105, deletions: 50 },
        bodyText:
          "Checklist:\n\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/40862",
      },
    },
    {
      pullRequest: {
        title: "feat(curriculum): DRY-out backend project descriptions",
        merged: false,
        mergedAt: null,
        mergeCommit: null,
        bodyText:
          "Checklist:\n\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/40860",
      },
    },
    {
      pullRequest: {
        title: "feat(docs): add newline formatting for notes tip",
        merged: true,
        mergedAt: "2021-01-21T17:42:30Z",
        mergeCommit: { additions: 2, deletions: 2 },
        bodyText:
          "Checklist:\n\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/40712",
      },
    },
    {
      pullRequest: {
        title: "feat: add recursion protection",
        merged: false,
        mergedAt: null,
        mergeCommit: null,
        bodyText:
          "Currently, this has broken the whileloop, forloop implementation.\nAlso, it only works for arrow func...",
        permalink: "https://github.com/ojeytonwilliams/loop-protect/pull/5",
      },
    },
    {
      pullRequest: {
        title:
          "fix(learn): change requirements for positive and negative lookaheads",
        merged: true,
        mergedAt: "2021-01-21T21:35:19Z",
        mergeCommit: { additions: 8, deletions: 8 },
        bodyText:
          "Checklist:\n\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/40570",
      },
    },
    {
      pullRequest: {
        title: "feat(dev): add Cypress and Puppeteer to GitPod",
        merged: true,
        mergedAt: "2021-02-01T05:15:03Z",
        mergeCommit: { additions: 107, deletions: 51 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/40569",
      },
    },
    {
      pullRequest: {
        title: "fix(learn): teleport assertion output to user view",
        merged: false,
        mergedAt: null,
        mergeCommit: null,
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/40518",
      },
    },
    {
      pullRequest: {
        title: "fix(tauri): adjust tauri config to remove underscores",
        merged: false,
        mergedAt: null,
        mergeCommit: null,
        bodyText:
          "Tauri does not build past candle.exe, if resources path contains underscores. So, this PR:\nA) Delete...",
        permalink: "https://github.com/ShaunSHamilton/RustCoder/pull/9",
      },
    },
    {
      pullRequest: {
        title: "feat(curriculum): DRY-out backend project descriptions",
        merged: true,
        mergedAt: "2021-02-01T14:21:31Z",
        mergeCommit: { additions: 48, deletions: 48 },
        bodyText:
          "Checklist:\n\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/40456",
      },
    },
    {
      pullRequest: {
        title: "broken: groundwork to initialise dynamic server",
        merged: false,
        mergedAt: null,
        mergeCommit: null,
        bodyText: "Closes #7",
        permalink: "https://github.com/ShaunSHamilton/RustCoder/pull/8",
      },
    },
    {
      pullRequest: {
        title: "feat(dev): update GitPod testing",
        merged: true,
        mergedAt: "2020-12-01T13:37:11Z",
        mergeCommit: { additions: 7, deletions: 23 },
        bodyText:
          "Checklist:\n\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/40328",
      },
    },
    {
      pullRequest: {
        title: "fix(learn): remove white space for quick fix",
        merged: true,
        mergedAt: "2020-11-20T08:21:22Z",
        mergeCommit: { additions: 11, deletions: 6 },
        bodyText:
          "Checklist:\n\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/40231",
      },
    },
    {
      pullRequest: {
        title: "fix(client): give useful error in solutionform",
        merged: true,
        mergedAt: "2021-02-01T13:34:05Z",
        mergeCommit: { additions: 114, deletions: 40 },
        bodyText:
          "Checklist:\n\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/40225",
      },
    },
    {
      pullRequest: {
        title: "feat(tools): add fully certified development user",
        merged: true,
        mergedAt: "2020-12-03T15:45:46Z",
        mergeCommit: { additions: 4805, deletions: 130 },
        bodyText:
          "Checklist:\n\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/40181",
      },
    },
    {
      pullRequest: {
        title: "feat(learn): add url-shortener instructions",
        merged: true,
        mergedAt: "2020-11-03T15:06:08Z",
        mergeCommit: { additions: 2, deletions: 0 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/40162",
      },
    },
    {
      pullRequest: {
        title: "fix(learn): add route to timestamp api in tests",
        merged: true,
        mergedAt: "2020-11-02T03:54:57Z",
        mergeCommit: { additions: 10, deletions: 5 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/40144",
      },
    },
    {
      pullRequest: {
        title: "fix(client): fix modal heading CSS for light theme",
        merged: true,
        mergedAt: "2020-11-02T13:16:05Z",
        mergeCommit: { additions: 11, deletions: 11 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/40106",
      },
    },
    {
      pullRequest: {
        title: "feat(client): add project links to certificate",
        merged: true,
        mergedAt: "2021-02-01T13:25:15Z",
        mergeCommit: { additions: 345, deletions: 33 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/40071",
      },
    },
    {
      pullRequest: {
        title: "feat: remove instructions and hyperdev",
        merged: true,
        mergedAt: "2020-11-27T17:59:35Z",
        mergeCommit: { additions: 357, deletions: 646 },
        bodyText:
          "Needs discussion as to how to best split up Zombie.js section\nRelated to: freeCodeCamp/freeCodeCamp#...",
        permalink:
          "https://github.com/freeCodeCamp/boilerplate-mochachai/pull/27",
      },
    },
    {
      pullRequest: {
        title: "feat(learn): add mocha and chai instructions",
        merged: true,
        mergedAt: "2020-11-26T18:05:43Z",
        mergeCommit: { additions: 510, deletions: 137 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/39976",
      },
    },
    {
      pullRequest: {
        title: "feat: remove instructions and hyperdev",
        merged: true,
        mergedAt: "2020-11-06T21:38:27Z",
        mergeCommit: { additions: 323, deletions: 722 },
        bodyText:
          "Related to: freeCodeCamp/freeCodeCamp#39720\nLinked to learn PR: freeCodeCamp/freeCodeCamp#39970\nCann...",
        permalink:
          "https://github.com/freeCodeCamp/boilerplate-mongomongoose/pull/31",
      },
    },
    {
      pullRequest: {
        title: "feat(learn): migrate mongodb-mongoose instructions to learn",
        merged: true,
        mergedAt: "2020-11-03T14:22:56Z",
        mergeCommit: { additions: 254, deletions: 66 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/39970",
      },
    },
    {
      pullRequest: {
        title: "feat: remove user stories from url-shortener",
        merged: true,
        mergedAt: "2020-10-14T19:37:07Z",
        mergeCommit: { additions: 0, deletions: 7 },
        bodyText:
          "Related to Issue: freeCodeCamp/freeCodeCamp#39721\nAs is, easy-peasy-lemon-squeezy.",
        permalink: "https://github.com/freeCodeCamp/demo-projects/pull/21",
      },
    },
    {
      pullRequest: {
        title: "feat(learn): migrate instructions from adnode boilerplate",
        merged: true,
        mergedAt: "2020-10-15T14:37:30Z",
        mergeCommit: { additions: 24, deletions: 10 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/39791",
      },
    },
    {
      pullRequest: {
        title: "feat: remove all instructions from boilerplate",
        merged: true,
        mergedAt: "2020-10-26T17:13:26Z",
        mergeCommit: { additions: 17, deletions: 53 },
        bodyText:
          "Discussion might be needed for the README.md changes.\nRelated to: freeCodeCamp/freeCodeCamp#39720 an...",
        permalink:
          "https://github.com/freeCodeCamp/boilerplate-advancednode/pull/15",
      },
    },
    {
      pullRequest: {
        title: "refactor(client): make ShowCertification functional",
        merged: true,
        mergedAt: "2020-10-23T10:15:57Z",
        mergeCommit: { additions: 177, deletions: 193 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/39735",
      },
    },
    {
      pullRequest: {
        title: "feat/fix(client): refactor certMap and fix date propType",
        merged: false,
        mergedAt: null,
        mergeCommit: null,
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/39695",
      },
    },
    {
      pullRequest: {
        title:
          "fix(docs): add formatting instructions for coding challenge text",
        merged: true,
        mergedAt: "2020-10-15T08:25:05Z",
        mergeCommit: { additions: 11, deletions: 7 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/39660",
      },
    },
    {
      pullRequest: {
        title: "chore: remove isRequired property",
        merged: true,
        mergedAt: "2020-09-21T15:21:47Z",
        mergeCommit: { additions: 0, deletions: 158 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/39611",
      },
    },
    {
      pullRequest: {
        title: "fix(client): rename certification for typo",
        merged: true,
        mergedAt: "2020-09-16T17:18:02Z",
        mergeCommit: { additions: 1, deletions: 2 },
        bodyText:
          "Checklist:\n\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/39567",
      },
    },
    {
      pullRequest: {
        title: "fix(client): refactor formfields",
        merged: true,
        mergedAt: "2020-09-15T14:07:55Z",
        mergeCommit: { additions: 0, deletions: 56 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/39552",
      },
    },
    {
      pullRequest: {
        title: "fix: add backend placeholder to solution form",
        merged: true,
        mergedAt: "2020-09-04T13:44:26Z",
        mergeCommit: { additions: 19, deletions: 12 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/39494",
      },
    },
    {
      pullRequest: {
        title: "fix: convert async tests to synchronous",
        merged: true,
        mergedAt: "2020-09-03T00:24:23Z",
        mergeCommit: { additions: 759, deletions: 188 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/39478",
      },
    },
    {
      pullRequest: {
        title: "fix: add backslash to path test for windows paths",
        merged: true,
        mergedAt: "2020-08-25T20:22:04Z",
        mergeCommit: { additions: 4, deletions: 1 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/39454",
      },
    },
    {
      pullRequest: {
        title: "fix(learn): correct personal library replit link",
        merged: true,
        mergedAt: "2020-08-20T20:08:03Z",
        mergeCommit: { additions: 1, deletions: 1 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/39442",
      },
    },
    {
      pullRequest: {
        title: "feat(client): add local timezone",
        merged: false,
        mergedAt: null,
        mergeCommit: null,
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/39218",
      },
    },
    {
      pullRequest: {
        title: "fix(curriculum): convert all video challenges to markdown",
        merged: true,
        mergedAt: "2020-08-04T19:56:42Z",
        mergeCommit: { additions: 711, deletions: 345 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/39189",
      },
    },
    {
      pullRequest: {
        title: "fix(curriculum): add regex to chai tests for double quotes",
        merged: true,
        mergedAt: "2020-08-04T19:57:09Z",
        mergeCommit: { additions: 13, deletions: 13 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/39187",
      },
    },
    {
      pullRequest: {
        title: "fix(curriculum): video challenge navigation",
        merged: false,
        mergedAt: null,
        mergeCommit: null,
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/39126",
      },
    },
    {
      pullRequest: {
        title: "feat/fix: necessary changes for linked pr",
        merged: true,
        mergedAt: "2020-09-11T21:22:42Z",
        mergeCommit: { additions: 1357, deletions: 53 },
        bodyText:
          "These changes accomplish the following:\n\nUpdate outdated mongodb connection\nIncrease ease with which...",
        permalink:
          "https://github.com/freeCodeCamp/boilerplate-advancednode/pull/11",
      },
    },
    {
      pullRequest: {
        title:
          "fix(curriculum): advanced node express changes for new boilerplate",
        merged: true,
        mergedAt: "2020-09-04T13:50:04Z",
        mergeCommit: { additions: 464, deletions: 167 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/39080",
      },
    },
    {
      pullRequest: {
        title: "feat(curriculum): remove reliance on .lang.md extensions",
        merged: true,
        mergedAt: "2020-09-29T20:43:16Z",
        mergeCommit: { additions: 0, deletions: 0 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/39024",
      },
    },
    {
      pullRequest: {
        title: "feat(docs): add wsl setup to docs",
        merged: true,
        mergedAt: "2020-06-13T15:12:24Z",
        mergeCommit: { additions: 241, deletions: 0 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/38997",
      },
    },
    {
      pullRequest: {
        title: "feat(docs): add wsl setup",
        merged: false,
        mergedAt: null,
        mergeCommit: null,
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/38996",
      },
    },
    {
      pullRequest: {
        title: "fix(curriculum): python for everybody",
        merged: true,
        mergedAt: "2020-05-31T12:57:10Z",
        mergeCommit: { additions: 946, deletions: 374 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/38953",
      },
    },
    {
      pullRequest: {
        title:
          "fix(curriculum): add clarification to question and escape backslash",
        merged: true,
        mergedAt: "2020-06-02T07:27:52Z",
        mergeCommit: { additions: 1, deletions: 1 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/38951",
      },
    },
    {
      pullRequest: {
        title: "fix(curriculum): remove extra word",
        merged: true,
        mergedAt: "2020-05-30T20:09:28Z",
        mergeCommit: { additions: 1, deletions: 1 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/38949",
      },
    },
    {
      pullRequest: {
        title: "fix(curriculum): add test to project euler 69",
        merged: false,
        mergedAt: null,
        mergeCommit: null,
        bodyText:
          "Checklist:\n\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/38881",
      },
    },
    {
      pullRequest: {
        title:
          "fix(curriculum): add regex to chai assertions for double and single quotes",
        merged: false,
        mergedAt: null,
        mergeCommit: null,
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/38817",
      },
    },
    {
      pullRequest: {
        title: "fix(curriculum): added test to allow any order solution",
        merged: true,
        mergedAt: "2020-05-18T14:02:04Z",
        mergeCommit: { additions: 10, deletions: 1 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/38771",
      },
    },
    {
      pullRequest: {
        title: "fix(curriculum): changed test to use regex",
        merged: true,
        mergedAt: "2020-09-02T16:59:17Z",
        mergeCommit: { additions: 2, deletions: 3 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/38770",
      },
    },
    {
      pullRequest: {
        title: "fix(curriculum): change project codepen links",
        merged: true,
        mergedAt: "2020-05-06T14:23:27Z",
        mergeCommit: { additions: 10, deletions: 10 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/38746",
      },
    },
    {
      pullRequest: {
        title: "fix(docs): prevent nav covering headings",
        merged: true,
        mergedAt: "2020-04-22T15:33:57Z",
        mergeCommit: { additions: 9, deletions: 0 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/38608",
      },
    },
    {
      pullRequest: {
        title: "fix(api): add toLowerCase method to email",
        merged: true,
        mergedAt: "2020-04-24T10:53:30Z",
        mergeCommit: { additions: 75, deletions: 4 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/38586",
      },
    },
    {
      pullRequest: {
        title: "fix(curriculum): added const to test string",
        merged: true,
        mergedAt: "2020-04-21T07:12:54Z",
        mergeCommit: { additions: 1, deletions: 1 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/38583",
      },
    },
    {
      pullRequest: {
        title: "fix(curriculum): change debugging console lesson",
        merged: true,
        mergedAt: "2020-04-18T11:01:42Z",
        mergeCommit: { additions: 15, deletions: 15 },
        bodyText:
          "I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive title (not a ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/38554",
      },
    },
    {
      pullRequest: {
        title: "fix(client): add relevant placeholder to link submission",
        merged: true,
        mergedAt: "2020-05-07T16:19:07Z",
        mergeCommit: { additions: 50, deletions: 74 },
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/38411",
      },
    },
    {
      pullRequest: {
        title: "fix(client): Added relevant placeholder to link submission",
        merged: false,
        mergeCommit: null,
        bodyText:
          "Checklist:\n\n I have read freeCodeCamp's contribution guidelines.\n My pull request has a descriptive ...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/38388",
      },
    },
    {
      pullRequest: {
        title: "fix(learn): Added code tags to translated texts",
        merged: true,
        mergedAt: "2020-08-31T03:53:10Z",
        mergeCommit: { additions: 12, deletions: 12 },
        bodyText:
          "Checklist:\n\n[X ] I have read freeCodeCamp's contribution guidelines.\n[X ] My pull request has a desc...",
        permalink: "https://github.com/freeCodeCamp/freeCodeCamp/pull/38316",
      },
    },
  ],
};

const Grid = () => {
  const dragSrcEle = useRef(null);
  const [allData, setAllData] = useState();

  useEffect(() => {
    (async () => {
      const data = await getContributions();
      setAllData(data);
    })();
  }, []);

  useEffect(() => {
    document.querySelectorAll("article").forEach((item) => {
      item.addEventListener("dragstart", handleDragStart, false);
      item.addEventListener("dragover", handleDragOver, false);
      item.addEventListener("dragenter", handleDragEnter, false);
      item.addEventListener("dragleave", handleDragLeave, false);
      item.addEventListener("dragend", handleDragEnd, false);
      item.addEventListener("drop", handleDrop, false);
    });
  }, [allData]);

  function handleDragStart(e) {
    dragSrcEle.current = this;

    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML);
  }

  function handleDragEnd(e) {
    document.querySelectorAll("article").forEach((item) => {
      item.classList.remove("over");
    });
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    return false;
  }

  function handleDragEnter(e) {
    this.classList.add("over");
  }

  function handleDragLeave(e) {
    this.classList.remove("over");
  }
  function handleDrop(e) {
    e.stopPropagation();
    if (dragSrcEle.current !== this) {
      dragSrcEle.current.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData("text/html");
    }
    return false;
  }

  return (
    <div id="grid">
      {allData?.pullRequestMeta?.length &&
        allData.pullRequestMeta.map(({ pullRequest: pr }, i) => (
          <Tile
            key={pr?.number ?? i}
            title={pr.title}
            merged={pr.merged}
            mergedAt={pr.mergedAt}
            bodyText={pr.bodyText}
            link={pr.permalink}
            repo={pr?.repository?.name ?? "test"}
          />
        ))}
    </div>
  );
};

const Tile = ({
  title,
  merged,
  bodyText,
  mergedAt,
  link,
  repo,
  favourite = false,
}) => {
  const text = parseBodyText(bodyText);
  const [isStarred, setIsStarred] = useState(favourite);

  const handleFavourite = () => {
    console.log(isStarred);
    setIsStarred(!isStarred);
  };
  return (
    <article draggable="true">
      <a href={link}>
        <h2>{title}</h2>
      </a>
      <p>{text}</p>
      <div>
        <span>{merged ? parseDate(mergedAt) : "not merged"}</span>
        <button onClick={handleFavourite}>
          <i className={`fa fa-star ${isStarred ? "starred" : ""}`}></i>
        </button>
        <span>{repo}</span>
      </div>
    </article>
  );
};

const Nav = () => {
  const [isToggled, setIsToggled] = useState(false);
  const toggleNav = () => setIsToggled(!isToggled);
  return (
    <nav id="navbar">
      {!isToggled && <h1>Shaun Hamilton's Contribution Board</h1>}
      <div
        className={"collapse " + (isToggled ? "show" : "")}
        id="navbarToggleExternalContent"
      >
        <a
          className="nav-link"
          tabIndex="5"
          href="/portfolio"
          onClick={toggleNav}
        >
          Portfolio
        </a>
        <a
          className="nav-link"
          tabIndex="6"
          href="https://github.com/ShaunSHamilton"
          onClick={toggleNav}
        >
          GitHub
        </a>
        <button
          className="nav-link"
          tabIndex="5"
          href="#certifications"
          onClick={toggleNav}
        >
          Login
        </button>
      </div>
      <button
        id="navbar-toggle-btn"
        tabIndex="4"
        type="button"
        onClick={toggleNav}
        aria-expanded={isToggled}
        aria-label="Toggle navigation"
        data-toggle="show"
        data-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
      >
        <span className="navbar-toggler-icon fa fa-bars"></span>
      </button>
    </nav>
  );
};

function parseBodyText(text) {
  const ind = text.indexOf("etc.");
  return text
    .slice(ind === -1 ? 0 : text)
    .replace(/(etc\.)|(Closes #(\d+|X+))/g, "");
}

function parseDate(date) {
  return date.slice(0, 10);
}

async function getContributions() {
  // const response = await fetch("http://localhost:8000"); //fetch("https://contribution-api.herokuapp.com/");
  const data = testData; //await response.json();
  return data;
}

export default App;
