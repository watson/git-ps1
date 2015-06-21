# git-ps1

A simple command line prompt enhancer that shows the state of the
current git repo (ps1).

If the health of your git repository is ok, git-ps1 will just show you
the current branch. If the health is bad, git-ps1 will also show 👎 next
to the branch.

If you'd like more details on what the issues are I recommend installing
and running [git-att](https://github.com/watson/git-att) in the root of
your git repo.

## Installation

```
npm install -g git-ps1
```

## Usage

After you've installed git-ps1 as a global module using the command
above, all you need to do is modify your shell prompt and have it run
`git-ps1`.

### zsh

Add the following to your `~/.zsdrc` file:

```
setopt promptsubst
local gitps1='$(git-ps1)'
export PROMPT="~%C[${gitps1}]%# "
```

Besides the first two linces, the important part in the `export`
statement is `${gitps1}` which you can just add to your existing
`PROMPT` if you have already modified it. The above lines will modify
your prompt to show a tilde `~` followed by the current directory name
(`%C`), followed by `[]` optionally containing the git branch name and
emoji and terminated by `% `.

## Debugging

If you see a ❗️ next the branch name it means that git-ps1 encountered
an error. To see the error message simply run git-ps1 in verbose mode
from within the same directory:

```
git-ps1 --verbose
```

## License

MIT
