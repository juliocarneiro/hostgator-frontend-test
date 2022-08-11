<img src="https://img.shields.io/github/last-commit/juliocarneiro/hostgator-frontend-test/master"> <img src="https://img.shields.io/snyk/vulnerabilities/github/juliocarneiro/hostgator-frontend-test">

This is a [Next.js](https://nextjs.org/) boilerplate with Typescript and Styled-Components.

## What is inside?

This project uses lot of stuff as:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [GiHub Actions](https://github.com/features/actions)
- [Docker](https://www.docker.com/)
- [Snyk](https://github.com/snyk/snyk)

## Getting Started

First, install snyk and project dependencies:

```bash
yarn global add snyk
```

```bash
yarn
```

Now, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
<br />
#### Or start project with docker image

```bash
docker-compose up
```

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `security`: runs snyk for search vulnerabilities
- `security-fix`: fix vulnerabilities
- `protect`: update libs with vulnerabilities
- `generate`: generate component paste with index, test and styled (ex: `yarn generate Home`)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Netlify

The easiest way to deploy your Next.js app is to use the [Netlify Platform](https://netlify.com).

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

[Example in production](https://visionary-donut-956c4c.netlify.app/).

## Bônus:

- React 18 e Next 12.
- Utilizei react hooks para o gerenciamento de estados.
- Loader component para carregar os dados do fetch em primeira visita junto ao nprogress loader para trocar de pagina.
- Não usei Material UI nem bootstrap somente css (flexbox) e uma lib de animações css (Animate.css).
- Fiz algumas animações onde os valores são trocados e no próprio filtro da página.
- Utilizei um boilerplate que eu fiz em Typscript + NextJS + Jest/Testing Library focando em performance e PWA.
- Realizei testes unitarios com o jest e testing-library, queria ter usado o cypress como e2e mas nao tive tempo.
- Tambem fiz um pre test e lint com o husky e um deploy automatico com o git + netlyfy
- Não utilizei as imagens do radio button, fiz em css.
