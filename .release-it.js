module.exports = {
  "github": {
    "push": false
  },
	"npm": {
    "publish": false,
    "publishPath": "./lib",
    "access": "public"
	},
	"hooks": {
    // "before:init": ["npm run lint", "npm test"],
    // "after:my-plugin:bump": "./bin/my-script.sh",
    "after:bump": "NODE_ENV=production yarn build:lib",
    "after:git:release": "echo After git push, before github release",
    "after:release": "echo Successfully released ${name} v${version} to ${repo.repository}."
  },
  "git": {
    "commitMessage": "chore: release v${version}",
    "requireCleanWorkingDir": false
  },
  "plugins": {
    "@release-it/bumper": {
      "in": "./lib/package.json",
      "out": "./lib/package.json"
    }
  }
}