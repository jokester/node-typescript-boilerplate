module.exports = {
  "transform": {
    ".(ts|tsx)": "ts-jest"
  },
  "roots": [
    "src",
    "build"
  ],
  "testMatch": [
    "**/__test__/*\\.(ts|js|tsx|jsx)",
    "**/*\\.(spec|test)\\.(ts|js|tsx|jsx)"
  ],
  "collectCoverageFrom": [
    "src/**/*.(ts|tsx)",
    "!out/",
    "!build/",
    "!**/node_modules",
    "!/coverage"
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json"
  ],
  "coverageReporters": [
    "json",
    "lcov",
    "text",
    "html"
  ],
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/resolves-to-path.json",
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/resolves-to-path.json"
  }
}