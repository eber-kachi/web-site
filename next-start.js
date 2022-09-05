#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.commands = void 0;
var log = _interopRequireWildcard(
  require("./node_modules/next/dist/build/output/log")
);
var _indexJs = _interopRequireDefault(
  require("./node_modules/next/dist/compiled/arg/index.js")
);
var _constants = require("./node_modules/next/dist/lib/constants");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule
    ? obj
    : {
        default: obj,
      };
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor
              ? Object.getOwnPropertyDescriptor(obj, key)
              : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj.default = obj;
    return newObj;
  }
}
["react", "react-dom"].forEach((dependency) => {
  try {
    // When 'npm link' is used it checks the clone location. Not the project.
    require.resolve(dependency);
  } catch (err) {
    console.warn(
      `The module '${dependency}' was not found. Next.js requires that you include it in 'dependencies' of your 'package.json'. To add it, run 'npm install ${dependency}'`
    );
  }
});
const defaultCommand = "start";
const commands = {
  build: () => Promise.resolve(require("../cli/next-build").nextBuild),
  start: () =>
    Promise.resolve(
      require("./node_modules/next/dist/cli/next-start").nextStart
    ),
  export: () => Promise.resolve(require("../cli/next-export").nextExport),
  dev: () => Promise.resolve(require("../cli/next-dev").nextDev),
  lint: () => Promise.resolve(require("../cli/next-lint").nextLint),
  telemetry: () =>
    Promise.resolve(require("../cli/next-telemetry").nextTelemetry),
  info: () => Promise.resolve(require("../cli/next-info").nextInfo),
};
exports.commands = commands;
const args = (0, _indexJs).default(
  {
    // Types
    "--version": Boolean,
    "--help": Boolean,
    "--inspect": Boolean,
    // Aliases
    "-v": "--version",
    "-h": "--help",
  },
  {
    permissive: true,
  }
);
// Detect if react-dom is enabled streaming rendering mode
const shouldUseReactRoot = !!require("react-dom/server.browser")
  .renderToReadableStream;
// Version is inlined into the file using taskr build pipeline
if (args["--version"]) {
  console.log(`Next.js v${"12.1.6"}`);
  process.exit(0);
}
// Check if we are running `next <subcommand>` or `next`
const foundCommand = Boolean(commands[args._[0]]);
// Makes sure the `next --help` case is covered
// This help message is only showed for `next --help`
// `next <subcommand> --help` falls through to be handled later
if (!foundCommand && args["--help"]) {
  console.log(`
    Usage
      $ next <command>

    Available commands
      ${Object.keys(commands).join(", ")}

    Options
      --version, -v   Version number
      --help, -h      Displays this message

    For more information run a command with the --help flag
      $ next build --help
  `);
  process.exit(0);
}
const command = foundCommand ? args._[0] : defaultCommand;
const forwardedArgs = foundCommand ? args._.slice(1) : args._;
if (args["--inspect"])
  throw new Error(
    `--inspect flag is deprecated. Use env variable NODE_OPTIONS instead: NODE_OPTIONS='--inspect' next ${command}`
  );
// Make sure the `next <subcommand> --help` case is covered
if (args["--help"]) {
  forwardedArgs.push("--help");
}
const defaultEnv = command === "dev" ? "development" : "production";
const standardEnv = ["production", "development", "test"];
if (process.env.NODE_ENV) {
  const isNotStandard = !standardEnv.includes(process.env.NODE_ENV);
  const shouldWarnCommands =
    process.env.NODE_ENV === "development"
      ? ["start", "build"]
      : process.env.NODE_ENV === "production"
      ? ["dev"]
      : [];
  if (isNotStandard || shouldWarnCommands.includes(command)) {
    log.warn(_constants.NON_STANDARD_NODE_ENV);
  }
}
process.env.NODE_ENV = process.env.NODE_ENV || defaultEnv;
process.env.NEXT_RUNTIME = "nodejs";
if (shouldUseReactRoot) {
  process.env.__NEXT_REACT_ROOT = "true";
}
// x-ref: https://github.com/vercel/next.js/pull/34688#issuecomment-1047994505
if (process.versions.pnp === "3") {
  const nodeVersionParts = process.versions.node
    .split(".")
    .map((v) => Number(v));
  if (
    nodeVersionParts[0] < 16 ||
    (nodeVersionParts[0] === 16 && nodeVersionParts[1] < 14)
  ) {
    log.warn(
      "Node.js 16.14+ is required for Yarn PnP 3.20+. More info: https://github.com/vercel/next.js/pull/34688#issuecomment-1047994505"
    );
  }
}
// Make sure commands gracefully respect termination signals (e.g. from Docker)
process.on("SIGTERM", () => process.exit(0));
process.on("SIGINT", () => process.exit(0));
commands[command]()
  .then((exec) => exec(forwardedArgs))
  .then(() => {
    if (command === "build") {
      // ensure process exits after build completes so open handles/connections
      // don't cause process to hang
      process.exit(0);
    }
  });
if (command === "dev") {
  const { CONFIG_FILES } = require("../shared/lib/constants");
  const { watchFile } = require("fs");
  for (const CONFIG_FILE of CONFIG_FILES) {
    watchFile(`${process.cwd()}/${CONFIG_FILE}`, (cur, prev) => {
      if (cur.size > 0 || prev.size > 0) {
        console.log(
          `\n> Found a change in ${CONFIG_FILE}. Restart the server to see the changes in effect.`
        );
      }
    });
  }
}

//# sourceMappingURL=next.map
