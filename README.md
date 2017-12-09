## Build

Run `ng build --prod` to build for production.

## Deploy to subtree

After running `ng build`, there will be changes to the `dist` subdirectory, which contains the `gh-pages` subtree branch.

We will always want to use the newly generated build for the `gh-pages` branch. So, run the following:

```git merge -s subtree gh-pages [-X ours]```

After resolving the conflicts (ignoring all changes from the remote `gh-pages` branch), commit the result:

```git commit -m <message>```

```git push```

```git subtree push --prefix dist origin gh-pages```
