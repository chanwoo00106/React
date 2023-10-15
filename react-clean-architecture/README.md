# React Clean Architecture

✨ **이 프로젝트는 React에서 클린 아키텍처를 어떻게 적용하면 좋을지에 대해서 연구하는 프로젝트입니다** ✨

## 클린 아키텍처란

다른 블로그들을 보면 아래와 같은 이미지를 띄우면서 구구절절 설명하는데

![the clean architecture image](./md-image/clean-architecture.png)

결국 하는 말은 다 같습니다<br />

- **바깥에서는 안쪽을 알 수 있지만 안쪽에서는 바깥 쪽을 알면 안된다**
- **자주 바뀌는 것들은 바깥쪽으로, 바뀌지 않는 것들은 안쪽으로**

제 생각에는 이 두 가지가 핵심인 것 같습니다<br />
이렇게 해주면 디자인이 바뀌거나 웹에서 앱으로 플랫폼이 바뀌어도 대응하기가 쉽기 때문입니다<br />
이걸 보고 클린해 보인다고 해서 클린 아키텍처라고 불리고 있는 것 같습니다

## Nx를 선택한 이유

사실 딱히 이유는 없고 언젠가 한 번 사용해 보고 싶어서 선택했습니다<br />
이번 기회에 Nx도 같이 연구해 보면 좋을 것 같습니다<br />
아래는 Nx에서 기본적으로 생성해 주는 markdown인데 혹시 모르니깐 남기겠습니다

## Start the app

To start the development server run `nx serve app`. Open your browser and navigate to http://localhost:4200/. Happy coding!

## Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

## Want better Editor Integration?

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

## Ready to deploy?

Just run `nx build demoapp` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/core-features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/core-features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)
