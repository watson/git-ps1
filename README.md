# git-ps1

A simple command line prompt enhancer that shows the state of the
current git repo (ps1).

![zsh example](https://cloud.githubusercontent.com/assets/10602/8272718/b8ad116e-181b-11e5-9ede-6a68cf5454f2.png)

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
above, all you need to do is modify your prompt and have it run
`git-ps1 [format]`.

`format` is optional but will be used as the 1st argument to `printf`.
This allows you to modify the default output by padding it to your
likings:

```
git-ps1          # will output "master"
git-ps1 " [%s]"  # will output " [master]"
```

### zsh example

Add the following to your `~/.zshrc` file:

```
setopt PROMPT_SUBST ; PS1='~%C$(git-ps1 " (%s)")%# '
```

The above commands will modify your prompt to show a tilde (`~`)
followed by the current directory name (`%C`) followed by the ouput of
`git-ps1` and terminated by `% `.

## License

MIT
