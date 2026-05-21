#!/usr/bin/env node
/**
 * Cursor stop hook: if the working tree has uncommitted changes,
 * prompt the agent to commit before finishing.
 */
const { execSync } = require("child_process");

try {
  const status = execSync("git status --porcelain", {
    encoding: "utf8",
    stdio: ["pipe", "pipe", "pipe"],
  }).trim();

  if (status) {
    const lines = status.split("\n").slice(0, 10);
    const summary = lines.join("\n");
    const more =
      status.split("\n").length > 10
        ? `\n... and ${status.split("\n").length - 10} more`
        : "";

    console.log(
      JSON.stringify({
        followup_message: [
          "Uncommitted changes detected. Before finishing, commit all site changes per the git-commit-on-change project rule.",
          "",
          "Run git status, git diff, and git log, then stage and commit with a descriptive message.",
          "Do not push unless the user asked.",
          "",
          "Uncommitted files:",
          summary + more,
        ].join("\n"),
      }),
    );
  }
} catch {
  // Fail open if git is unavailable or not a repo
}
