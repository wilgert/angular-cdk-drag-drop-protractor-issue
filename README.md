# What are the steps to reproduce?
1.  Clone this repo: https://github.com/wilgert/angular-cdk-drag-drop-protractor-issue
2.  git checkout 7.0.0-beta.2 && npm install && ./node_modules/.bin/webdriver-manager update && ng e2e
3.  See that both e2e tests pass
4.  git checkout 7.0.0-rc.2 && npm install && ng e2e
5. See that now the second test fails because the card is not dragged and dropped.

